const express = require('express');
const AUserPostController = require('../../../controller/userRoutesController/userPostController/userPostController');
const handleUserRouter = express.Router();


handleUserRouter.post('/add-a-user',AUserPostController);

module.exports = handleUserRouter ;