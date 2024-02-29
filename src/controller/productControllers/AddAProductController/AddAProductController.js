const ProductModel = require("../../../models/productModel/productModel");

async function AddAProductController(req, res) {
    try {
        await ProductModel(req.body).save();
        res.json({ success: 'A product is created successfully' }).status(200)
    } catch (error) {
        res.json({ Message: 'A product is created successfully' }).status(500)
    }
};

module.exports = AddAProductController ;