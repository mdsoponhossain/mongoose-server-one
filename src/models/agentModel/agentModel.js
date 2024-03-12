const mongoose = require('mongoose');
const agentSchema = require('../../schemas/agentSchema/agentSchema');

agentSchema.methods.findMatchData = function () {
    // return mongoose.model('AgentCollection').find({agent_name: new RegExp(this.agent_name,'i')})
    return mongoose.model('AgentCollection').find({'agent_details.email': new RegExp(this.agent_details.email,'i')})
}

const AgentModel = new mongoose.model('AgentCollection', agentSchema);
module.exports = AgentModel;