// IMPORTS
const express    = require('express');
const cors       = require('cors');
// DB
const { dbConnection } = require('./db/config');
// PARA LAS VARIABLES DE ENTORNO
require('dotenv').config();
// CREAMOS EL SEVIDOR/APP DE EXPERSS
const app = express(); 
// CONEXION A LA BD
dbConnection();
// DIRECTORIO PUBLICO
app.use( express.static('public'));
// CORS
app.use( cors() );
// MIDDLEWARE PARA PODER LEER LA INFORMACION DEL BODY
app.use( express.json());

// --- CONFIGURAMOS LAS RUTAS

// USUARIOS
app.use( '/customer/account/', require('./routes/auth') );

// PARA LOS PRODUCTOS
app.use( '/products/', require('./routes/product') );

// MARCAS
app.use( '/brands/', require('./routes/brand'));

//  MAIL
app.use( '/customer/send-email/', require('./routes/contactMessage') );

// SUBIDAD DE IMAGENES
app.use( '/uploads/', require('./routes/uploads') );


// ---  LEVANTAMOS LA APP DE EXPRESS --- //
app.listen( process.env.PORT , () => {
    console.log(`Servidor corriendo en puerto ${ 4000 }`) 
});