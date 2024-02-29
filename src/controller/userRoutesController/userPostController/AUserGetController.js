const userModel = require("../../../models/userModel/userModel");

async function AUserGetController(req, res) {
    try {
        const result = await userModel.find({ _id: req.params.id });
        console.log(result);
        res.send(result).status(200);
    } catch (error) {
        res.json({ Message: error.message }).status(500);
    }
};
module.exports = AUserGetController;