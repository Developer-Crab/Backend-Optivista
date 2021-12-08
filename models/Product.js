const { Schema, model } = require("mongoose");
const Brand = require('../models/Brand')


const ProductSchema = Schema({
   
    name: {
        type: String,
        require: true
    },
    references: {
        type: String,
        require: true
    },
    img: {
        type: String,
    },
    type: {
        type: String,
        require: true,
    },
    style: {
        type: String,
        require: true,
    },
    form: {
        type: String,
        require: true,
    },
    color: {
        type: String,
        require: true,
    },    
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        require: true }    
 });

 module.exports = model('Product', ProductSchema);