import { Router } from 'express';
import { methods } from '../controllers/catalogos.busquedas.controller.js';

import * as middleware from '../middlewares/express-validator.js';
import * as schemas from '../schemas/cat.search.js';
const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Metodos de pago
 *     description: Metodos de pago
 */

/**
 * @swagger
 * /api/v1/catalogo/metodos/moneda:
 *   get:
 *     summary: Obtener una lista de los tipos de moneda
 *     tags: [Metodos de pago]
 *     responses:
 *       200:
 *         description: Lista de los tipos de moneda
 *         content:
 *           application/json:
 *             example:
 *                   - ClaveMoneda: "MXN"
 *                     Descripcion: "Peso Mexicano"
 *
 */
router.get('/metodos/moneda', methods.getTypeCoin);

/**
 * @swagger
 * /api/v1/catalogo/metodos/moneda/buscar/{Descripcion}:
 *   get:
 *     summary: Obtener una lista de los tipos de moneda.
 *     tags: [Metodos de pago]
 *     parameters:
 *       - in: path
 *         name: Descripcion
 *         required: true
 *         description: Descripción del tipo de moneda a buscar.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tipos de moneda encontrados.
 *         content:
 *           application/json:
 *             example:
 *               TiposDeMoneda:
 *                 - ClaveMoneda: "MXN"
 *                   Descripcion: "Peso Mexicano"
 */
router.get('/metodos/moneda/buscar/:id', methods.findTypeCoin);

/**
 * @swagger
 * /api/v1/catalogo/metodos/moneda:
 *   post:
 *     tags:
 *       - Moneda
 *     summary: Crear un nuevo tipo de moneda
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ClaveMoneda:
 *                 type: string
 *               Descripcion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Moneda creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Moneda'
 *       500:
 *         description: Error al crear la moneda
 */
router.post(
	'/metodos/moneda',
	schemas.createTypeCoinSchema,
	middleware.validateSchema,
	methods.createTypeCoin,
);

/**
 * @swagger
 * /api/v1/catalogo/metodos/moneda:
 *   patch:
 *     summary: Actualiza una moneda existente
 *     tags: [Moneda]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ClaveMoneda:
 *                 type: string
 *                 description: La clave de la moneda a actualizar
 *               Descripcion:
 *                 type: string
 *                 description: La nueva descripción de la moneda
 *     responses:
 *       200:
 *         description: Moneda actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       404:
 *         description: Moneda no encontrada
 *       500:
 *         description: Error al actualizar la moneda
 */
router.patch(
	'/metodos/moneda',
	schemas.updateTypeCoinSchema,
	middleware.validateSchema,
	methods.updateTypeCoin,
);

/**
 * @swagger
 * /api/v1/catalogo/metodos/moneda:
 *   delete:
 *     summary: Desactiva una moneda existente
 *     tags: [Moneda]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ClaveMoneda:
 *                 type: string
 *                 description: La clave de la moneda a desactivar
 *     responses:
 *       200:
 *         description: Moneda desactivada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       404:
 *         description: Moneda no encontrada
 *       500:
 *         description: Error al desactivar la moneda
 */
router.delete(
	'/metodos/moneda',
	schemas.deleteTypeCoinSchema,
	middleware.validateSchema,
	methods.deleteTypeCoin,
);

export default router;
