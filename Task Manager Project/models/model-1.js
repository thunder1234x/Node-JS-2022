const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name must be filled"],
        trim:true,
        maxlength:[20,"max 20 character"]
    },
    completed: {
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task',TaskSchema);