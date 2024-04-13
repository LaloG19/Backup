import { Employee } from '../models/employees.js';
// import { Op } from 'sequelize';

const getEmployees = async (req, res) => {
	try {
		const data = await Employee.findAll();
		return res.status(200).json(data);
	} catch (error) {
		console.error('[Error] getEmployees:', error.message);
		return res.status(500).json({ error: 'Error al obtener los datos de los empleados' });
	}
};

const createEmployee = async (req, res) => {
	const employeeBody = req.body;

	try {
		const newEmployee = await Employee.create(employeeBody);
		return res.status(200).json({ success: true, data: newEmployee });
	} catch (error) {
		console.error('Error al crear el empleado', error);
		return res.status(500).json({ error: 'Error al crear el empleado' });
	}
};

const updateEmployee = async (req, res) => {
	const { employeeID } = req.params;
	const employeeData = req.body;

	try {
		const [updated] = await Employee.update(employeeData, {
			where: { employeeID },
		});

		if (!updated) {
			return res.status(404).json({ error: 'Empleado no encontrado' });
		}

		return res.status(200).json({ success: true, message: 'Empleado actualizado' });
	} catch (error) {
		console.error('Error al actualizar el empleado', error.message);
		return res.status(500).json({ error: 'Error al actualizar el empleado' });
	}
};

const deleteEmployee = async (req, res) => {
	const { employeeID } = req.params;

	try {
		const employee = await Employee.findByPk(employeeID);

		if (!employee) {
			return res.status(404).json({ error: 'Empleado no encontrado' });
		}

		await employee.destroy();
		return res.status(200).json({ success: true, message: 'Empleado eliminado' });
	} catch (error) {
		console.error('Error al eliminar el empleado', error.message);
		return res.status(500).json({ error: 'Error al eliminar el empleado' });
	}
};

export const methods = {
	getEmployees,
	createEmployee,
	updateEmployee,
	deleteEmployee,
};
