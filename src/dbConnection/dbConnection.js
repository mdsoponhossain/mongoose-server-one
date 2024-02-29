const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.USER_PASS}@cluster0.yfrjdbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, { dbName: 'mongooseOne' });
        // await mongoose.connect(`mongodb://localhost:27017`, { dbName: 'mongooseOne' });
        console.log('mongoose server is successfully connected with database');
    } catch (error) {
        console.log(error.message);
    }
};
module.exports = dbConnect ;