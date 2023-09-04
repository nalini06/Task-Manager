const Task = require('../models/tasks')


const getAllTasks = async(req,res) =>{
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }catch(error){
     res.status(500).json({msg : error})
    }
} 

const createTask = async (req, res) =>{
    
    try{
        const task = await Task.create(req.body);
        
        res.status(201).json({task})
    }catch(error){
        res.status(400).json(error.errors.name.message)
    }
    
}
const getTask = async (req, res) =>{
    const {id:taskID} = req.params;
    try{
        const singleTask = await Task.findOne({_id:taskID});
        if(!singleTask){
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }
        console.log(singleTask);
        res.status(200).json({singleTask})
        
    }catch(error){
        res.status(500).json({msg:error})
    }
}

const updateTask = async (req, res) =>{
    
    try{
        const {id:taskID} = req.params;
        const updatedTask = await Task.findOneAndUpdate({_id:taskID}, req.body,{
            new:true, runValidators: true
        })
        if(!updatedTask){
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }
        res.status(200).json({updatedTask});
    }catch(error){
       res.status(404).json({msg:error})
    }
}

const deleteTask = async(req, res) =>{
    const {id:taskID} = req.params;
    try{
        const singleTask = await Task.findOneAndDelete({_id:taskID});
        if(!singleTask){
              return res.status(404).json({msg: `No task with id: ${taskID}`})
        }
        res.status(200).json({singleTask})
        
    }catch(error){
        res.status(500).json({msg:error})
    }
}

module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask}