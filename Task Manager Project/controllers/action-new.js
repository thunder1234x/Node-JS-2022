const Task = require('../models/model-1');
const asyncWrapper = require('../middleware/wrapper');

const getAllTasks = asyncWrapper( async (req,res)=>{
        const tasks = await Task.find({});
        res.status(200).json(tasks);
})

const getSingleTask = asyncWrapper( async (req,res)=>{
        const {id:taskID} = req.params;
        const singleTask = await Task.findOne({_id:taskID});
        if (!singleTask) {
            return res.status(404).json({type:'error',msg:"No task exists with this ID "})
        }
        res.status(200).json(singleTask);
})

const postTasks = asyncWrapper( async (req,res)=>{
        const task = await Task.create(req.body);
        res.status(201).json(task);      
})

const updateTask = asyncWrapper( async (req,res)=>{
        const{id:taskID} = req.params;
        const task = await Task.findByIdAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true,
        });
        if (!task) {
            return res.status(404).json({type:'error',msg:"No task exists with this ID "})
        }
        res.status(200).json({id:taskID,data:task});
})

const deleteTask = asyncWrapper( async (req,res)=>{
        const {id:taskID} = req.params;
        const tasks = await Task.findOneAndDelete({_id:taskID});
        if (!tasks) {
            return res.status(404).json({type:'error',msg:"No task exists with this ID "})
        }
        res.status(200).json(tasks);
})

module.exports = {
    getAllTasks,
    getSingleTask,
    postTasks,
    updateTask,
    deleteTask
}