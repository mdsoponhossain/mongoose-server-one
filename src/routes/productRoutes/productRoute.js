const express = require('express');
const AddAProductController = require('../../controller/productControllers/AddAProductController/AddAProductController');
const GetAllProductsController = require('../../controller/productControllers/GetAllProductsController');
const productRouter = express.Router();


productRouter.post('/create-a-product',AddAProductController);
productRouter.get('/all-products',GetAllProductsController);
module.exports = productRouter;