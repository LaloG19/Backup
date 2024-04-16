import { Op } from 'sequelize';
import {Position} from '../models/position.js'


const getPositions = async (req, res) =>{
    try{
        const positions = await Position.findAll();
        return res.status(200).json(positions);
    }catch (error){
        console.error('No se encontraron los puestos', error.message);
        return res.status(500).json({error:'Error al encontrar los puestos'});
    }
};

const findPositionbyName = async (req, res) =>{
    const name = req.params.name;
    try{
        const position = await Position.findAll({
            where: {
                name: {[Op.like]: `%${name}%`}
            },
        });

        if(!position){
            return res.status(404).json({error:'No se encentra el puesto solicitado'})
        }

        return res.status(200).json(position)
    }catch(error){
        console.error('Error al obtener el puesto', error.message);
        return res.status(500).json({error:'Error al obtener el puesto'});
    }
};

const createPosition = async (req, res) =>{
    const positionBody = req.body;
    
    try{
        const validatePosition = await Position.findOne({
            where: { 
                name: positionBody.name
            },
        });

        if(validatePosition){
            return res.status(409).json({error: 'El puesto ingresado ya existe'});
        }

        await Position.create(positionBody);
        return res.status(200).json({success: true, message:'Puesto creado con éxito'});
    }catch(error){
        console.error('Error al ingresar los datos del puesto', error.message);
        return res.status(500).json({error:'Error al crear el puesto'});
    }
};

const updatePosition = async (req, res) =>{
    const positionBody = req.body;

    try{
        const validatePosition = await Position.findOne({
            where: {
                positionID: positionBody.positionID,
            },
        });

        if(!validatePosition){
            return res.status(404).json({error: 'Puesto no encontrado'});
        }

        const updatePosition = await Position.update(positionBody,{
            where: { positionID: positionBody.positionID },
        });

        return res.status(200).json({success: true, message:'El puesto se actualizó correctamente', data: updatePosition});
    }catch(error){
        console.error('Error al actualizar el puesto', error.message);
        return res.status(500).json({error: 'Error al realizar actualizacion'});
    }
};

const deletePositions = async (req, res) =>{
    const {positionID} = req.body;
    try{
        const position = await Position.findOne({
            where: { positionID }
        });

        if(!position){
            return res.status(404).json({error: 'Puesto no encontrado'});
        }

        await position.destroy()
        return res.status(200).json({success: true, message: 'Puesto eliminado con exito'});
    }catch(error){
        console.error('Error al eliminar el puesto', error.message);
		return res.status(500).json({ error: 'Error al eliminar el puesto con id: ' + positionID });
    }
} 

export const methods = {
    getPositions,
    findPositionbyName,
    createPosition,
    updatePosition,
    deletePositions,
}