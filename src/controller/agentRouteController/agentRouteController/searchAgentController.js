const AgentModel = require("../../../models/agentModel/agentModel");

async function searchAgentController(req,res){
    try {
        // const matchedAgents = await AgentModel.estimatedDocumentCount();
        // const matchedAgents = await AgentModel({agent_name:req?.body?.agent_name}).findMatchData();
        const matchedAgents = await AgentModel({'agent_details.email':req?.body?.email}).findMatchData();
        res.send({matchedAgents});
    } catch (error) {
        res.send(error.message).status(500);
    }
};
module.exports = searchAgentController ;