const express = require('express');

const app = express();
app.use(express.json());

const routes = require('./routes/route-1');
const notFoundPage = require('./middleware/not-found');
const errorHandler = require('./middleware/errorHandler');


//Mongo DB atlas web version connectiong process
const dbConnect = require('./db/dbConfig');
require('dotenv').config();

//custom routes
app.use('/api/v1/tasks', routes);
app.use(notFoundPage);
app.use(errorHandler);


const startApp = async () => {
    const port = 3000;
    try {
        await dbConnect(process.env.MONGO_URI);
        console.log("Communication successfull with DB ...");
        app.listen(port, (req, res) => {
            console.log(`Server listening on port ${port} ........ `)
        })
    } catch (err) {
        console.log(err);
    }
}

console.log("Task Manager Project Repo ");
startApp();