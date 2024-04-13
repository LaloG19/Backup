import { Employee } from '../models/employees.js';
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
                name: { [Op.like]: `%${name}%` }
            }
        });

        if (!employees.length) {
            return res.status(404).json({ error: 'No se encontraron empleados con ese nombre' });
        }

        return res.status(200).json(employees);
    } catch (error) {
        console.error('Error al obtener el empleado deseado', error.message);
        return res.status(500).json({ error: 'Error al obtener los datos' });
    }
};

const createEmployee = async (req, res) => {
    const employeeBody = req.body;

    try {
        const validateEmployee = await Employee.findOne({
            where: {
                email: employeeBody.email
            }
        });

        if (validateEmployee) {
            return res.status(409).json({ error: 'El correo electrónico ya está en uso' });
        }

        await Employee.create(employeeBody);
        return res.status(200).json({ success: true, message: 'Empleado creado exitosamente' });
    } catch (error) {
        console.error('Error al crear el empleado', error.message);
        return res.status(500).json({ error: 'Error al crear el empleado' });
    }
};

const updateEmployee = async (req, res) => {
    const { employeeID, name, lastName, department, position, salary, email } = req.body;

    try {
        const employee = await Employee.findOne({
            where: {
                employeeID
            }
        });

        if (!employee) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        await Employee.update({
            name,
            lastName,
            department,
            position,
            salary,
            email
        }, {
            where: { employeeID }
        });

        return res.status(200).json({ success: true, message: 'Empleado actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar el empleado', error.message);
        return res.status(500).json({ error: 'Error al actualizar el empleado' });
    }
};

const deleteEmployee = async (req, res) => {
    const { employeeID } = req.body;

    try {
        const employee = await Employee.findOne({
            where: { employeeID }
        });

        if (!employee) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        await Employee.destroy({
            where: { employeeID }
        });

        return res.status(200).json({ success: true, message: 'Empleado eliminado exitosamente' });
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
    deleteEmployee
};
