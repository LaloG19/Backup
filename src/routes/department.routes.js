import { Router } from 'express';
import { methods } from '../controllers/departments.controllers.js';

const router = Router();

/** 
 * @swagger
 * tags:
 * 
 *  - name: Departamentos
 *    description: Endpoints referentes a los departamentos
 * 
 * 
*/

/**
 * @swagger
 * /api/v1/departments:
 *   get:
 *     summary: Obtener una lista de los departamentos
 *     tags: [Departments]
 *     responses:
 *       200:
 *         description: Lista de departamentos
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 name: "Departamento 1"
 *               - id: 2
 *                 name: "Departamento 2"
 *       500:
 *         description: Error al obtener los datos
 */
router.get('/departamentos/', methods.getDepartments)

/**
 * @swagger
 * /api/v1/departments/{departmentID}:
 *   get:
 *     summary: Obtener un departamento por ID
 *     tags: [Departments]
 *     parameters:
 *       - in: path
 *         name: departmentID
 *         required: true
 *         description: ID del departamento a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Departamento encontrado
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               name: "Departamento 1"
 *       404:
 *         description: Departamento no encontrado
 *       500:
 *         description: Error al obtener el departamento
 */
router.get('/departamentos/:departmentID', methods.getDepartment)

export default router;