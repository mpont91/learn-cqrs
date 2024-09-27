import { GameService } from '../../domain/services/game-service';

export class DeleteGameCommand {
    constructor(private readonly gameService: GameService) {}

    async execute(id: string): Promise<void> {
        await this.gameService.deleteGame(id);
    }
}
