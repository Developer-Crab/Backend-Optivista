/*
    ROUTE '/brands/'
*/ 
// IMPORTS
const { Router }  = require('express');
const { check } = require('express-validator');
// ROUTER
const router = Router();
// CONTROLLERS
const brand = require('../controllers/brand');
// VALIDATIONS
const { validJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');

/**
 * RUTA PARA OBTENER TODOS LAS MARCAS
 */
router.get('', brand.getBrands);

/**
 * RUTA PARA CREAR UNA NUEVA MARCA
 */
router.post('/newbrand', validJWT, brand.setNewBrand);

// EXPORTAMOS PARA SU USO EN OTRO LUGAR
module.exports = router;

