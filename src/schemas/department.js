import { body } from "express-validator";

export const formDepartmentSchema = [
    body('name')
        .notEmpty()
        .withMessage('El nombre del departamento es obligatorio')
        .isString()
        .withMessage('El nombre debe ser de tipo texto'),
    body('description')
        .notEmpty()
        .withMessage('La descripción es obligatorio')
        .isString()
        .withMessage('La descripción debe ser de tipo texto'),
];