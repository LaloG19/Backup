import { body } from 'express-validator';

export const formPositionSchema = [
    body('name')
        .isString()
        .withMessage('El nombre debe ser de tipo texto')
        .notEmpty()
        .withMessage('El nombre del puesto es obligatorio'),
    body('description')
        .isString()
        .withMessage('La descripción debe ser de tipo texto')
        .notEmpty()
        .withMessage('La descripción es obligatorio'),
    body('departmentID')
        .isInt()
        .withMessage('Ingresa el valor del departamento correspondiente')
        .notEmpty()
        .withMessage('El departamento es obligatorio')
];

export const deletePositionSchema = [
    body('positionID')
        .isInt()
        .withMessage('Ingresa el valor del puesto correspondiente')
        .notEmpty()
        .withMessage('Ingresa un puesto existente'),
    body('name')
        .isString()
        .withMessage('El nombre debe ser de tipo texto')
        .notEmpty()
        .withMessage('El nombre del puesto es obligatorio'),
    body('description')
        .isString()
        .withMessage('La descripción debe ser de tipo texto')
        .notEmpty()
        .withMessage('La descripción es obligatorio'),
    body('departmentID')
        .isInt()
        .withMessage('Ingresa el valor del departamento correspondiente')
        .notEmpty()
        .withMessage('El departamento es obligatorio')
]

export const deletePositionsSchema = [
    body('positionID')
        .isInt()
        .withMessage('Ingresa el valor del puesto correspondiente')
        .notEmpty()
        .withMessage('Ingresa un puesto existente'),
];