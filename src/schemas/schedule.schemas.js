import { body } from 'express-validator';

export const createScheduleSchema = [
	body('entryTime')
		.notEmpty()
		.withMessage('EntryTime cannot be empty')
		.isString()
		.withMessage('The date must be in the format of date'),
	body('exitTime')
		.notEmpty()
		.withMessage('ExitTime cannot be empty')
		.isString()
		.withMessage('The time must be a text string'),
	body('monday')
		.notEmpty()
		.isBoolean()
		.withMessage('Monday must be a boolean, false or true'),
	body('tuesday')
		.notEmpty()
		.isBoolean()
		.withMessage('Tuesday must be a boolean, false or true'),
	body('wednesday')
		.notEmpty()
		.isBoolean()
		.withMessage('Wednesday must be a boolean, false or true'),
	body('thursday')
		.notEmpty()
		.isBoolean()
		.withMessage('Thursday must be a boolean, false or true'),
	body('friday')
		.notEmpty()
		.isBoolean()
		.withMessage('Friday must be a boolean, false or true'),
	body('saturday')
		.notEmpty()
		.isBoolean()
		.withMessage('Saturday must be a boolean, false or true'),
	body('sunday')
		.notEmpty()
		.isBoolean()
		.withMessage('Sunday must be a boolean, false or true'),
];

export const updateScheduleSchema = [
	body('scheduleID')
		.notEmpty()
		.isInt()
		.withMessage('The scheduleID must be an integer'),
	...createScheduleSchema,
];

export const deleteScheduleSchema = [
	body('scheduleID')
		.notEmpty()
		.isInt()
		.withMessage('The scheduleID must be an integer'),
];
