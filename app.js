const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const port = 3000

//middleware 

app.use(express.json())
app.use(express.static('./public'))

app.get("/", (req, res)=>{
    res.send("This is taskmanager")
})


app.use('/api/v1/tasks', tasks)


const start = async () =>{
    try{
        await connectDB(process.env.url)
        app.listen(port, ()=>{
            console.log(`Server started listening on port ${port}`);
        })
    }catch(error){
        console.log(error);
    }
}

start();

