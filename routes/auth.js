/*
    ROUTE '/customer/account/'
*/
// IMPORTS
const { Router } = require('express');
const { check } = require('express-validator');
// ROUTER
const router = Router();
// CONTROLLERS
const authController = require('../controllers/auth');
// VALIDATIONS
const { validJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');

/**
 * RUTA PARA LA CREACION DE UN NUEVO USUARIO CON SUS VALIDACIONES
 */
router.post('/create', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('lastName', 'El nombre es obligatorio').not().isEmpty(),
    check('birthDate', 'El nombre es obligatorio').not().isEmpty(),
    check('sexo', 'El nombre es obligatorio').not().isEmpty(),
    check('dni', 'El nombre es obligatorio').not().isEmpty(),
    check('telephone', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({ min: 6}),
    check('newsLetter'),
    validarCampos
], authController.SetNewUser);


/**
 * RUTA PARA EL LOGIN DE UN USUARIO CON SUS VALIDACIONES
 */
router.post('/login', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
    validarCampos
], authController.login);


/**
 * RUTA PARA REVALIDAR EL TOKEN DEL USUARIO
 */
router.get('/renewToken', validJWT ,authController.renewToken);

/**
 * RUTA PARA REVALIDAR EL TOKEN DEL USUARIO
 */
router.get('/users', validJWT ,authController.getUsers);


// EXPORTAMOS PARA SU USO EN OTRO LUGAR
module.exports = router;
