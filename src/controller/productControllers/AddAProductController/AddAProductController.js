const AgentModel = require("../../../models/agentModel/agentModel");
const ProductModel = require("../../../models/productModel/productModel");

async function AddAProductController(req, res) {
    try {
        const addedProduct = await ProductModel(req.body).save();
        const updatedAgent = await AgentModel.findByIdAndUpdate({ _id: req?.body?.product_author }, {
            $push: {
                added_product_by_agent: addedProduct?._id
            }
        })
        res.json({ success: 'A product is created successfully &', updatedAgent }).status(200)
    } catch (error) {
        res.json({ Message: error.message }).status(500)
    }
};

module.exports = AddAProductController;