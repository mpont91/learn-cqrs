import { GameService } from '../../domain/services/game-service';

export class UpdateGameCommand {
    constructor(private readonly gameService: GameService) {}

    async execute(id: string, name: string): Promise<void> {
        await this.gameService.updateGame(id, name);
    }
}
