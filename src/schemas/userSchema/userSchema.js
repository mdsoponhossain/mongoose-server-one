const { Schema, default: mongoose } = require('mongoose');

const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase:true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ordered: [
        {
            type: mongoose.Types.ObjectId,

        }
    ],
    location: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
},
    {
        versionKey: false
    }
);

module.exports = userSchema;