const OrderModel = require("../../models/orderModel/orderModel");

async function orderRouteController(req, res) {
    try {
        await OrderModel(req.body).save();
        res.json({ success: 'A order is placed' })
    } catch (error) {
        res.json({ Message: 'A order is placed' })
    }
};
module.exports = orderRouteController;