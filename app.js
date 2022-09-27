// const customEvent = require('./Event');

// customEvent.emit('data');
// customEvent.emit('info','Rakesh',23);

//data import
const products = require('./data/ProductsData');

//middlewares import
const {logger , base} = require('./Middlewares/mid-basic-1')

const express = require('express');
const app = express();

app.use(logger);

app.get('/',base ,(req,res)=>{
    // res.status(200).json({status:'success',code:200});
    res.send(`<h1>Home page</h1><a href='/api/products'>Product Page</a>
    <a href='/api/products/selective'>Basic Info</a>`)
})

app.get('/api/products', (req,res)=>{

    res.json(products);
})

app.get('/api/products/selective', (req,res)=>{
    const newProducts = products.map(product=>{
        const {id , name , image} = product;
        return {id , name , image};
    })

    res.json(newProducts);
})

app.listen(5000,()=>{
    console.log("Server is listening on port 5000 ..........");
})
