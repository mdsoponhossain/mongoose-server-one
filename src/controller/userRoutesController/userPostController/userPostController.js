const bcrypt = require('bcrypt')
const userModel = require("../../../models/userModel/userModel");

async function AUserPostController(req, res) {
    try {
        const user = req?.body;
        const encriptedPass = await bcrypt.hash(req?.body?.password, 10);
        user.password = encriptedPass;
        await userModel(user).save();
        res.json({ Success: `A user inserted to the Database` }).status(200);
    } catch (error) {
        res.json({ Message: error.message }).status(500);
    }
};
module.exports = AUserPostController;