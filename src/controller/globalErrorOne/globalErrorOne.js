function globalErrController(req, res, next) {
        const error = new Error(`Your requested URL is not valid [${req.url}]`);
        next(error)
};
module.exports = globalErrController ;