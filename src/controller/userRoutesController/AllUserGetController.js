const userModel = require("../../models/userModel/userModel");

async function AllUserGetController  (req,res) {
    try {
        const users = await userModel.find();
        res.send(users).status(200)
    } catch (error) {
      res.send(error.message).status(500) 
    }
};
module.exports = AllUserGetController