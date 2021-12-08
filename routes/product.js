/*
    ROUTE '/products/'
*/
// IMPORTS
const { Router }  = require('express');
const { check } = require('express-validator');
// ROUTER
const router = Router();
// CONTROLLERS
const product = require('../controllers/product');
// VALIDATIONS
const { validarCampos } = require('../middlewares/validar-campos');
const { validJWT } = require('../middlewares/validar-jwt');


/**
 * RUTA PARA OBTENER TODOS LOS PRODUCTOS
 */
router.get('', validJWT , product.getProducts);


/**
 * RUTA PARA CREAR UN NUEVO PRODUCTO CON SUS VALIDACIONES
 */
router.post('/newProduct', [
        validJWT,
        check('brand', 'El id del producto tiene que ser valido').isMongoId(),
        validarCampos
    ], product.setNewProduct);


// EXPORTAMOS PARA SU USO EN OTRO LUGAR
module.exports = router;