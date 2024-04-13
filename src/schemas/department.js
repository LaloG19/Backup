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
    body('numberOfEmployees')
        .isInt()
        .withMessage('La cantidad de empleados debe ser en valor numérico')
        .notEmpty()
        .withMessage('Se requiere un empleado'),
];

export const updateDepartmentSchema = [
    body('departmentID')
        .isInt()
        .withMessage('La ID del departamento debe ser numérico')
        .notEmpty()
        .withMessage('Se requieren un departamento'),
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
    body('numberOfEmployees')
        .isInt()
        .withMessage('La cantidad de empleados debe ser en valor numérico')
        .notEmpty()
        .withMessage('Se requiere un empleado'),
];

export const deleteDepartmentSchema = [
    body('departmentID')
        .isInt()
        .withMessage('Se requiere un departamento existente')
        .notEmpty()
        .withMessage('Se requiere un departamento'),
];