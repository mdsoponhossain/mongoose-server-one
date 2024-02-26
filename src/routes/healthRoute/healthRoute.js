const express  = require('express');
const healthRouter = express.Router();
const healthController = require('../../controller/healthController/healthController');


healthRouter.get('/',healthController);
module.exports = healthRouter ;