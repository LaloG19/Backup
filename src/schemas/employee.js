import { body } from 'express-validator';

export const formEmployeeSchema = [
    body('name').notEmpty().withMessage('El nombre es obligatorio'),
    body('lastName').notEmpty().withMessage('El apellido es obligatorio'),
    body('department').notEmpty().withMessage('El departamento es obligatorio'),
    body('position').notEmpty().withMessage('La posición es obligatoria'),
    body('salary').isFloat({ min: 0 }).withMessage('El salario debe ser un número positivo'),
    body('email').isEmail().withMessage('El correo electrónico no es válido'),
    body('phoneNumber').optional().isMobilePhone().withMessage('El número de teléfono no es válido'),
    body('address').optional().notEmpty().withMessage('La dirección es obligatoria'),
    body('scheduleID').optional().isInt({ min: 1 }).withMessage('El ID de horario no es válido')
];

export const deleteEmployeeSchema = [
    body('employeeID').isNumeric().withMessage('ID de empleado inválida')
];
