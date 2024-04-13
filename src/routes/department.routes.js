import { Router } from 'express';
import { methods } from '../controllers/departments.controllers.js';

import * as middleware from '../middlewares/express-validator.js';
import * as schemas from '../schemas/department.js';

const router = Router();

/** 
 * @swagger
 * tags:
 * 
 *  - name: Departments
 *    description: Endpoints referentes a los departamentos
 * 
 * 
*/

/**
 * @swagger
 * /api/v1/departments:
 *  get:
 *    summary: Obtener una lista de los departamentos
 *    tags: [Departments]
 *    responses:
 *      200:
 *        description: Lista de departamentos obtenida correctamente
 *        content:
 *          application/json:
 *            example:
 *              departments:
 *                - departmentID: 1
 *                  name: Departamento 1
 *                  description: Descripción del departamento 1
 *                  numberOfEmployees: 10
 *                - departmentID: 2
 *                  name: Departamento 2
 *                  description: Descripción del departamento 2
 *                  numberOfEmployees: 15
 *      500:
 *        description: Error al obtener la lista de departamentos
 */
router.get('/', methods.getDepartments)

/**
 * @swagger
 * /api/v1/departments/search/{name}:
 *  get:
 *    summary: Obtener un departamento por nombre
 *    tags: [Departments]
 *    parameters:
 *      - in: path
 *        name: name
 *        required: true
 *        description: Nombre del departamento a buscar
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Departamento encontrado
 *        content:
 *          application/json:
 *            example:
 *              departmentID: 1
 *              name: Departamento 1
 *              description: Descripción del departamento 1
 *              numberOfEmployees: 10
 *      404:
 *        description: Departamento no encontrado
 *      500:
 *        description: Error al encontrar departamento
 */
router.get('/search/:name', methods.findDepartmentByName);

/**
 * @swagger
 * /api/v1/departments/create:
 *  post:
 *    summary: Crear un nuevo departamento
 *    tags: [Departments]
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
 *              numberOfEmployees:
 *                type: integer
 *            example:
 *              name: Nuevo Departamento
 *              description: Descripción del nuevo departamento
 *              numberOfEmployees: 5
 *    responses:
 *      200:
 *        description: Departamento creado correctamente
 *      409:
 *        description: Ya existe un departamento con el mismo nombre
 *      500:
 *        description: Error al crear el departamento
 */
router.post('/create', 
    schemas.formDepartmentSchema,
    middleware.validateSchema,
    methods.createDepartment, 
);

/**
 * @swagger
 * /api/v1/departments/modify:
 *   patch:
 *     tags: [Departments]
 *     summary: Actualiza un departamento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               departmentID:
 *                 type: number
 *                 description: La clave del departamento
 *               name:
 *                 type: string
 *                 description: El nombre del departamento
 *               description:
 *                 type: string
 *                 description: La descripción del departamento
 *               numberOfEmployees:
 *                 type: number
 *                 description: La cantidad de empleados del departamento
 *     responses:
 *       200:
 *         description: Método de pago actualizado con éxito
 *       404:
 *         description: No se encontró el método de pago
 *       500:
 *         description: Error al actualizar el método de pago
 */
router.patch('/modify', methods.updateDepartment);

/**
 * @swagger
 * /api/v1/departments/delete:
 *  delete:
 *    summary: Eliminar un departamento existente
 *    tags: [Departments]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              departmentID:
 *                type: integer
 *                description: ID del departamento a eliminar
 *            example:
 *              departmentID: 1
 *    responses:
 *      200:
 *        description: Departamento eliminado correctamente
 *      404:
 *        description: El departamento no se encontró
 *      500:
 *        description: Error al eliminar el departamento
 */
router.delete('/delete', 
    schemas.deleteDepartmentSchema,
    middleware.validateSchema,
    methods.deleteDepartment
);
export default router;