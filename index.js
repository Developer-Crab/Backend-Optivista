// Importaciones 
const express    = require('express');
const cors       = require('cors');

const { dbConnection } = require('./db/config');
// para las variables de entorno
require('dotenv').config();

// Creamos el servidor/aplicacion de express
const app = express();

// Conexion a la BD 
dbConnection();

// Directorio Público
app.use( express.static('public'));

// CORS
app.use( cors() );

// middleware para poder leer la imformacion del body
app.use( express.json());

// CONFIGURAMOS LAS RUTAS

// RUTA PARA USUARIOS
app.use( '/customer/account/', require('./routes/auth') );

// RUTA PARA MAIL
app.use( '/customer/send-email/', require('./routes/contactMessage') );

// RUTA PARA LAS MARCAS
app.use( '/brands/', require('./routes/brand'));

// levantamos la aplicacion de express
app.listen( process.env.PORT , () => {
    console.log(`Servidor corriendo en puerto ${ 4000 }`) 
});
