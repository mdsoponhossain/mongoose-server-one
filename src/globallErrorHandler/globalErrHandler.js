const globalErrControllerTwo = require("../controller/globalErrControllerTwo/globalErrControllerTwo");
const globalErrController = require("../controller/globalErrorOne/globalErrorOne");


const globalErrHandler = (app) => {
    app.all("*", globalErrController);

    app.use(globalErrControllerTwo)
};

module.exports = globalErrHandler;