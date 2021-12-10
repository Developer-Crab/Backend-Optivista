// ADD TYPE
const { response } = require('express');
// MODELS
const Brand = require('../models/Brand');

// CREAMOS UNA NUEVA MARCA
const setBrand = async(req, res = response) => {

    //CREAMOS EL PRODUCTO CON EL MODELO
    const uid = req.uid;
    const brand = new Brand({
        user: uid,
        ...req.body
    });

    try {
        // CREAMOS El PRODUCTO EN LA DB 
        const brandDB = await brand.save();

        // GENERAMOS RESPUESTA EXITOSA
        return res.status(201).json({
            ok: true,
            brand: brandDB
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador-subidaBrandErr'
        }); 
    }


}

// OBTENEMOS TODAS LAS MARCAS
const getBrands = async(req, res = response) => {

    // OBTENEMOS LAS MARCAS
    const brands = await Brand.find()
    .populate('user', 'name')

    res.json({
        ok: true,
        brands: brands
    });

    // const from = Number(req.query.from) || 0;

    // const [ brands, total ] = await Promise.all([
    //     Brand.find()
    //             .skip( from ),
    //             // .limit( 5 ),

    //     Brand.count()
    // ]);

    // res.json({
    //     ok: true,
    //     brands,
    //     total
    // });

}

// ACTUALIZAMOS TODAS LAS MARCAS
const updateBrand = async(req, res = response) => {

    res.json({
        ok: true,
        msg: 'Marca actualizada correctamente'
    });

    // const from = Number(req.query.from) || 0;

    // const [ brands, total ] = await Promise.all([
    //     Brand.find()
    //             .skip( from ),
    //             // .limit( 5 ),

    //     Brand.count()
    // ]);

    // res.json({
    //     ok: true,
    //     brands,
    //     total
    // });

}

// ELIMINAMOS LA MARCA
const deleteBrand = async(req, res = response) => {

    res.json({
        ok: true,
        msg: 'Marca eliminada correctamente'
    });

    // const from = Number(req.query.from) || 0;

    // const [ brands, total ] = await Promise.all([
    //     Brand.find()
    //             .skip( from ),
    //             // .limit( 5 ),

    //     Brand.count()
    // ]);

    // res.json({
    //     ok: true,
    //     brands,
    //     total
    // });

}




// EXPORTAMOS 
module.exports = {
    setBrand,
    getBrands,
    updateBrand,
    deleteBrand
}