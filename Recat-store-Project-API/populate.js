require('dotenv').config()

const connectDB = require('./db/dbConnect')
const productsModel = require('./models/productsModel')
const productsJSON = require('./products.json')

const Start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI2);
        await productsModel.deleteMany();
        await productsModel.create(productsJSON);
        console.log('SUCCESS !!!!');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

Start();