const express = require('express');
const agentRouteController = require('../../controller/agentRouteController/agentRouteController/agentRouteController');
const agentRouter = express.Router();

agentRouter.post('/add-a-agent',agentRouteController)
module.exports = agentRouter ;