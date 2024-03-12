const AgentModel = require("../../../models/agentModel/agentModel");

async function searchAgentController(req,res){
    try {
        // const matchedAgents = await AgentModel.estimatedDocumentCount();
        
        //instance method:
        // const matchedAgents = await AgentModel({agent_name:req?.body?.agent_name}).findMatchData();
        // const matchedAgents = await AgentModel({'agent_details.email':req?.body?.email}).findMatchData();

        //static method:
        // const matchedAgents = await AgentModel.findByEmail(req?.body?.email);

        //query helper:
        const matchedAgents = await AgentModel.find().findByQuery(req?.body?.email).select('-agent_details -added_product_by_agent');
        res.send({matchedAgents});
    } catch (error) {
        res.send(error.message).status(500);
    }
};
module.exports = searchAgentController ;