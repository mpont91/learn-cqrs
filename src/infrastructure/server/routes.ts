import { Router } from 'express';
import { GameService } from '../../domain/services/game-service';
import { GameRepository } from '../repositories/game-repository';
import { CreateGameCommand } from '../../application/commands/create-game-command';
import { UpdateGameCommand } from '../../application/commands/update-game-command';
import { DeleteGameCommand } from '../../application/commands/delete-game-command';
import { GetGameQuery } from '../../application/queries/get-game-query';

const router = Router();
const gameRepository = new GameRepository();
const gameService = new GameService(gameRepository);

// Commands
const createGameCommand = new CreateGameCommand(gameService);
const updateGameCommand = new UpdateGameCommand(gameService);
const deleteGameCommand = new DeleteGameCommand(gameService);

// Queries
const getGameQuery = new GetGameQuery(gameService);

// Routes
router.post('/games', async (req, res) => {
    const { name } = req.body;
    try {
        await createGameCommand.execute(name);
        res.status(201).send({ message: 'Game created successfully' });
    } catch (err) {
        res.status(500).send({});
    }
});

router.put('/games/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        await updateGameCommand.execute(id, name);
        res.status(200).send({ message: 'Game updated successfully' });
    } catch (err) {
        res.status(500).send({});
    }
});

router.delete('/games/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await deleteGameCommand.execute(id);
        res.status(200).send({ message: 'Game deleted successfully' });
    } catch (err) {
        res.status(500).send({});
    }
});

router.get('/games/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const game = await getGameQuery.execute(id);
        if (game) {
            res.status(200).json(game);
        } else {
            res.status(404).send({ message: 'Game not found' });
        }
    } catch (err) {
        res.status(500).send({});
    }
});

router.get('/games', async (req, res) => {
    try {
        const games = await getGameQuery.executeAll();
        res.status(200).json(games);
    } catch (err) {
        console.log(err)
        res.status(500).send({});
    }
});

export { router };