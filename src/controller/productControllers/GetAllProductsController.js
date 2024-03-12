const ProductModel = require("../../models/productModel/productModel");
const { all } = require("../../routes/healthRoute/healthRoute");

async function GetAllProductsController(req, res) {
    try {
        const allProducts = await ProductModel.find().populate('product_author').select({'product_author.agent_details':0,_id:0});
        res.send(allProducts).status(200)
    } catch (error) {
        res.send(error.message).status(500)
    }
};
module.exports = GetAllProductsController ;