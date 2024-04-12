import { DataTypes } from 'sequelize';
import { Connection } from '../database/mysql.database.js';

export const Position = Connection.define('Position', {
    positionID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    departmentID:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'Department',
            key: 'departmentID'
        },
    }
});