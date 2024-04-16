
import { body } from "express-validator";

export const formAbsenceSchema = [
    body('employeeID')
        .isInt({ min: 1 })
        .withMessage('El ID del empleado debe ser un número entero mayor que 0')
        .notEmpty()
        .withMessage('El ID del empleado es obligatorio'),
    body('scheduleID')
        .isInt({ min: 1 })
        .withMessage('El ID del horario debe ser un número entero mayor que 0')
        .notEmpty()
        .withMessage('El horario es obligatorio'),
    body('justified')
        .isInt({ min: 0, max: 1 })
        .withMessage('El campo "justified" debe ser un número entero entre 0 y 1 para indicar si la falta está justificada o no')
        .notEmpty()
        .withMessage('Se requiere el campo "justified"'),
];

export const updateAbsenceSchema = [
    body('absenceID')
        .isInt()
        .withMessage('El ID de la falta debe ser numérico')
        .notEmpty()
        .withMessage('Se requiere un ID para la falta'),
    body('employeeID')
        .isInt()
        .withMessage('El ID del empleado debe ser tipo numérico')
        .notEmpty()
        .withMessage('El ID del empleado es obligatorio'),
    body('scheduleID')
        .isInt()
        .withMessage('El ID del horario debe ser de tipo numérico')
        .notEmpty()
        .withMessage('El horario es obligatorio'),
    body('absenceDate')
        .isDate()
        .withMessage('La fecha de la falta debe ser un valor de fecha válido')
        .notEmpty()
        .withMessage('Se requiere este campo'),
    body('justified')
        .isInt()
        .withMessage('Este campo debe ser un valor numérico de 1 o 0 para indicar si la falta está justificada o no')
        .notEmpty()
        .withMessage('Se requiere este campo'),
];

export const deleteAbsenceSchema = [
    body('absenceID')
        .isInt()
        .withMessage('Se requiere un ID válido para la falta a eliminar')
        .notEmpty()
        .withMessage('Se requiere un ID para la falta a eliminar'),
];

export const deleteAbsenceSchemaTrue = [
    body('absenceID')
        .isInt()
        .withMessage('Se requiere un ID válido para la falta a eliminar')
        .notEmpty()
        .withMessage('Se requiere un ID para la falta a eliminar'),
];

