import { Schedule } from '../models/schedule.js';

const createSchedule = async (req, res) => {
	const scheduleBody = req.body;

	try {
		await Schedule.create(scheduleBody);

		return res.status(200).json({ success: true, message: 'New Schedule' });
	} catch (error) {
		console.error('Error to create Schedule', error);
		return res.status(500).json({ error: 'Error to create Schedule' });
	}
};

const getSchedule = async (req, res) => {
	try {
		const data = await Schedule.findAll();
		return res.status(200).json(data);
	} catch (error) {
		console.error('Error in obtaining schedule data', error.message);
		return res.status(500).json({ error: 'Error in obtaining data' });
	}
};

const updateSchedule = async (req, res) => {
	const {
		scheduleID,
		entryTime,
		exitTime,
		monday,
		tuesday,
		wednesday,
		thursday,
		friday,
		saturday,
		sunday,
	} = req.body;

	try {
		const [updated] = await Schedule.update(
			{
				entryTime,
				exitTime,
				monday,
				tuesday,
				wednesday,
				thursday,
				friday,
				saturday,
				sunday,
			},
			{ where: { scheduleID } },
		);

		if (!updated) {
			return res.status(404).json({ error: 'Schedule not found' });
		}

		return res.status(200).json({ success: true, message: 'Schedule updated' });
	} catch (error) {
		console.error('Error to update schedule', error);
		return res.status(500).json({ error: 'Error to update schedule' });
	}
};

const deleteSchedule = async (req, res) => {
	const scheduleID = req.params.id;

	try {
		await Schedule.destroy({ where: { scheduleID } });

		return res.status(200).json({ success: true, message: 'Deleted Schedule' });
	} catch (error) {
		console.error('Error to delete schedule', error);
		return res.status(500).json({ error: 'Error to delete schedule' });
	}
};

const findOneSchedule = async (req, res) => {
	const ScheduleID = req.params.id;
	try {
		const data = await Schedule.findOne({
			where: {
				ScheduleID,
			},
		});
		return res.status(200).json(data);
	} catch (error) {
		console.error('Error in obtaining user schedule', error.message);
		return res.status(500).json({ error: 'Error in obtaining user schedule' });
	}
};

export const scheduleController = {
	createSchedule,
	getSchedule,
	updateSchedule,
	deleteSchedule,
	findOneSchedule,
};
