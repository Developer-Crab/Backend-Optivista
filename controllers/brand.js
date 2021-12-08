// ADD TYPE
const { response } = require('express');
// MODELS
const Brand = require('../models/Brand');

// CREAMOS UNA NUEVA MARCA
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

// OBTENEMOS TODAS LAS MARCAS
const getBrands = async(req, res = response) => {

    const from = Number(req.query.from) || 0;

    const [ brands, total ] = await Promise.all([
        Brand.find()
                .skip( from ),
                // .limit( 5 ),

        Brand.count()
    ]);

    res.json({
        ok: true,
        brands,
        total
    });

}

// EXPORTAMOS 
module.exports = {
    setNewBrand,
    getBrands
}