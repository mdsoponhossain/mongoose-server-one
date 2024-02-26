function globalErrControllerTwo(error, req, res, next) {
    if (error) {
        res.json({ Message: error.message }).status(500)
    }
};

module.exports = globalErrControllerTwo ;