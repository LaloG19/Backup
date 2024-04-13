import { Op } from "sequelize";
import { Department } from "../models/department.js";

const getDepartments = async (req, res) =>{
    try {
		const data = await Department.findAll();
		return res.status(200).json(data);
	} catch (error) {
		console.error('[Error] getDepartments:', error.message);
		return res.status(500).json({ error: 'Error al obtener los datos' });
	}
};

const findDepartmentByName = async (req, res) =>{
    const name = req.params.name;
    try{
        const department = await Department.findAll({
            where:{
                name: { [Op.like]:  `%${name}%` }
            },  
        });

        if(!department){
            return res.status(404).json({error: 'No se ha encontrado el empleado ingresado'});
        }

        return res.status(200).json(department);
    } catch (error) {
        console.error('Error al obtener el Departamento deseado', error.message);
        return res.status(500).json({error: 'Error de obtención de datos'});
    }
};

const createDepartment = async (req, res) =>{
    const departmentBody = req.body;

    try{
        const validateDepartment = await Department.findOne({
            where: {
                name: departmentBody.name 
            },
        });

        if (validateDepartment){
            return res.status(409).json({error: 'El departamento ya se encuentra en existencia'});
        }

        await Department.create(departmentBody);
        return res.status(200).json({succesed: true, message: 'Departamento creado con exito'});
    }catch (error){
        console.error('Error al crear el departamento ', error.message);
        return res.status(500).json({error: 'Error al crear el departamento'});
    }
};

const updateDepartment = async (req, res) =>{
    const departmentBody = req.body;
    console.log(' departmentBody: ', JSON.stringify(departmentBody  ));
    try{
        const departamento = await Department.findOne({
            where: {
                departmentID: departmentBody.departmentID,
            },
            });

        if(!departamento){
            res.status(404).json({error: 'Departamento no encontrado'});
        }

        const updatedDepartment = await Department.update(departmentBody, {
            where: { departmentID: departmentBody.departmentID },
        });
        return res.status(200).json({
            message: 'Departamento actualizado correctamente',
            data: updatedDepartment,
        });

    }catch(error){
        console.error('Error al actualizar el departamento ', error.message);
        return res.status(500).json({error: 'Error al actualizar el departamento'});
    }
};

const deleteDepartment = async (req, res) =>{
    const {departmentID} = req.body;

    try{
        const departamento = await Department.findOne({
            where: {departmentID},
        });

        if(!departamento){
            return res.status(404).json({error: 'Departamento no encontrado'});
        }

        departamento.destroy();
        return res.status(200).json({succesed: true, message: 'Departamento eliminado correctamente'});
    }catch(error){
        console.error('Error al eliminar el departamento ', error.message);
        return res.status(500).json({error: 'Error al eliminar el departamento'});
    }
};


export const methods = {
    getDepartments,
    findDepartmentByName,
    createDepartment,
    updateDepartment,
    deleteDepartment,
}