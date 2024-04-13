import { Router } from 'express';
import { scheduleController } from '../controllers/schedule.controller.js';

import * as middleware from '../middlewares/express-validator.js';
import * as schemas from '../schemas/schedule.schemas.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Schedules
 *     description: Schedules Menu
 */

/**
 * @swagger
 * /api/v1/schedule:
 *   get:
 *     summary: Get all schedules
 *     tags:
 *       - [Schedule]
 *     responses:
 *       200:
 *         description: List of schedules
 *         content:
 *           application/json:
 *             example:
 *               - scheduleID: 1
 *                 EntryTime: "08:00"
 *                 ExitTime: "16:00"
 *                 Monday: true
 *                 Tuesday: true
 *                 Wednesday: true
 *                 Thursday: true
 *                 Friday: true
 *                 Saturday: false
 *                 Sunday: false
 *       500:
 *         description: Error in obtaining data
 */
router.get('/', scheduleController.getSchedule);

/**
 * @swagger
 * /api/v1/schedule/busqueda/{id}:
 *   get:
 *     summary: GetOneUserSchedule
 *     tags:
 *       - [Schedule]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the schedule
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: view of one schedule
 *         content:
 *           application/json:
 *             example:
 *               scheduleID: 1
 *               EntryTime: "08:00"
 *               ExitTime: "16:00"
 *               Monday: true
 *               Tuesday: true
 *               Wednesday: true
 *               Thursday: true
 *               Friday: true
 *               Saturday: false
 *               Sunday: false
 *       500:
 *         description: Error in obtaining user schedule
 */
router.get('/busqueda/:id', scheduleController.findOneSchedule);

/**
 * @swagger
 * /api/v1/schedule:
 *   post:
 *     tags:
 *       - [Schedule]
 *     summary: Create a new schedule
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               entryTime:
 *                 type: string
 *               exitTime:
 *                 type: string
 *               monday:
 *                 type: boolean
 *               tuesday:
 *                 type: boolean
 *               wednesday:
 *                 type: boolean
 *               thursday:
 *                 type: boolean
 *               friday:
 *                 type: boolean
 *               saturday:
 *                 type: boolean
 *               sunday:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Schedule created
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: New Schedule
 *       500:
 *         description: Error to create Schedule
 */
router.post(
	'/',
	schemas.createScheduleSchema,
	middleware.validateSchema,
	scheduleController.createSchedule,
);

/**
 * @swagger
 * /api/v1/schedule:
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
 *                type: integer
 *              entryTime:
 *                type: string
 *              exitTime:
 *                type: string
 *              monday:
 *                type: boolean
 *              tuesday:
 *                type: boolean
 *              wednesday:
 *                type: boolean
 *              thursday:
 *                type: boolean
 *              friday:
 *                type: boolean
 *              saturday:
 *                type: boolean
 *              sunday:
 *                type: boolean
 *
 *    responses:
 *      200:
 *        description: Schedule updated
 *        content:
 *          application/json:
 *            example:
 *              success: true
 *              message: Schedule updated
 *      404:
 *        description: Schedule not found
 *      500:
 *        description: Error to update schedule
 */
router.patch(
	'/',
	schemas.updateScheduleSchema,
	middleware.validateSchema,
	scheduleController.updateSchedule,
);

/**
 * @swagger
 * /api/v1/schedule/{id}:
 *  patch:
 *    summary: Update a schedule with id
 *    tags: [Schedule]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: ID of the schedule
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              entryTime:
 *                type: string
 *              exitTime:
 *                type: string
 *              monday:
 *                type: boolean
 *              tuesday:
 *                type: boolean
 *              wednesday:
 *                type: boolean
 *              thursday:
 *                type: boolean
 *              friday:
 *                type: boolean
 *              saturday:
 *                type: boolean
 *              sunday:
 *                type: boolean
 *    responses:
 *      200:
 *        description: Schedule updated
 *        content:
 *          application/json:
 *            example:
 *              success: true
 *              message: Schedule updated
 *      404:
 *        description: Schedule not found
 *      500:
 *        description: Error to update schedule
 */
router.patch(
	'/:id',
	schemas.updateScheduleSchema,
	middleware.validateSchema,
	scheduleController.updateOneSchedule,
);

/**
 * @swagger
 * /api/v1/schedule:
 *   delete:
 *     summary: Delete a schedule
 *     tags:
 *        [Schedule]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               scheduleID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Schedule deleted
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Schedule deleted
 *       500:
 *         description: Error to delete schedule
 */
router.delete(
	'/',
	schemas.deleteScheduleSchema,
	middleware.validateSchema,
	scheduleController.deleteSchedule,
);

export default router;
