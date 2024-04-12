import { DataTypes } from 'sequelize';
import { Connection } from '../database/mysql.database.js';

export const Schedule = Connection.define(
	'Schedule',
	{
		scheduleID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		entryTime: {
			type: DataTypes.TIME,
			allowNull: false,
		},
		exitTime: {
			type: DataTypes.TIME,
			allowNull: false,
		},
		monday: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		tuesday: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		wednesday: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		thursday: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		friday: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		saturday: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		sunday: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
	},
	{
		tableName: 'schedules',
		timestamps: false,
		freezeTableName: true,
	},
);
