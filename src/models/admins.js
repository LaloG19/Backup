import { DataTypes } from 'sequelize';
import { Connection } from '../database/mysql.database.js';

export const Admin = Connection.define(
    'Admin',
	{
		adminID : {
			type: DataTypes.INTEGER,
            autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		},
		user: {
			type: DataTypes.STRING,
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
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: 'administrators',
		timestamps: false,
		freezeTableName: true,
	},
);