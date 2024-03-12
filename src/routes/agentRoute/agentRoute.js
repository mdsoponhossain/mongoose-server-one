const express = require('express');
const agentRouteController = require('../../controller/agentRouteController/agentRouteController/agentRouteController');
const allAgentController = require('../../controller/agentRouteController/agentRouteController/allAgentController');
const agentRouter = express.Router();

agentRouter.post('/add-a-agent',agentRouteController);
agentRouter.get('/find-all-agent',allAgentController)
module.exports = agentRouter ;