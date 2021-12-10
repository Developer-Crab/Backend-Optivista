// IMPORTACIONES
const { Schema, model } = require("mongoose");

 const UserSchema = Schema({
   
    name: {
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
    img: {
        type: String,
    },
    role: {
        type: String,
        require: true,
        default: 'USER_ROLE'
    },
    google: {
        type: Boolean,
        default: false
    },
    birthDate: {
        type: Date,
        require: true
    },
    sexo: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
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

 UserSchema.method('toJSON', function (){
    
    const { __v, _id, password, ...object} = this.toObject();

    object.uid = _id;

    return object;

 });


 module.exports = model('User', UserSchema);