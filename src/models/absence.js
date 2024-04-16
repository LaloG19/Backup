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
    },
    {
        tableName: 'employee', 
        timestamps: false,
        freezeTableName: true,
    },
);

export const Schedule = Connection.define(
    'Schedule', 
    {
        scheduleID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        
    },
    {
        tableName: 'Schedule', 
        freezeTableName: true,
    },
);

export const Absence = Connection.define(
    'Absence', 
    {
        absenceID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        employeeID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'Employee',
                key: 'employeeID'
            },
        },
        scheduleID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'Schedule',
                key: 'scheduleID'
            },
        },
        absenceDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        justified: {
            type: DataTypes.TINYINT(1),
            allowNull: false,
        },
    },
    {
        tableName: 'absences',
        timestamps: false,
        freezeTableName: true,
    },
);

// Define la relación entre Absences y Employee
Absence.belongsTo(Employee, { foreignKey: 'employeeID' }); 

// Define la relación entre Absences y Schedule
Absence.belongsTo(Schedule, { foreignKey: 'scheduleID' }); 
