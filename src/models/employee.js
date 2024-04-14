import { DataTypes } from 'sequelize';
import { Connection } from '../database/mysql.database.js';

export const Employee = Connection.define(
    'Employee', 
    {
        employeeID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        department: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        position: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        salary: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        }
    },
    {
        tableName: 'employees',
        timestamps: false,
        freezeTableName: true,
    },
);