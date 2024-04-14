import { Router } from 'express';
import { methods } from '../controllers/absence.controller.js';

import * as middleware from '../middlewares/express-validator.js';
import * as schemas from '../schemas/absence.js';

const router = Router();

/** 
 * @swagger
 * tags:
 * 
 *  - name: Absence
 *    description: Endpoints de las Faltas
 * 
 * 
*/

/**
 * @swagger
 * /api/v1/absence:
 *  get:
 *    summary: Obtener una lista de las faltas registradas
 *    tags: 
 *      [Absence]
 *    responses:
 *      200:
 *        description: Lista de faltas registradas obtenida correctamente
 *        content:
 *          application/json:
 *            example:
 *                - absenceID: 1
 *                  employeeID: 1
 *                  scheduleID: 1
 *                  absenceDate: 13-04-2024
 *                  justified: 1
 *                - absenceID: 2
 *                  employeeID: 2
 *                  scheduleID: 2
 *                  absenceDate: 13-04-2024
 *                  justified: 1
 *      500:
 *        description: Error al obtener la lista de faltas
 */
router.get('/', methods.getAbsence)

/**
 * @swagger
 * /api/v1/absence/search/{name}:
 *  get:
 *    summary: Buscar ausencias por nombre de empleado
 *    tags: [Absence]
 *    parameters:
 *      - in: path
 *        name: name
 *        required: true
 *        schema:
 *          type: string
 *        description: Nombre del empleado
 *    responses:
 *      200:
 *        description: Ausencias encontradas
 *      500:
 *        description: Error al buscar las ausencias
 */
router.get('/search/:id', methods.findAbsenceByID);

/**
 * @swagger
 * /api/v1/absence/employee/{employeeID}:
 *  get:
 *    summary: Buscar faltas de un empleado por matrícula
 *    tags: [Absence]
 *    parameters:
 *      - in: path
 *        name: employeeID
 *        required: true
 *        schema:
 *          type: integer
 *        description: Matrícula del empleado
 *    responses:
 *      200:
 *        description: Faltas encontradas
 *      404:
 *        description: No se encontraron faltas para la matrícula proporcionada
 *      500:
 *        description: Error al buscar las faltas
 */
router.get('/employee/:employeeID', methods.findAbsenceByEmployeeID);

/**
 * @swagger
 * /api/v1/absence/create:
 *  post:
 *    summary: Crear una Falta
 *    tags: [Absence]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              employeeID:
 *                type: integer
 *              scheduleID:
 *                type: integer
 *              justified:
 *                type: integer
 *            example:
 *              employeeID: 1
 *              scheduleID: 1
 *              absenceDate: "2024-04-13"
 *              justified: 1
 *    responses:
 *      200:
 *        description: Falta creada correctamente
 *      409:
 *        description: Ya existe una falta con los mismos datos
 *      500:
 *        description: Error al crear la falta
 */
router.post('/create', 
    schemas.formAbsenceSchema,
    middleware.validateSchema,
    methods.createAbsence, 
);

/**
 * @swagger
 * /api/v1/absence/update:
 *   patch:
 *     tags: [Absence]
 *     summary: Actualiza una falta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               absenceID:
 *                 type: number
 *                 description: La clave de la falta
 *               employeeID:
 *                 type: number
 *                 description: La clave del empleado asociado a la falta
 *               scheduleID:
 *                 type: number
 *                 description: La clave del horario asociado a la falta
 *               absenceDate:
 *                 type: string
 *                 format: date
 *                 description: La fecha de la falta
 *               justified:
 *                 type: number
 *                 description: Indica si la falta está justificada (1 para sí, 0 para no)
 *     responses:
 *       200:
 *         description: Falta actualizada con éxito
 *       404:
 *         description: No se encontró la falta
 *       500:
 *         description: Error al actualizar la falta
 */
router.patch('/update', methods.updateAbsence);

/**
 * @swagger
 * /api/v1/absence/delete:
 *   delete:
 *     summary: Eliminar una falta existente
 *     tags: [Absence]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               absenceID:
 *                 type: integer
 *                 description: ID de la falta a eliminar
 *     responses:
 *       200:
 *         description: Falta eliminada correctamente
 *       404:
 *         description: La falta no se encontró
 *       500:
 *         description: Error al eliminar la falta
 */

router.delete('/delete', 
    schemas.deleteAbsenceSchema,
    middleware.validateSchema,
    methods.deleteAbsence
);
export default router;
