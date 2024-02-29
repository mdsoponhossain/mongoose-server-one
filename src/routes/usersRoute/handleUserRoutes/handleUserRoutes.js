const express = require('express');
const AUserPostController = require('../../../controller/userRoutesController/userPostController/userPostController');
const AUserGetController = require('../../../controller/userRoutesController/userPostController/AUserGetController');
const AllUserGetController = require('../../../controller/userRoutesController/AllUserGetController');
const handleUserRouter = express.Router();


handleUserRouter.get('/find-a-user/:id',AUserGetController);
handleUserRouter.get('/find-all-user',AllUserGetController);
handleUserRouter.post('/add-a-user',AUserPostController);
// handleUserRouter.get('/find-all-user',AUserPostController);

module.exports = handleUserRouter ;