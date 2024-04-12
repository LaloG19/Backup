import { body } from "express-validator";

export const formDepartmentSchema = [
    body('name')
        .isString()
        .withMessage('El nombre debe ser de tipo texto')
        .notEmpty()
        .withMessage('El nombre del departamento es obligatorio'),
    body('description')
        .isString()
        .withMessage('La descripción debe ser de tipo texto')
        .notEmpty()
        .withMessage('La descripción es obligatorio'),
];

export const deleteDepartmentSchema = [
    body('departmentID')
        .isInt()
        .withMessage('Se requiere un departamento existente')
        .notEmpty()
        .withMessage('Se requiere un departamento'),
];