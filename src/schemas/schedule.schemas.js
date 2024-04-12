import { body } from 'express-validator';

export const createScheduleSchema = [
	body('EntryTime')
		.notEmpty()
		.withMessage('EntryTime cannot be empty')
		.isString()
		.withMessage('The date must be in the format of date'),
	body('ExitTime')
		.notEmpty()
		.withMessage('ExitTime cannot be empty')
		.isString()
		.withMessage('The time must be a text string'),
	body('Monday').notEmpty().isBoolean().withMessage('Monday must be a boolean'),
	body('Tuesday')
		.notEmpty()
		.isBoolean()
		.withMessage('Tuesday must be a boolean, false or true'),
	body('Wednesday')
		.notEmpty()
		.isBoolean()
		.withMessage('Wednesday must be a boolean, false or true'),
	body('Thursday')
		.notEmpty()
		.isBoolean()
		.withMessage('Thursday must be a boolean, false or true'),
	body('Friday')
		.notEmpty()
		.isBoolean()
		.withMessage('Friday must be a boolean, false or true'),
	body('Saturday')
		.notEmpty()
		.isBoolean()
		.withMessage('Saturday must be a boolean, false or true'),
	body('Sunday')
		.notEmpty()
		.isBoolean()
		.withMessage('Sunday must be a boolean, false or true'),
];

export const updateScheduleSchema = [
	body('EntryTime')
		.optional()
		.isString()
		.withMessage('The EntryTime must be in the format of date'),
	body('ExitTime')
		.optional()
		.isString()
		.withMessage('The time must be a text string'),
	body('Monday')
		.optional()
		.isBoolean()
		.withMessage('Monday, Just change if you need it'),
	body('Tuesday')
		.optional()
		.isBoolean()
		.withMessage('Tuesday, Just change if you need it'),
	body('Wednesday')
		.optional()
		.isBoolean()
		.withMessage('Wednesday, Just change if you need it'),
	body('Thursday')
		.optional()
		.isBoolean()
		.withMessage('Thursday, Just change if you need it'),
	body('Friday')
		.optional()
		.isBoolean()
		.withMessage('Friday, Just change if you need it'),
	body('Saturday')
		.optional()
		.isBoolean()
		.withMessage('Saturday, Just change if you need it'),
	body('Sunday')
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
