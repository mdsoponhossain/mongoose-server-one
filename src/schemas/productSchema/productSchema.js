const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            required: true
        },
        product_details: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        },
        // product_price: {
        //     type: Number,
        //     required: true
        // },
        // product_type: {
        //     type: String,
        //     required: true
        // },
        product_author: {
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

module.exports = productSchema;