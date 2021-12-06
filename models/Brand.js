// IMPORTACIONES
const { Schema, model } = require("mongoose");


const BrandSchema = Schema({
   
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true,
    },
 });

 module.exports = model('Brand', BrandSchema);