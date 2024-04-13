import { Op } from 'sequelize';
import { Moneda } from '../models/sat.moneda.js';

const getTypeCoin = async (req, res) => {
	try {
		const data = await Moneda.findAll({
			where: {
				Activo: 1,
			},
		});
		return res.status(200).json(data);
	} catch (error) {
		console.error('Error al obtener los datos de la moneda', error.message);
		return res.status(500).json({ error: 'Error al obtener los datos' });
	}
};

const findTypeCoin = async (req, res) => {
	const name = req.params.id;
	try {
		const data = await Moneda.findAll({
			where: {
				Descripcion: { [Op.like]: `%${name}%` },
			},
		});
		return res.status(200).json(data);
	} catch (error) {
		console.error('Error al obtener los datos de la moneda', error.message);
		return res.status(500).json({ error: 'Error al obtener los datos' });
	}
};

const createTypeCoin = async (req, res) => {
	const coinBody = req.body;

	try {
		const validateCoin = await Moneda.findOne({
			where: { ClaveMoneda: coinBody.ClaveMoneda, Activo: 1 },
		});

		if (validateCoin) {
			return res
				.status(409)
				.json({ error: 'La clave de la moneda ya esta en uso ' });
		}

		await Moneda.create(coinBody);

		return res.status(200).json({ success: true, message: 'Moneda creada' });
	} catch (error) {
		console.error('Error al crear la moneda', error);
		return res.status(500).json({ error: 'Error al crear la moneda' });
	}
};

const updateTypeCoin = async (req, res) => {
	const { ClaveMoneda, Descripcion } = req.body;

	try {
		const validateCoin = await Moneda.findOne({
			where: { ClaveMoneda, Activo: 1 },
		});

		if (!validateCoin)
			return res.status(404).json({ error: 'Moneda no encontrada' });

		const [updated] = await Moneda.update(
			{ Descripcion },
			{ where: { ClaveMoneda } },
		);

		if (!updated) {
			return res.status(404).json({ error: 'Moneda no encontrada' });
		}

		return res
			.status(200)
			.json({ success: true, message: 'Moneda actualizada' });
	} catch (error) {
		console.error('Error al actualizar la moneda', error.message);
		return res.status(500).json({ error: 'Error al actualizar la moneda' });
	}
};

const deleteTypeCoin = async (req, res) => {
	const { ClaveMoneda } = req.body;

	try {
		const coin = await Moneda.findOne({
			where: { ClaveMoneda, Activo: 1 },
		});

		if (!coin) {
			return res.status(404).json({ error: 'Moneda no encontrada' });
		}

		await Moneda.update({ Activo: false }, { where: { ClaveMoneda } });

		return res.status(200).json({ success: true, message: 'Moneda borrada' });
	} catch (error) {
		console.error('Error al desactivar la moneda', error.message);
		return res.status(500).json({ error: 'Error al desactivar la moneda' });
	}
};

export const methods = {
	getTypeCoin,
	findTypeCoin,
	createTypeCoin,
	updateTypeCoin,
	deleteTypeCoin
};