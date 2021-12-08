/*
    ROUTE '/uploads/'
*/ 
// IMPORTS
const { Router } = require('express');
const expressfileUpload = require('express-fileupload');
// ROUTER
const router = Router();
// CONTROLLERS
const image  = require('../controllers/uploads');
// VALIDATIONS
const { validJWT } = require('../middlewares/validar-jwt');

router.use( expressfileUpload() );

/**
 * RUTA PARA INSERTAR/ACTUALIZAR UN IMG POR TIPO && ID
 */
router.put('/:tipo/:id', validJWT , image.fileUpdload );

/**
 * RUTA PARA OBTENER UNA IMG POR TIPO && ID
 */
router.get('/:tipo/:img', image.getImage );


// EXPORTAMOS PARA SU USO EN OTRO LUGAR
module.exports = router;