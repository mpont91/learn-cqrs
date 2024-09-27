import express from 'express';
import { router } from './routes';
import { sequelize } from '../config/database';

const app = express();
app.use(express.json());
app.use('/api', router);

const startServer = async (): Promise<void> => {
    try {
        await sequelize.sync();
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    } catch (err) {
        console.error('Failed to start server:', err);
    }
};

startServer()