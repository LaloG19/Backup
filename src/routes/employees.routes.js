import { Router } from 'express';
import { methods } from '../controllers/employees.controller.js';

import * as middleware from '../middlewares/express-validator.js';
import * as schemas from '../schemas/employee.js';

const router = Router();

/**
 * @swagger
 * tags:
 *
 *  - name: Employees
 *    description: Endpoints referentes a los empleados
 *
 *
 */

/**
 * @swagger
 * /api/v1/employees:
 *  get:
 *    summary: Obtener una lista de los empleados
 *    tags: [Employees]
 *    responses:
 *      200:
 *        description: Lista de empleados obtenida correctamente
 *        content:
 *          application/json:
 *            example:
 *              employees:
 *                - employeeID: 1
 *                  name: Empleado 1
 *                  lastName: Apellido del Empleado 1
 *                  positionID: 1
 *                  salary: 1000.0
 *                  email: empleado1@example.com
 *                  phoneNumber: 123456789
 *                  address: Dirección del Empleado 1
 *                  scheduleID: 1
 *                - employeeID: 2
 *                  name: Empleado 2
 *                  lastName: Apellido del Empleado 2
 *                  positionID: 2
 *                  salary: 1500.0
 *                  email: empleado2@example.com
 *                  phoneNumber: 987654321
 *                  address: Dirección del Empleado 2
 *                  scheduleID: 2
 *      500:
 *        description: Error al obtener la lista de empleados
 */
router.get('/', methods.getEmployees);

/**
 * @swagger
 * /api/v1/employees/search/{name}:
 *  get:
 *    summary: Obtener un empleado por nombre
 *    tags: [Employees]
 *    parameters:
 *      - in: path
 *        name: name
 *        required: true
 *        description: Nombre del empleado a buscar
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Empleado encontrado
 *        content:
 *          application/json:
 *            example:
 *              employeeID: 1
 *              name: Empleado 1
 *              lastName: Apellido del Empleado 1
 *              positionID: 1
 *              salary: 1000.0
 *              email: empleado1@example.com
 *              phoneNumber: 123456789
 *              address: Dirección del Empleado 1
 *              scheduleID: 1
 *      404:
 *        description: Empleado no encontrado
 *      500:
 *        description: Error al encontrar empleado
 */
router.get('/search/:name', methods.findEmployeeByName);

/**
 * @swagger
 * /api/v1/employees:
 *  get:
 *    summary: Obtener una lista de los empleados
 *    tags: [Employees]
 *    responses:
 *      200:
 *        description: Lista de empleados obtenida correctamente
 *        content:
 *          application/json:
 *            example:
 *              employees:
 *                - employeeID: 1
 *                  name: Empleado 1
 *                  lastName: Apellido del Empleado 1
 *                  positionID: 1
 *                  salary: 1000.0
 *                  email: empleado1@example.com
 *                  phoneNumber: 123456789
 *                  address: Dirección del Empleado 1
 *                  scheduleID: 1
 *                - employeeID: 2
 *                  name: Empleado 2
 *                  lastName: Apellido del Empleado 2
 *                  positionID: 2
 *                  salary: 1500.0
 *                  email: empleado2@example.com
 *                  phoneNumber: 987654321
 *                  address: Dirección del Empleado 2
 *                  scheduleID: 2
 *      500:
 *        description: Error al obtener la lista de empleados
 */
router.get('/', methods.getEmployees);

/**
 * @swagger
 * /api/v1/employees/busqueda/{id}:
 *   get:
 *     summary: GetEmployeeByEnrollment
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of employee
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: View of one employee
 *         content:
 *           application/json:
 *             example:
 *               employeeID: 1
 *               name: Pepe
 *               lastname: Perez
 *               positionID: 2
 *               salary: "2000"
 *               email: pepe@gmail.com
 *               phoneNumber: "984625247242"
 *               address: cp754 SM 464 MZ84 LT73
 *               scheduleID: 2
 *       404:
 *         description: Enrollment not found
 *       500:
 *         description: Error in obtaining user Enrollment
 */
router.get('/busqueda/:id', methods.findOneEmployeeByID);

/**
 * @swagger
 * /api/v1/employees/create:
 *  post:
 *    summary: Crear un nuevo empleado
 *    tags: [Employees]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              lastName:
 *                type: string
 *              positionID:
 *                type: integer
 *              salary:
 *                type: number
 *              email:
 *                type: string
 *                format: email
 *              phoneNumber:
 *                type: integer
 *              address:
 *                type: string
 *              scheduleID:
 *                type: integer
 *    responses:
 *      200:
 *        description: Empleado creado correctamente
 *      409:
 *        description: Ya existe un empleado con el mismo nombre y apellido
 *      500:
 *        description: Error al crear el empleado
 */
router.post(
	'/create',
	schemas.formEmployeeSchema,
	middleware.validateSchema,
	methods.createEmployee,
);

/**
 * @swagger
 * /api/v1/employees/modify:
 *   patch:
 *     tags: [Employees]
 *     summary: Actualiza un empleado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               employeeID:
 *                 type: number
 *                 description: La ID del empleado
 *               name:
 *                 type: string
 *                 description: El nombre del empleado
 *               lastName:
 *                 type: string
 *                 description: El apellido del empleado
 *               positionID:
 *                 type: integer
 *                 description: La ID de la posición del empleado
 *               salary:
 *                 type: number
 *                 description: El salario del empleado
 *               email:
 *                 type: string
 *                 description: El correo electrónico del empleado
 *               phoneNumber:
 *                 type: integer
 *                 description: El número de teléfono del empleado
 *               address:
 *                 type: string
 *                 description: La dirección del empleado
 *               scheduleID:
 *                 type: integer
 *                 description: El ID del horario del empleado
 *     responses:
 *       200:
 *         description: Empleado actualizado con éxito
 *       404:
 *         description: No se encontró el empleado
 *       500:
 *         description: Error al actualizar el empleado
 */
router.patch('/modify', methods.updateEmployee);

/**
 * @swagger
 * /api/v1/employees/delete:
 *  delete:
 *    summary: Eliminar un empleado existente
 *    tags: [Employees]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              employeeID:
 *                type: integer
 *                description: ID del empleado a eliminar
 *    responses:
 *      200:
 *        description: Empleado eliminado correctamente
 *      404:
 *        description: El empleado no se encontró
 *      500:
 *        description: Error al eliminar el empleado
 */
router.delete(
	'/delete',
	schemas.deleteEmployeeSchema,
	middleware.validateSchema,
	methods.deleteEmployee,
);

export default router;
