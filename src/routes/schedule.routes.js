import { Router } from 'express';
import { methods } from '../controllers/catalogos.busquedas.controller.js';

import * as middleware from '../middlewares/express-validator.js';
import * as schemas from '../schemas/schedule.schemas.js';

const router = Router();

/**
 * @swagger
 * tags:
 *  - name: GetAllSchedules
 *   description: Obtener todos los schedules
 *
 *
 * @swagger
 * /api/v1/schedule:
 *  get:
 *    summary: Get all schedules
 *    tags: [Schedule]
 *    responses:
 *      200:
 *        description: List of schedules
 *        content:
 *          application/json:
 *            example:
 *                  - scheduleID: 1
 *                    EntryTime: "08:00"
 *                    ExitTime: "16:00"
 *                    Monday: true
 *                    Tuesday: true
 *                    Wednesday: true
 *                    Thursday: true
 *                    Friday: true
 *                    Saturday: false
 *                    Sunday: false
 *
 *     500:
 *        Error in obtaining data
 *
 *
 */
router.get('/GetSchedules', methods.getSchedule);

/**
 * @swagger
 * /api/v1/schedule/scheduleUser/:scheduleID:
 *  get:
 *    summary: GetOneUserSchedule
 *    tags: [Schedule]
 *    parameters:
 *      - in: path
 *      name: scheduleID
 *      required: true
 *      description: ID of the schedule
 *      schema:
 *        type: integer
 *    responses:
 *      200:
 *        description: view of one schedule
 *        content:
 *          application/json:
 *            example:
 *              scheduleID: 1
 *              EntryTime: "08:00"
 *              ExitTime: "16:00"
 *              Monday: true
 *              Tuesday: true
 *              Wednesday: true
 *              Thursday: true
 *              Friday: true
 *              Saturday: false
 *              Sunday: false
 *
 *     500:
 *        Error in obtaining user schedule
 */
router.get('/scheduleUser/:scheduleID', methods.findOneSchedule);

/**
 * @swagger
 * /api/v1/schedule/createSchedule:
 *  post:
 *    tags:
 *      - Schedule
 *    summary: Create a new schedule
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *           properties:
 *            EntryTime:
 *              type: string
 *            ExitTime:
 *              type: string
 *            Monday:
 *              type: boolean
 *            Tuesday:
 *              type: boolean
 *            Wednesday:
 *              type: boolean
 *            Thursday:
 *              type: boolean
 *            Friday:
 *              type: boolean
 *            Saturday:
 *             type: boolean
 *            Sunday:
 *              type: boolean
 *   responses:
 *    200:
 *      description: Schedule created
 *      content:
 *        application/json:
 *        example:
 *          success: true
 *          message: New Schedule
 *
 *    500:
 *      Error to create Schedule
 */
router.post(
	'/createSchedule',
	middleware.validate(schemas.createScheduleSchema),
	methods.createSchedule,
);

/**
 * @swagger
 * /api/v1/schedule/scheduleUpdate:
 *  patch:
 *    summary: Update a schedule
 *    tags: [Schedule]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              scheduleID:
 *              type: integer
 *              EntryTime:
 *              type: string
 *              ExitTime:
 *              type: string
 *              Monday:
 *              type: boolean
 *              Tuesday:
 *              type: boolean
 *              Wednesday:
 *              type: boolean
 *              Thursday:
 *              type: boolean
 *              Friday:
 *              type: boolean
 *              Saturday:
 *              type: boolean
 *              Sunday:
 *              type: boolean
 *
 *   responses:
 *    200:
 *      description: Schedule updated
 *      content:
 *        application/json:
 *        example:
 *          success: true
 *          message: Schedule updated
 *
 *  404:
 *     Schedule not found
 *
 *  500:
 *    Error to update schedule
 */
router.patch(
	'/scheduleUpdate',
	middleware.validate(schemas.updateScheduleSchema),
	methods.updateSchedule,
);

/**
 * @swagger
 * /api/v1/schedule:
 *  delete:
 *    summary: Delete a schedule
 *    tags: [Schedule]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *           properties:
 *            scheduleID:
 *              type: integer
 *
 *   responses:
 *    200:
 *      description: Schedule deleted
 *      content:
 *        application/json:
 *         example:
 *          success: true
 *          message: Schedule deleted
 *
 *    500:
 *      Error to delete schedule
 */
router.delete(
	'/ScheduleDelete',
	middleware.validate(schemas.deleteScheduleSchema),
	methods.deleteSchedule,
);

export default router;
