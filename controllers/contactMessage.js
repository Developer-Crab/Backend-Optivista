const nodemailer = require('nodemailer');
const { google } = require('googleapis');
// asignandole un tipado
const { response } = require('express');

const OAuth2_client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET);

OAuth2_client.setCredentials( { refresh_token : process.env.REFRESH_TOKEN });

const sendContactEmail = async (req, res = response) => {

    const {name, lastName, email, phone } = req.body;
    
    const accessToken = OAuth2_client.getAccessToken();
    
    // console.log(req);

    try {

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            port: 465,
            secure: false,
            auth: {
            type: 'OAuth2',
            user: process.env.EMAIL,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken
            },
        });
    
        const mailOption = {
            from: 'Info Opivista',
            to: `${email}`,
            subject: 'Contacto',
            html: 
            `
      <div align="center" style="width:500px; margin: 0 auto; background-color: #343D48; padding: 15px 0; color: white;">
        <h1><a href="http://localhost:4200" style="text-decoration: none; color: white;">PADEL NOW</a> </h1>
        <h2>INSCRIPCIÓN CORRECTA</h2>
        <table style="font-size: 20px; border: 2px solid white; padding: 5px; margin-bottom: 10px;">
          <tbody>
            <tr align="center">
              <td><strong>Club</strong></td>
              <td> - </td>
            </tr>
            <tr align="center">
              <td><strong>Fecha</strong></td>
              <td>-</td>
            </tr>
            <tr align="center">
              <td><strong>Categoria</strong></td>
              <td>-</td>
            </tr>
            <tr align="center">
              <td><strong>Sexo</strong></td>
              <td>.</td>
            </tr>
            <tr align="center">
              <td><strong>Precio</strong></td>
              <td>2323€</td>
            </tr>
            <tr align="center">
              <td><strong>Pareja</strong></td>
              <td>.</td>
            </tr>
          </tbody>
        </table>

        <button style="background-color: #F4C257; border: none; padding: 10px; "><a href="http://localhost:4200/perfil" style="font-size: 15px; color:#343D48; margin: 20px auto; text-decoration: none; ">Ver todas las inscripciones </a></button>
      </div>
 `
            // `<h1>¡Hola ${name}!</h1>
            //        <p>Gracias por contactar con nosotros, te llamaremos al telefono: ${phone} lo mas pronto posible</p>
            // `
            ,
        };
    
        transporter.sendMail(mailOption, function (err, res) {
            if (err) {
                console.log(err);

            } else{
                console.log(res);
            }
        });

        transporter.close();

        return res.status(200).json({
            ok: true,
            msg: 'mail  Enviado'
    });
        
    } catch (error) {
        // console.log( error );
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

};

// EXPORTAMOS 
module.exports = {
  sendContactEmail
}