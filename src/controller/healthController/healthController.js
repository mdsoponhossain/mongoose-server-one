const healthController = async (req, res) => {
    try {
        res.json({ Message: 'mongoose one server is successfully running' }).status(200)
    } catch (error) {
        res.json({ Error: 'server is failed for running' }).status(500)
    }
};
module.exports = healthController ;