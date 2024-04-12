import { DataTypes } from 'sequelize';
import { Connection } from '../database/mysql.database.js';

export const Department = Connection.define(
    'Department', 
    {
        departmentID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        numberOfEmployees: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    },
    {
        tableName: 'departments',
        timestamps: false,
        freezeTableName: true,
    },
);
