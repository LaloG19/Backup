import { body } from 'express-validator';

export const employeeSchema = [
	body('name')
		.notEmpty()
		.withMessage('El nombre del empleado es obligatorio')
		.isString()
		.withMessage('El nombre debe ser una cadena de texto'),
	body('lastName')
		.notEmpty()
		.withMessage('El apellido del empleado es obligatorio')
		.isString()
		.withMessage('El apellido debe ser una cadena de texto'),
	body('department')
		.notEmpty()
		.withMessage('El departamento del empleado es obligatorio')
		.isString()
		.withMessage('El departamento debe ser una cadena de texto'),
	body('position')
		.notEmpty()
		.withMessage('El cargo del empleado es obligatorio')
		.isString()
		.withMessage('El cargo debe ser una cadena de texto'),
	body('salary')
		.notEmpty()
		.withMessage('El salario del empleado es obligatorio')
		.isNumeric()
		.withMessage('El salario debe ser un número'),
];
