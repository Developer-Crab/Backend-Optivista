// ADD TYPE
const { response } = require('express');

// MODELS
const Product = require('../models/Product');


// CREAMOS UNA NUEVO PRODUCTO
const setProduct = async(req, res = response) => {
       
    // CREAMOS El PRODUCTO CON EL MODELO
    const uid = req.uid;
    const product = new Product({
        user: uid,
        ...req.body
    });
   
    try {
        
        // CREAMOS El PRODUCTO EN LA DB 
        const productDB = await product.save();

        // GENERAMOS RESPUESTA EXITOSA
        return res.status(201).json({
            ok: true,
            product: productDB
        });
                
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador-subidaProductoErr'
        }); 
    }

}

// OBTENEMOS TODOS LOS PRODUCTOS
const getProducts = async(req, res = response) => {

    // OBTENEMOS LOS PRODUCTS
    // SIN PAG
    // const products = await Product.find()
    //                               .populate('user', 'name')
    //                               .populate('brand','name')
    // CON PAG
    const from = Number(req.query.from) || 0;

    const [products, total ] = await Promise.all([
        Product.find()
                .populate('user', 'name')
                .populate('brand','name')
                .skip( from )
                .limit( 5 ),

        Product.count()
    ]);

                       

    res.json({  
        ok: true,
        products: products,
        total
    });

    // const from = Number(req.query.from) || 0;

    // try {
        
    //     const [ products, total ] = await Promise.all([
    //         Product.find()
    //                 .populate('brand')
    //                 .skip( from ),
    //                 // .limit( 5 ),
    
    //         Product.count()
    //     ]);
    
    //     // res.json({
    //     //     ok: true,
    //     //     products,
    //     //     total
    //     // });
    //     return res.status(200).json({
    //         ok: true,
    //         products,
    //         total
    //     });

    // } catch (error) {
    //     console.log(error);
    //     return res.status(500).json({
    //         ok: false,
    //         msg: 'Por favor hable con el administrador(obtenciónTodosProductosError)'
    //     }); 
    // }

}

// ACTUALIZAR UN PRODUCTO 
const updateProduct = async(req, res = response) => {
    
    res.json({
        ok: true,
        msg: 'Producto Actualizado correctamente'
    });
}

// ELIMINAMOS UN PRODUCTO POR SU ID
const deleteProduct = async(req, res = response) => {
    
    res.json({
        ok: true,
        msg: 'Producto Borrado correctamente'
    });
    // const id = req.params.id; // OBTENEMOS EL ID DE LA URL

    // try {

    //     const product = await Product.findById( id ); // COMPROBAMOS QUE EL PRODUCTO EXISTA EN LA BD
        
    //     if ( !product ) { //SI NO EXISTE RETORNAMOS 404

    //         return res.status(404).json({
    //             ok: false,
    //             msg: 'No existe el producto por ese id en la BD'
    //         });
    //     }

    //     // SI EXISTE LO BORRAMOS
    //     await Product.findByIdAndRemove( id );

    //     return res.json({
    //         ok: true,
    //         msg: 'Producto eliminado correctamente',
    //         product
    //     });

    // } catch (error) {
    //     console.log(error);
    //     return res.status(500).json({
    //         ok: false,
    //         msg: 'Por favor hable con el administrador(eliminarProductoErr)'
    //     }); 
    // }

}


module.exports = {
    setProduct,
    getProducts,
    updateProduct,
    deleteProduct
}