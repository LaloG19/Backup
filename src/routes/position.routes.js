import { Router } from 'express';
import { methods } from '../controllers/positions.controller.js';

import * as middleware from '../middlewares/express-validator.js';
import * as schemas from '../schemas/position.js';
const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Puestos
 *     description: Puestos de la empresa
 */

/**
 * @swagger
 * /api/v1/puestos:
 *   get:
 *     summary: Obtener una lista de puestos
 *     tags: [Puestos]
 *     responses:
 *       200:
 *         description: Lista de puestos obtenida correctamente
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 name: "Puesto 1"
 *               - id: 2
 *                 name: "Puesto 2"
 *       500:
 *         description: Error al obtener la lista de puestos
 */
router.get('/puestos/', methods.getPositions);

/**
 * @swagger
 * /api/v1/puestos/{positionName}:
 *   get:
 *     summary: Buscar un puesto por nombre
 *     tags: [Puestos]
 *     parameters:
 *       - in: path
 *         name: positionName
 *         required: true
 *         description: Nombre del puesto a buscar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Puesto encontrado
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               name: "Puesto 1"
 *       404:
 *         description: Puesto no encontrado
 *       500:
 *         description: Error al buscar el puesto
 */
router.get('/puestos/:positionName', methods.findPositionbyName);


/**
 * @swagger
 * /api/v1/puestos/crear:
 *   post:
 *     summary: Crear un nuevo puesto
 *     tags: [Puestos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Position'
 *     responses:
 *       200:
 *         description: Puesto creado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               name: "Nuevo Puesto"
 *       409:
 *         description: Error, el puesto ya existe
 *       500:
 *         description: Error interno al crear el puesto
 */
router.post('/puestos/crear', 
    schemas.formPositionSchema,
    middleware.validateSchema,
    methods.createPosition,
);

/**
 * @swagger
 * /api/v1/puestos/modificar/{id}:
 *   patch:
 *     summary: Modificar un puesto existente
 *     tags: [Puestos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del puesto a modificar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Position'
 *     responses:
 *       200:
 *         description: Puesto modificado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               name: "Puesto modificado"
 *       404:
 *         description: Puesto no encontrado
 *       500:
 *         description: Error interno al modificar el puesto
 */
router.patch('/puestos/modificar/:id',
    schemas.formPositionSchema,
    middleware.validateSchema,
    methods.updatePosition,
);


/**
 * @swagger
 * /api/v1/puestos/eliminar/{id}:
 *   delete:
 *     summary: Eliminar un puesto existente
 *     tags: [Puestos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del puesto a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Puesto eliminado exitosamente
 *       404:
 *         description: Puesto no encontrado
 *       500:
 *         description: Error interno al eliminar el puesto
 */
router.delete('/puestos/eliminar/:id',
    schemas.deletePositionsSchema,
    middleware.validateSchema,
    methods.deletePositions,
);

export default router;

