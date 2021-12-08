/*
    ROUTE '/customer/send-email/'
*/
// IMPORTS
const { Router }  = require('express');
//ROUTER
const router = Router();
// CONTROLLERS
const nodemailer = require('../controllers/contactMessage');
// VALIDATIONS
// const { validJWT } = require('../middlewares/validar-jwt');
// const { validarCampos } = require('../middlewares/validar-campos');

/**
 * RUTA PARA ENVIAR UN MESAJE A LA PERSONA QUE CONTACTA 
 */
router.post('/contact', nodemailer.sendContactEmail);


// EXPORTAMOS PARA SU USO EN OTRO LUGAR
module.exports = router;

