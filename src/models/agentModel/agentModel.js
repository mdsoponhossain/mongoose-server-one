const mongoose = require('mongoose');
const agentSchema = require('../../schemas/agentSchema/agentSchema');

//instance method:
agentSchema.methods.findMatchData = function () {
    // return mongoose.model('AgentCollection').find({agent_name: new RegExp(this.agent_name,'i')})
    return mongoose.model('AgentCollection').find({ 'agent_details.email': new RegExp(this.agent_details.email, 'i') })
};
//static method:
agentSchema.statics.findByEmail = function (email) {
    return this.find({ 'agent_details.email': new RegExp(email, 'i') })
};


//query helper:
agentSchema.query.findByQuery = function (email) {
    console.log('email from the query helper:',email)
    return this.where({ 'agent_details.email': new RegExp(email, 'i') })
}


const AgentModel = new mongoose.model('AgentCollection', agentSchema);
module.exports = AgentModel;