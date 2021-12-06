// Importaciones
const { Router }  = require('express');

const router = Router();

// CONTROLLERS
const brand = require('../controllers/brand');

router.post('/newbrand', brand.setNewBrand);

// EXPORTAMOS PARA SU USO EN OTRO LUGAR
module.exports = router;