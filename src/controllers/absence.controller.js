import { Op } from 'sequelize';
import { Absence } from '../models/absence.js';
import { Employee } from '../models/employee.js';



export const getAbsence = async (req, res) => {
    try {
        const absence = await Absence.findAll();
        return res.status(200).json(absence);
    } catch (error) {
        console.error('No se encontraron las faltas', error.message);
        return res.status(500).json({ error: 'Error al encontrar las faltas' });
    }
};


export const findAbsenceByID = async (req, res) => {
    const employeeID = req.params.id;

    try {
        const idToSearch = await Employee.findOne({
            where: {
                employeeID: {
                    [Op.like]: `%${employeeID}%`
                }
            }
        });

        if (!idToSearch) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        const absence = await Absence.findAll({
            where: {
                employeeID: idToSearch.employeeID
            }
        });

        if (!absence) {
            return res.status(404).json({ error: 'El trabajador no tiene ausencias' });
        }

        return res.status(200).json(absence);
    } catch (error) {
        console.error('Error al obtener las ausencias por nombre:', error.message);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const findAbsenceByEmployeeID = async (req, res) => {
	const { employeeID } = req.params;

	try {
		const employee = await Absence.findOne({
			where: {
				employeeID,
			},
		});

		if (!employee) {
			return res.status(404).json({ error: 'Employee not found' });
		}

		const absences = await Absence.findAll({
			where: {
				employeeID: employee.employeeID,
			},
		});

		if (!absences || absences.length === 0) {
			return res
				.status(404)
				.json({ error: 'No faults found for this employee' });
		}

		return res.status(200).json(absences);
	} catch (error) {
		console.error('Error in obtaining faults per enrollment:', error.message);
		return res.status(500).json({ error: 'Error internal server' });
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


export const updateAbsence = async (req, res) => {
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


export const deleteAbsence = async (req, res) => {
    const { absenceID } = req.body;

    try {
        const absenceToUpdate = await Absence.findByPk(absenceID);

        if (!absenceToUpdate) {
            return res.status(404).json({ error: 'Falta no encontrada' });
        }

        if (absenceToUpdate.justified === 0) {
            await absenceToUpdate.update({ justified: 1 });
            return res.status(200).json({ success: true, message: 'El estado de la falta se cambió a no justificado' });
        } else {
            return res.status(400).json({ error: 'La falta no estaba justificada previamente' });
        }
    } catch (error) {
        console.error('Error al actualizar la Falta', error.message);
        return res.status(500).json({ error: 'Error al realizar actualización' });
    }
};

export const methods = {
    getAbsence,
    findAbsenceByID,
    createAbsence,
    updateAbsence,
    deleteAbsence,
    findAbsenceByEmployeeID
};
