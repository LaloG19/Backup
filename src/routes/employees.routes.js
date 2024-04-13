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
 *                  department: Departamento 1
 *                  position: Posición del Empleado 1
 *                  salary: 1000
 *                  email: empleado1@example.com
 *                - employeeID: 2
 *                  name: Empleado 2
 *                  lastName: Apellido del Empleado 2
 *                  department: Departamento 2
 *                  position: Posición del Empleado 2
 *                  salary: 1500
 *                  email: empleado2@example.com
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
 *              department: Departamento 1
 *              position: Posición del Empleado 1
 *              salary: 1000
 *              email: empleado1@example.com
 *      404:
 *        description: Empleado no encontrado
 *      500:
 *        description: Error al encontrar empleado
 */
router.get('/search/:name', methods.findEmployeeByName);

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
 *              department:
 *                type: string
 *              position:
 *                type: string
 *              salary:
 *                type: number
 *              email:
 *                type: string
 *              phoneNumber:
 *                type: string
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
router.post('/create', 
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
 *               department:
 *                 type: string
 *                 description: El departamento del empleado
 *               position:
 *                 type: string
 *                 description: La posición del empleado
 *               salary:
 *                 type: number
 *                 description: El salario del empleado
 *               email:
 *                 type: string
 *                 description: El correo electrónico del empleado
 *               phoneNumber:
 *                 type: string
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
 *            example:
 *              employeeID: 1
 *    responses:
 *      200:
 *        description: Empleado eliminado correctamente
 *      404:
 *        description: El empleado no se encontró
 *      500:
 *        description: Error al eliminar el empleado
 */
router.delete('/delete', 
    schemas.deleteEmployeeSchema,
    middleware.validateSchema,
    methods.deleteEmployee
);

export default router;
