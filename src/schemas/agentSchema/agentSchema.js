const mongoose = require('mongoose');
const agentSchema = new mongoose.Schema(
    {
        agent_name: {
            type: String,
            required: true
        },
        agent_details: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        },
        added_product_by_agent: [{
            type: mongoose.Types.ObjectId,
            ref:'ProductCollection'
        }],
        date: {
            type: Date,
            default: Date.now
        }
    },
    { versionKey: false }
);


module.exports = agentSchema;