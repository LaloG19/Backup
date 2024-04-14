import { Router } from 'express';
import { methods } from '../controllers/positions.controller.js';

import * as middleware from '../middlewares/express-validator.js';
import * as schemas from '../schemas/position.js';
const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Positions
 *     description: Endpoints referentes a los puestos de la empresa
 */

/**
 * @swagger
 * /api/v1/positions:
 *  get:
 *    summary: Obtener una lista de las posiciones
 *    tags: [Positions]
 *    responses:
 *      200:
 *        description: Lista de posiciones obtenida correctamente
 *        content:
 *          application/json:
 *            example:
 *              positions:
 *                - positionID: 1
 *                  name: Posición 1
 *                  description: Descripción de la posición 1
 *                  departmentID: 1
 *                - positionID: 2
 *                  name: Posición 2
 *                  description: Descripción de la posición 2
 *                  departmentID: 2
 *      500:
 *        description: Error al obtener la lista de posiciones
 */
router.get('/', methods.getPositions);

/**
 * @swagger
 * /api/v1/positions/search/{name}:
 *  get:
 *    summary: Obtener una posición por nombre
 *    tags: [Positions]
 *    parameters:
 *      - in: path
 *        name: name
 *        required: true
 *        description: Nombre de la posición a buscar
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Posición encontrada
 *        content:
 *          application/json:
 *            example:
 *              positionID: 1
 *              name: Posición 1
 *              description: Descripción de la posición 1
 *              departmentID: 1
 *      404:
 *        description: Posición no encontrada
 *      500:
 *        description: Error al encontrar posición
 */
router.get('/search/:name', methods.findPositionbyName);

/**
 * @swagger
 * /api/v1/positions/create:
 *  post:
 *    summary: Crear una nueva posición
 *    tags: [Positions]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              description:
 *                type: string
 *              departmentID:
 *                type: integer
 *            example:
 *              name: Nueva Posición
 *              description: Descripción de la nueva posición
 *              departmentID: 1
 *    responses:
 *      200:
 *        description: Posición creada correctamente
 *      409:
 *        description: Ya existe una posición con el mismo nombre
 *      500:
 *        description: Error al crear la posición
 */
router.post('/create', 
    schemas.formPositionSchema,
    middleware.validateSchema,
    methods.createPosition,
);

/**
 * @swagger
 * /api/v1/positions/modify:
 *   patch:
 *     tags: [Positions]
 *     summary: Actualiza una posición
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               positionID:
 *                 type: number
 *                 description: La clave de la posición
 *               name:
 *                 type: string
 *                 description: El nombre de la posición
 *               description:
 *                 type: string
 *                 description: La descripción de la posición
 *               departmentID:
 *                 type: number
 *                 description: La clave del departamento asociado a la posición
 *     responses:
 *       200:
 *         description: Posición actualizada con éxito
 *       404:
 *         description: No se encontró la posición
 *       500:
 *         description: Error al actualizar la posición
 */
router.patch('/modify', methods.updatePosition);

/**
 * @swagger
 * /api/v1/positions/delete:
 *  delete:
 *    summary: Eliminar una posición existente
 *    tags: [Positions]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              positionID:
 *                type: integer
 *                description: ID de la posición a eliminar
 *            example:
 *              positionID: 1
 *    responses:
 *      200:
 *        description: Posición eliminada correctamente
 *      404:
 *        description: La posición no se encontró
 *      500:
 *        description: Error al eliminar la posición
 */
router.delete('/delete',
    schemas.deletePositionsSchema,
    middleware.validateSchema,
    methods.deletePositions,
);


export default router;

