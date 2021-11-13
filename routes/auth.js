// Importaciones
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();


// controllers
// const { crearUsuario, login, revalidarToken } = require('../controllers/auth');
const authController = require('../controllers/auth');

const { validJWT } = require('../middlewares/validar-jwt');

/**
 * Ruta para la creacion de un nuevo usuario
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
 * Ruta para el login de un usuario
 */
router.post('/login', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
    validarCampos
], authController.login);

/**
 * Ruta para revalidar token del usuario
 */
router.get('/renewToken', validJWT ,authController.renewToken);


// EXPORTAMOS PARA SU USO EN OTRO LUGAR
module.exports = router;
