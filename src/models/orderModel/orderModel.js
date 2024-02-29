const mongoose = require('mongoose');
const orderSchema = require('../../schemas/orderSchema/orderSchema');
const OrderModel = new mongoose.model('OrderCollection',orderSchema);
module.exports = OrderModel ;