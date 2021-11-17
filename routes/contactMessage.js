// Importaciones
const { Router }  = require('express');

const router = Router();

// CONTROLLERS
const nodemailer = require('../controllers/contactMessage');

router.post('/contact', nodemailer.sendContactEmail);


// EXPORTAMOS PARA SU USO EN OTRO LUGAR
module.exports = router;

