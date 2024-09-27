import { GameService } from '../../domain/services/game-service';

export class CreateGameCommand {
    constructor(private readonly gameService: GameService) {}

    async execute(name: string): Promise<void> {
        await this.gameService.createGame(name);
    }
}
