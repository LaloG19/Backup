import { body } from 'express-validator';

export const formPositionSchema = [
    body('name')
        .notEmpty()
        .withMessage('Ingresa un nombre para el puesto')
        .isString()
        .withMessage('El nombre debe ser de tipo cadena'),
    body('description')
        .notEmpty()
        .withMessage('Ingresa una descripción para el puesto')
        .isString()
        .withMessage('La descripcion debe ser de tipo cadena'),
    body('departament')
        .notEmpty()
        .withMessage('Ingresa su departamento correspondiente')
        .isInt()
        .withMessage('Ingresa el valor correspondiente')
];

export const deletePositionsSchema = [
    body('positionID')
        .notEmpty()
        .isIntenger()
        .withMessage('Se requiere un puesto existente')
];