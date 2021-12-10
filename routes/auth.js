/*
    PATH '/api/login'
*/
// IMPORTS
const { Router } = require('express');
const { check } = require('express-validator');

// ROUTER
const router = Router();

// CONTROLLERS
const authController = require('../controllers/auth');

// MIDDLEWARES
const { validJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');

/**
 * RUTA PARA EL LOGIN DE UN USUARIO
 */
router.post( '/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria y mayor de 6 caracteres').isLength({ min: 6 }),
    validarCampos
 ],
  authController.login
);


/**
 * RUTA PARA REVALIDAR EL TOKEN DEL USUARIO
 */
router.get('/renewToken', validJWT ,authController.renewToken);




// EXPORTAMOS PARA SU USO EN OTRO LUGAR
module.exports = router;
