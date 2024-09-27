import { Game } from '../../domain/entities/game';
import { GameModel } from '../database/game-model';
import { GameRepositoryInterface } from "../../application/interfaces/game-repository-interface";

export class GameRepository implements GameRepositoryInterface {
    async find(id: string): Promise<Game | null> {
        const game = await GameModel.findByPk(id);
        if (!game) return null;
        return new Game(game.id, game.name);
    }

    async all(): Promise<Game[]> {
        const games = await GameModel.findAll();
        return games.map(game => new Game(game.id, game.name));
    }

    async create(game: Game): Promise<void> {
        await GameModel.create({
            id: game.id,
            name: game.name,
        });
    }

    async update(game: Game): Promise<void> {
        await GameModel.update(
            { name: game.name },
            { where: { id: game.id } }
        );
    }

    async delete(id: string): Promise<void> {
        await GameModel.destroy({ where: { id } });
    }
}
