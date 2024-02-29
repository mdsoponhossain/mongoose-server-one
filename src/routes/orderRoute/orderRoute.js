const express = require('express');
const orderRouteController = require('../../controller/orderController/orderRouteController');
const orderRouter = express.Router();


orderRouter.post('/place-a-order',orderRouteController);
module.exports =orderRouter ;