//External Imports:
const express = require('express');
const cors = require('cors');
const app = express();
//Internal Imports :
const dbConnect = require('./dbConnection/dbConnection');
const globalErrHandler = require('./globallErrorHandler/globalErrHandler');
const middleWarOfAppJs = require('./middleWars/appJsMiddleWar/appJsMiddleWar');
const healthRouter = require('./routes/healthRoute/healthRoute');
const handleUserRouter = require('./routes/usersRoute/handleUserRoutes/handleUserRoutes');
const orderRouter = require('./routes/orderRoute/orderRoute');
const productRouter = require('./routes/productRoutes/productRoute');
const agentRouter = require('./routes/agentRoute/agentRoute');

//middleWares:
middleWarOfAppJs(app, cors, express)
//health route:
app.use('/health', healthRouter);

//Routes:
app.use('/users',handleUserRouter)
app.use('/agents',agentRouter)
app.use('/order',orderRouter)
app.use('/products',productRouter)



//Global Error Handler
globalErrHandler(app);
//Database Connection:
dbConnect();



app.listen(5000, () => {
    console.log('mongoose one server is running on 5000');
})