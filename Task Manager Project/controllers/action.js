const Task = require('../models/model-1');

const getAllTasks = async (req,res)=>{
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getSingleTask = async (req,res)=>{
    try {
        const {id:taskID} = req.params;
        const singleTask = await Task.findOne({_id:taskID});
        if (!singleTask) {
            return res.status(404).json({type:'error',msg:"No task exists with this ID "})
        }
        res.status(200).json(singleTask);
    } catch (err) {
        res.status(500).json(err);
    }
}

const postTasks = async (req,res)=>{

    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);      
    } catch (err) {
        res.status(500).json(err);
    }
}

const updateTask = async (req,res)=>{

    try {
        const{id:taskID} = req.params;
        const task = await Task.findByIdAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true,
        });
        if (!task) {
            return res.status(404).json({type:'error',msg:"No task exists with this ID "})
        }
        res.status(200).json({id:taskID,data:task});
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteTask = async (req,res)=>{
    try {
        const {id:taskID} = req.params;
        const tasks = await Task.findOneAndDelete({_id:taskID});
        if (!tasks) {
            return res.status(404).json({type:'error',msg:"No task exists with this ID "})
        }
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    getAllTasks,
    getSingleTask,
    postTasks,
    updateTask,
    deleteTask
}