import { Game } from '../entities/game';
import { GameRepositoryInterface } from "../../application/interfaces/game-repository-interface";

export class GameService {
    constructor(private readonly gameRepository: GameRepositoryInterface) {}

    async createGame(name: string): Promise<void> {
        const game = new Game(Date.now().toString(), name);
        await this.gameRepository.create(game);
    }

    async updateGame(id: string, name: string): Promise<void> {
        const game = await this.gameRepository.find(id);
        if (!game) {
            throw new Error('Game not found');
        }
        game.name = name;
        await this.gameRepository.update(game);
    }

    async deleteGame(id: string): Promise<void> {
        await this.gameRepository.delete(id);
    }

    async getGameById(id: string): Promise<Game | null> {
        return this.gameRepository.find(id);
    }

    async getAllGames(): Promise<Game[]> {
        return this.gameRepository.all();
    }
}
