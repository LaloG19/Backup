import { body } from 'express-validator';

export const findColSchema = [
	body('cp')
		.isInt()
		.withMessage('El código postal debe ser un numero entero')
		.notEmpty()
		.withMessage('El código postal es obligatorio y debe ser un numero entero'),
	body('colonia')
		.isString()
		.withMessage('La colonia debe ser una cadena de texto')
		.notEmpty()
		.withMessage('La colonia obligatoria y debe ser una cadena de texto'),
];

export const createTypeCoinSchema = [
	body('ClaveMoneda')
		.notEmpty()
		.withMessage('El codigo de moneda no puede estar vacia')
		.isLength({ min: 3, max: 3 })
		.withMessage('El codigo moneda tiene que ser de 3 caracteres')
		.isString()
		.withMessage('El codigo moneda tiene que ser un valor de texto o numero'),
	body('Descripcion')
		.notEmpty()
		.withMessage('No puedes dejar la descripcion vacia, llena el campo')
		.isString()
		.withMessage('El campo descripcion tiene que ser una cadena de texto'),
];

export const updateTypeCoinSchema = [
	body('ClaveMoneda')
		.notEmpty()
		.isString()
		.withMessage('El codigo de la moneda no puede estar vacia'),
	body('Descripcion')
		.optional()
		.isString()
		.withMessage('La descripcion no puede estar vacia'),
];

export const deleteTypeCoinSchema = [
	body('ClaveMoneda')
		.notEmpty()
		.isString()
		.withMessage('El codigo de la moneda no puede estar vacia'),
];