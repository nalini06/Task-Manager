const getAllTasks = (req,res) =>{
    res.send("get all items");
} 

const createTask = (req, res) =>{
    res.send("Task created")
}
const getTask = (req, res) =>{
    res.send("get Single Task")
}

const updateTask = (req, res) =>{
    res.send("Task updated")
}

const deleteTask = (req, res) =>{
    res.send("Task delete")
}

module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask}