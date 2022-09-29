const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url);
    // then(()=>{
    //     console.log("Communication successfull with DB ...")
    // }).catch((err)=>{
    //     console.log(err);
    // });
}

module.exports = connectDB;
