const userModel = require("../../../models/userModel/userModel");

async function AUserPostController(req, res) {
    try {
        await userModel(req.body).save();
        res.json({ Success: `A user inserted to the Database` }).status(200);
    } catch (error) {
        res.json({ Message: error.message }).status(500);
    }
};
module.exports = AUserPostController;