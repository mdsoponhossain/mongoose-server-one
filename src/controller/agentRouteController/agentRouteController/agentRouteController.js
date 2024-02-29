const AgentModel = require("../../../models/agentModel/agentModel");

const agentRouteController = async (req, res) => {
    try {
        await AgentModel(req.body).save();
        res.json({ success: 'A agent added' })
    } catch (error) {
        res.json({ message: 'A agent addition failed' }).status(500)

    }
};
module.exports = agentRouteController ;