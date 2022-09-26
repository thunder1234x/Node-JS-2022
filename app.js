// const customEvent = require('./Event');

// customEvent.emit('data');
// customEvent.emit('info','Rakesh',23);

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({status:'success',code:200});
})

app.listen(5000,()=>{
    console.log("Server is listening on port 5000 ..........");
})
