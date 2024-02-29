const express = require('express');
const AddAProductController = require('../../controller/productControllers/AddAProductController/AddAProductController');
const productRouter = express.Router();


productRouter.post('/create-a-product',AddAProductController);
module.exports = productRouter;