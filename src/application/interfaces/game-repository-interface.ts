import { Game } from '../../domain/entities/game';

export interface GameRepositoryInterface {
    find(id: string): Promise<Game | null>;
    all(): Promise<Game[]>;
    create(game: Game): Promise<void>;
    update(game: Game): Promise<void>;
    delete(id: string): Promise<void>;
}