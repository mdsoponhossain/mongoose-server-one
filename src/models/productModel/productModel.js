const mongoose = require('mongoose');
const productSchema = require('../../schemas/productSchema/productSchema');
const ProductModel = new mongoose.model('ProductCollection',productSchema);
module.exports = ProductModel ;