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
router.get('/departamentos/:departmenName', methods.findDepartmentByName)

/**
 * @swagger
 * /api/v1/departamentos/crear:
 *   post:
 *     summary: Crear un nuevo departamento
 *     tags: [Departamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del departamento
 *               description:
 *                 type: string
 *                 description: Descripción del departamento
 *     responses:
 *       200:
 *         description: Departamento creado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               name: "Nuevo Departamento"
 *               description: "Descripción del nuevo departamento"
 *       409:
 *         description: Conflicto, el nombre del departamento ya existe
 *       500:
 *         description: Error interno al crear el departamento
 */
router.post('/departamentos/crear', methods.createDepartment)

/**
 * @swagger
 * /api/v1/departamentos/modificar/{id}:
 *   patch:
 *     summary: Modificar un departamento existente
 *     tags: [Departamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del departamento a modificar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nuevo nombre del departamento
 *               description:
 *                 type: string
 *                 description: Nueva descripción del departamento
 *     responses:
 *       200:
 *         description: Departamento modificado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               name: "Departamento modificado"
 *               description: "Nueva descripción del departamento"
 *       404:
 *         description: Departamento no encontrado
 *       500:
 *         description: Error interno al modificar el departamento
 */
router.patch('/departamentos/modificar/:id', methods.updateDepartment)

/**
 * @swagger
 * /api/v1/departamentos/eliminar/{id}:
 *   delete:
 *     summary: Eliminar un departamento existente
 *     tags: [Departamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del departamento a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Departamento eliminado exitosamente
 *       404:
 *         description: Departamento no encontrado
 *       500:
 *         description: Error interno al eliminar el departamento
 */
router.delete('/departamentos/eliminar/:id', methods.deleteDepartment)

export default router;