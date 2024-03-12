const AgentModel = require("../../../models/agentModel/agentModel")

const allAgentController = async (req, res, next) => {
    try {
        //If you need to select and ignore some keys and values, then you can try this.
        // const allAgents = await AgentModel.find().select({_id:0,'agent_details.password':0});

        // If you need to find data using populate method from several collections, you can try this method.
        // const allAgents = await AgentModel.find().populate('added_product_by_agent').select({_id:0,'agent_details.password':0,'added_product_by_agent[0].product_author':0,'added_product_by_agent[1].product_author':0});

        // If you need to aggregate several collection for dashboard and other thing.
        const allAgents = await AgentModel.aggregate([
            {
                $unwind: '$added_product_by_agent'
            },
            {
                $lookup: {
                    from: 'productcollections',
                    localField: 'added_product_by_agent',
                    foreignField: '_id',
                    as: 'products'
                }
            },
            {
                $unwind: '$products'
            },
            {
                $group: {
                    _id: '$products.product_name',
                    total_products: { $sum: 1 },
                    seller_name: { $push: '$agent_name' },
                    product_price: { $push: '$products.product_details.product_price' }
                },

            },
            {
                $project: {
                    total_products: 1,
                    product_name: '$_id',
                    _id: 0,
                    seller_name: 1,
                    product_price: 1
                }
            }
        ]);
        res.send(allAgents).status(200);
    } catch (error) {
        res.send(error).status(500);
    }
};

module.exports = allAgentController;