import { Router } from 'express';
import { methods } from '../controllers/admins.controller.js';

import * as middleware from '../middlewares/express-validator.js';
import * as schemas from '../schemas/admin.js';
const router = Router();

/**
 * @swagger
 * tags:
 *
 *   - name: Admins
 *     description: Enpoints referentes a los administradores, login y getAll
 *
 *
 */

/**
 * @swagger
 * /api/v1/admins:
 *   get:
 *     summary: Obtener una lista de los administradores
 *     tags: [Admins]
 *     responses:
 *       200:
 *         description: Lista de los tipos de moneda
 *         content:
 *           application/json:
 *             example:
 *                   - ClaveMoneda: "MXN"
 *                     Descripcion: "Peso Mexicano"
 *       500:
 *         description: Error al obtener los datos
 */
router.get('/', methods.getAdmins);

/**
 * @swagger
 * /api/v1/admins/login:
 *   post:
 *     summary: Validar datos para iniciar sesión
 *     tags: [Admins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 description: El usuario para iniciar sesión
 *               password:
 *                 type: string
 *                 description: La contraseña para iniciar sesión
 *     responses:
 *       200:
 *         description: Usuario encontrado
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
 *         description: Usuario o contraseña incorrectos
 *       500:
 *         description: Error al iniciar sesión
 */
router.post(
	'/login',
	schemas.loginAdminSchema,
	middleware.validateSchema,
	methods.loginAdmin,
);

export default router;