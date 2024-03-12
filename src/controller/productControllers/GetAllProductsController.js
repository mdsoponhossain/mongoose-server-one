const ProductModel = require("../../models/productModel/productModel");
const { all } = require("../../routes/healthRoute/healthRoute");

async function GetAllProductsController(req, res) {
    try {
        const allProducts = await ProductModel.find().populate({path:'product_author',select:'agent_name -_id',}).select('-_id');
        res.send(allProducts).status(200)
    } catch (error) {
        res.send(error.message).status(500)
    }
};
module.exports = GetAllProductsController ;