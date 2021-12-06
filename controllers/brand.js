const Brand = require('../models/Brand');
// asignandole un tipado
const { response } = require('express');


//CREAMOS UNA NUEVA MARCA
const setNewBrand = async(req, res = response) => {

    try {

        // CREAMOS LA MARCA CON EL MODELO
        const dbBrand = new Brand( req.body );
        
        // CREAMOS LA MARCA EN LA DB 
        await dbBrand.save();

        // GENERAR RESPUESTA EXITOSA
        return res.status(201).json({
            ok: true,
            title: dbBrand.title,
            description: dbBrand.description,
            img: dbBrand.img
        });
                
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        }); 
    }

}

// EXPORTAMOS 
module.exports = {
    setNewBrand
}