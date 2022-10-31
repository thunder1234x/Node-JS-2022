const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is reqiuired"]
    },
    price:{
        type:Number,
        required:[true,"Price is reqiuired"]
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:['ikea','liddy','marcos','caressa'],
            message:"{VALUE} does not supported"
        }
    }
})

module.exports = mongoose.model('productsModel',productsSchema)