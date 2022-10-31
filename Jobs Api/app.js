const express = require('express');
const app = express();

//error handlers
const errorHandler = require('./middlewares/errorHandler');
const NotFoundError = require('./middlewares/notFound');

//routes
const router = require('./routes/route-1');

app.use(express.json())

app.use('/api/v1/test',router)

app.use(NotFoundError)
app.use(errorHandler)

const port = process.env.PORT || 5000;
const start = async ()=> {
    //db connection
    app.listen(port,(req,res)=>console.log(`Server listening on port ${port}......`))
}
start();