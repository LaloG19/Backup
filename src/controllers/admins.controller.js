/* import { Op } from 'sequelize'; */ // Es para usar el operador like en busquedas
import { Admin } from '../models/admins.js';

const getAdmins = async (req, res) => {
	try {
		const data = await Admin.findAll();
		return res.status(200).json(data);
	} catch (error) {
		console.error('[Error] getAdmins:', error.message);
		return res.status(500).json({ error: 'Error al obtener los datos' });
	}
}

const loginAdmin = async (req, res) => {
	const { user, password } = req.body;

	try {
		const data = await Admin.findOne({
			where: {
				user,
				password,
			},
		});
		if (!data) {
			return res.status(404).json({ error: 'Usuario o contraseña incorrectos' });
		}
		return res.status(200).json(data);
	}catch (error) {
		console.error('[Error] loginAdmin:', error.message);
		return res.status(500).json({ error: 'Error al obtener los datos' });
	}
}

export const methods = {
	getAdmins,
	loginAdmin,
};