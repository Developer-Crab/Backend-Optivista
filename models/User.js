// IMPORTACIONES
const { Schema, model } = require("mongoose");

 const UserSchema = Schema({
   
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    secondLastName: {
        type: String,
        require: true
    },
    birthDate: {
        type: Date,
        require: true
    },
    sexo: {
        type: String,
        require: true
    },
    dni: {
        type: String,
        require: true
    },
    telephone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    newsLetter: {
        type: Boolean,
        require: false,
        default: false
    },
    dateOfRegister: {
        type: Date,
        default: new Date(),
    },
 });



 module.exports = model('User', UserSchema);