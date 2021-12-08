// ADD TYPE
const { response } = require('express');
// MODELS
const Product = require('../models/Product');
const Brand = require('../models/Brand');

// CREAMOS UNA NUEVO PRODUCTO
const setNewProduct = async(req, res = response) => {
    
    // CREAMOS LA MARCA CON EL MODELO
    const dbProduct = new Product( req.body );
   
    try {
        
        // CREAMOS LA MARCA EN LA DB 
        await dbProduct.save();

        // GENERAR RESPUESTA EXITOSA
        return res.status(201).json({
            ok: true,
            dbProduct
        });
                
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador(subidaProductoErr)'
        }); 
    }

}

// OBTENEMOS TODOS LOS PRODUCTOS
const getProducts = async (req, res = response) => {

    const from = Number(req.query.from) || 0;

    const [ products, total ] = await Promise.all([
        Product.find()
                .populate('brand')
                .skip( from ),
                // .limit( 5 ),

        Product.count()
    ]);

    res.json({
        ok: true,
        products,
        total
    });

}

// EXPORTAMOS 
module.exports = {
    setNewProduct,
    getProducts
}