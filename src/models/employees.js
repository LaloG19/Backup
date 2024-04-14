import { DataTypes } from 'sequelize';
import { Connection } from '../database/mysql.database.js';

export const Employee = Connection.define(
    'Employee',
    {
        employeeID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        positionID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        salary: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        scheduleID: {
            type: DataTypes.INTEGER,
            allowNull: true 
        }
    },
    {
        tableName: 'employees',
        timestamps: false,
        freezeTableName: true
    }
);
