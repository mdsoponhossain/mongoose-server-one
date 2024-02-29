const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    product_orderer: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    product_info: {
        type: mongoose.Types.ObjectId,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }


},
    { versionKey: false }
);
module.exports = orderSchema;