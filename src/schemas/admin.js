import { body } from 'express-validator';


export const loginAdminSchema = [
	body('user')
		.notEmpty()
		.withMessage('El usuario es obligatorio')
		.isString()
		.withMessage('El usuario debe ser una cadena de texto'),
	body('password')
		.notEmpty()
		.withMessage('La contraseña es obligatoria')
		.isString()
		.withMessage('La contraseña debe ser una cadena de texto'),	
];