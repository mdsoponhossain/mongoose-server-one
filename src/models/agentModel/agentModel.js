const mongoose = require('mongoose');
const agentSchema = require('../../schemas/agentSchema/agentSchema');
const AgentModel = new mongoose.model('AgentCollection', agentSchema);
module.exports = AgentModel ;