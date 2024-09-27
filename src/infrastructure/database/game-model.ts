import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class GameModel extends Model {
    public id!: string;
    public name!: string;
}

GameModel.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'games',
        timestamps: false,
    }
);
