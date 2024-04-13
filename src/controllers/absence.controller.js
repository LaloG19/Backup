import { Op } from 'sequelize';
import { Absence } from '../models/absence.js';
import { Employee } from '../models/employee.js';



const getAbsence = async (req, res) => {
    try {
        const absence = await Absence.findAll();
        return res.status(200).json(absence);
    } catch (error) {
        console.error('No se encontraron las faltas', error.message);
        return res.status(500).json({ error: 'Error al encontrar las faltas' });
    }
};


export const findAbsenceByName = async (req, res) => {
    const name = req.params.name;

    try {
        const absence = await Absence.findAll({
            include: [{
                model: Employee,
                where: {
                    name: { [Op.like]: `%${name}%` }
                }
            }]
        });

        return res.status(200).json(absence);
    } catch (error) {
        console.error('Error al obtener las ausencias por nombre:', error.message);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};


export const createAbsence = async (req, res) => {
    const absenceBody = req.body;

    try {
        await Absence.create(absenceBody);

        return res.status(201).json({ success: true, message: 'Falta creada con éxito' });
    } catch (error) {
        console.error('Error al ingresar los datos de la falta:', error.message);
        return res.status(500).json({ error: 'Error interno del servidor al crear la falta' });
    }
};


const updateAbsence = async (req, res) => {
    const { absenceID, name, employeeID, scheduleID, absenceDate, justified } = req.body;

    try {
        const absenceToUpdate = await Absence.findByPk(absenceID);

        if (!absenceToUpdate) {
            return res.status(404).json({ error: 'Falta no encontrada' });
        }

        await absenceToUpdate.update({
            name,
            employeeID,
            scheduleID,
            absenceDate,
            justified
        });

        return res.status(200).json({ success: true, message: 'La Falta se actualizó correctamente' });
    } catch (error) {
        console.error('Error al actualizar la Falta', error.message);
        return res.status(500).json({ error: 'Error al realizar actualizacion' });
    }
};


const deleteAbsence = async (req, res) => {
    const { absenceID } = req.body;
    try {
        const absenceToDelete = await Absence.findByPk(absenceID);

        if (!absenceToDelete) {
            return res.status(404).json({ error: 'Falta no encontrada' });
        }

        await absenceToDelete.destroy();
        return res.status(200).json({ success: true, message: 'Falta eliminada con éxito' });
    } catch (error) {
        console.error('Error al eliminar la Falta', error.message);
        return res.status(500).json({ error: 'Error al eliminar la Falta' });
    }
};

export const methods = {
    getAbsence,
    findAbsenceByName,
    createAbsence,
    updateAbsence,
    deleteAbsence,
};
