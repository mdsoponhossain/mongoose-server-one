const express = require('express');
const agentRouteController = require('../../controller/agentRouteController/agentRouteController/agentRouteController');
const allAgentController = require('../../controller/agentRouteController/agentRouteController/allAgentController');
const searchAgentController = require('../../controller/agentRouteController/agentRouteController/searchAgentController');
const agentRouter = express.Router();

agentRouter.post('/add-a-agent',agentRouteController);
agentRouter.get('/find-all-agent',allAgentController);
agentRouter.get('/find-searched-agents',searchAgentController)
module.exports = agentRouter ;