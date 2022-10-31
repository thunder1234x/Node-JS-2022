require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

const NotFoundMiddleware = require('./middlewares/NotFound');
const errorMiddleware = require('./middlewares/errorMiddleware');

const router = require('./routes/route');
const jwtRouter = require('./routes/jwtRoute');

const connectDB = require('./db/dbConnect')

//CORS policy in APIs
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept , Authorization")
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})


//products routes
app.use('/api/products',router);
//JWT routes
app.use('/api/jwt/v1',jwtRouter);

//middlewares
app.use(NotFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 5000;
//server config
const start = async ()=>{
    try {
        //DB connect
        await connectDB(process.env.MONGO_URI2)
        app.listen(port , console.log(`Server is listening on port ${port}..........`));
    } catch (error) {
        console.log(error);
    }
    
}

start();
