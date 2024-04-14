import { Employee } from '../models/employee.js';
import { Schedule } from '../models/schedule.model.js';
import { Position } from '../models/position.js';

import { Op } from 'sequelize';

const getEmployees = async (req, res) => {
	try {
		const data = await Employee.findAll();
		return res.status(200).json(data);
	} catch (error) {
		console.error('[Error] getEmployees:', error.message);
		return res.status(500).json({ error: 'Error al obtener los datos' });
	}
};

const findEmployeeByName = async (req, res) => {
	const name = req.params.name;
	try {
		const employees = await Employee.findAll({
			where: {
				name: { [Op.like]: `%${name}%` },
			},
		});

		if (employees.length === 0) {
			return res
				.status(404)
				.json({ error: 'No se encontraron empleados con un nombre parecido' });
		}

		return res.status(200).json(employees);
	} catch (error) {
		console.error('Error al obtener el empleado deseado', error.message);
		return res.status(500).json({ error: 'Error al obtener los datos' });
	}
};

const findOneEmployeeByID = async (req, res) => {
	const employeeID = req.params.id;
	try {
		const data = await Employee.findOne({
			where: {
				employeeID,
			},
		});
		if (!data) {
			return res.status(404).json({ message: 'Enrollment not found' });
		}
		return res.status(200).json(data);
	} catch (error) {
		console.error('Error in obtaining user Enrollment', error.message);
		return res
			.status(500)
			.json({ error: 'Error in obtaining user Enrollment' });
	}
};

const createEmployee = async (req, res) => {
	const employeeBody = req.body;

	try {
		const validateEmployee = await Employee.findOne({
			where: {
				email: employeeBody.email,
			},
		});

		if (validateEmployee) {
			return res
				.status(409)
				.json({ error: 'El correo electrónico ya está en uso' });
		}

		const validateSchedule = await Schedule.findOne({
			where: {
				scheduleID: employeeBody.scheduleID,
			},
		});

		if (!validateSchedule) {
			return res.status(404).json({ error: 'El horario no existe' });
		}

		const validatePosition = await Position.findOne({
			where: {
				positionID: employeeBody.positionID,
			},
		});

		if (!validatePosition) {
			return res.status(404).json({ error: 'El puesto no existe' });
		}

		await Employee.create(employeeBody);
		return res
			.status(200)
			.json({ success: true, message: 'Empleado creado exitosamente' });
	} catch (error) {
		console.error('Error al crear el empleado', error.message);
		return res.status(500).json({ error: 'Error al crear el empleado' });
	}
};

const updateEmployee = async (req, res) => {
	const employeeBody = req.body;

	try {
		const employee = await Employee.findOne({
			where: {
				employeeID: employeeBody.employeeID,
			},
		});

		if (!employee) {
			return res.status(404).json({ error: 'Empleado no encontrado' });
		}

		const validateSchedule = await Schedule.findOne({
			where: {
				scheduleID: employeeBody.scheduleID,
			},
		});

		if (!validateSchedule) {
			return res.status(404).json({ error: 'El horario no existe' });
		}

		const validatePosition = await Position.findOne({
			where: {
				positionID: employeeBody.positionID,
			},
		});

		if (!validatePosition) {
			return res.status(404).json({ error: 'El puesto no existe' });
		}

		const validateEmail = await Employee.findOne({
			where: {
				email: employeeBody.email,
			},
		});

		const originalEmail = await Employee.findOne({
			where: {
				employeeID: employeeBody.employeeID,
			},
		});

		if (validateEmail && originalEmail.email !== employeeBody.email) {
			return res
				.status(409)
				.json({ error: 'El correo electrónico ya está en uso' });
		}

		await Employee.update(employeeBody, {
			where: {
				employeeID: employeeBody.employeeID,
			},
		});

		return res
			.status(200)
			.json({ success: true, message: 'Empleado actualizado exitosamente' });
	} catch (error) {
		console.error('Error al actualizar el empleado', error.message);
		return res.status(500).json({ error: 'Error al actualizar el empleado' });
	}
};

const deleteEmployee = async (req, res) => {
	const { employeeID } = req.body;

	try {
		const employee = await Employee.findOne({
			where: { employeeID },
		});

		if (!employee) {
			return res.status(404).json({ error: 'Empleado no encontrado' });
		}

		await Employee.destroy({
			where: { employeeID },
		});

		return res
			.status(200)
			.json({ success: true, message: 'Empleado eliminado exitosamente' });
	} catch (error) {
		console.error('Error al eliminar el empleado', error.message);
		return res.status(500).json({ error: 'Error al eliminar el empleado' });
	}
};

export const methods = {
	getEmployees,
	findEmployeeByName,
	createEmployee,
	updateEmployee,
	deleteEmployee,
	findOneEmployeeByID,
};
