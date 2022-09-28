//modules import
const express = require('express');
const app = express();

//middlewares import
const {logger , base} = require('./Middlewares/mid-basic-1')

//routers import
const productRouter = require('./routes/basic-router-1');

//builtin middleware use
app.use(express.urlencoded({extended:false}))
app.use(express.json());

//custom middleware and routers in use
app.use(logger);
app.use('/api/products',productRouter);

app.get('/',base ,(req,res)=>{
    // res.status(200).json({status:'success',code:200});
    res.send(`<h1>Home page</h1><a href='/api/products'>Product Page</a>
    <a href='/api/products/selective'>Basic Info</a>`)
})



app.listen(5000,()=>{
    console.log("Server is listening on port 5000 ..........");
})
