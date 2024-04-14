import { body } from 'express-validator';

export const formEmployeeSchema = [

    body('name')
        .notEmpty()
        .withMessage('El nombre es obligatorio')
        .isString()
        .withMessage('El nombre debe ser una cadena de texto'),
    body('lastName')
        .notEmpty()
        .withMessage('El apellido es obligatorio')
        .isString()
        .withMessage('El apellido debe ser una cadena de texto'),
    body('positionID')
        .isInt({ min: 1 })
        .withMessage('El ID de departamento no es válido'),
    body('salary')
        .isFloat({ min: 0 })
        .withMessage('El salario debe ser un número positivo'),
    body('email')
        .isEmail()
        .withMessage('El correo electrónico no es válido'),
    body('phoneNumber')
        .optional()
        .isMobilePhone()
        .withMessage('El número de teléfono no es válido'),
    body('address')
        .optional()
        .notEmpty()
        .withMessage('La dirección es obligatoria'),
    body('scheduleID')
        .optional()
        .isInt({ min: 1 })
        .withMessage('El ID de horario no es válido')
];

export const updateEmployeeSchema = [
    body('employeeID')
        .isInt({ min: 1 })
        .withMessage('El ID del empleado no es válido'),
    ...formEmployeeSchema
];

export const deleteEmployeeSchema = [
    body('employeeID')
        .isInt({ min: 1 })
        .withMessage('El ID del empleado no es válido')
];
