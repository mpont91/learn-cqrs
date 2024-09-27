import { GameService } from '../../domain/services/game-service';
import { Game } from '../../domain/entities/game';

export class GetGameQuery {
    constructor(private readonly gameService: GameService) {}

    async execute(id: string): Promise<Game | null> {
        return await this.gameService.getGameById(id);
    }

    async executeAll(): Promise<Game[]> {
        return await this.gameService.getAllGames();
    }
}
