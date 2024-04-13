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
	body('entryTime')
		.optional()
		.isString()
		.withMessage('The EntryTime must be in the format of date'),
	body('exitTime')
		.optional()
		.isString()
		.withMessage('The time must be a text string'),
	body('monday')
		.optional()
		.isBoolean()
		.withMessage('Monday, Just change if you need it'),
	body('tuesday')
		.optional()
		.isBoolean()
		.withMessage('Tuesday, Just change if you need it'),
	body('wednesday')
		.optional()
		.isBoolean()
		.withMessage('Wednesday, Just change if you need it'),
	body('thursday')
		.optional()
		.isBoolean()
		.withMessage('Thursday, Just change if you need it'),
	body('friday')
		.optional()
		.isBoolean()
		.withMessage('Friday, Just change if you need it'),
	body('saturday')
		.optional()
		.isBoolean()
		.withMessage('Saturday, Just change if you need it'),
	body('sunday')
		.optional()
		.isBoolean()
		.withMessage('Sunday, Just change if you need it'),
];

export const deleteScheduleSchema = [
	body('scheduleID')
		.notEmpty()
		.isInt()
		.withMessage('The scheduleID must be an integer'),
];
