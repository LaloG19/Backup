import { Router } from 'express';
import { methods } from '../controllers/employees.controller.js';

import * as middleware from '../middlewares/express-validator.js';
import * as schemas from '../schemas/employee.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Employees
 *     description: Endpoints relacionados con los empleados
 */

/**
 * @swagger
 * /api/v1/employees:
 *   get:
 *     summary: Obtener una lista de empleados
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: Lista de empleados
 *         content:
 *           application/json:
 *             example:
 *               - employeeID: 1
 *                 name: "John"
 *                 lastName: "Doe"
 *                 department: "IT"
 *                 position: "Developer"
 *                 salary: 50000
 *       500:
 *         description: Error al obtener los datos
 */
router.get('/', methods.getEmployees);

/**
 * @swagger
 * /api/v1/employees:
 *   post:
 *     summary: Crear un nuevo empleado
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del empleado
 *               lastName:
 *                 type: string
 *                 description: Apellido del empleado
 *               department:
 *                 type: string
 *                 description: Departamento del empleado
 *               position:
 *                 type: string
 *                 description: Posición del empleado
 *               salary:
 *                 type: number
 *                 description: Salario del empleado
 *     responses:
 *       200:
 *         description: Empleado creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Employee'
 *       500:
 *         description: Error al crear el empleado
 */
router.post(
    '/',
    schemas.createEmployeeSchema,
    middleware.validateSchema,
    methods.createEmployee
);

/**
 * @swagger
 * /api/v1/employees/{employeeID}:
 *   patch:
 *     summary: Actualizar un empleado existente
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: employeeID
 *         required: true
 *         description: ID del empleado a actualizar
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
 *                 description: Nuevo nombre del empleado
 *               lastName:
 *                 type: string
 *                 description: Nuevo apellido del empleado
 *               department:
 *                 type: string
 *                 description: Nuevo departamento del empleado
 *               position:
 *                 type: string
 *                 description: Nueva posición del empleado
 *               salary:
 *                 type: number
 *                 description: Nuevo salario del empleado
 *     responses:
 *       200:
 *         description: Empleado actualizado exitosamente
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
 *         description: Empleado no encontrado
 *       500:
 *         description: Error al actualizar el empleado
 */
router.patch(
    '/:employeeID',
    schemas.updateEmployeeSchema,
    middleware.validateSchema,
    methods.updateEmployee
);

/**
 * @swagger
 * /api/v1/employees/{employeeID}:
 *   delete:
 *     summary: Eliminar un empleado existente
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: employeeID
 *         required: true
 *         description: ID del empleado a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Empleado eliminado exitosamente
 *       404:
 *         description: Empleado no encontrado
 *       500:
 *         description: Error al eliminar el empleado
 */
router.delete(
    '/:employeeID',
    schemas.deleteEmployeeSchema,
    middleware.validateSchema,
    methods.deleteEmployee
);

export default router;
