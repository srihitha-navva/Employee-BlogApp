//create express app
import exp from 'express'
import {connect} from 'mongoose'
import { empApp } from './APIs/EmployeeAPI.js'
import { config } from 'dotenv'
import cors from 'cors'
const app=exp()

//add cors middleware
app.use(cors({
    origin:['http://localhost:5173']
}))

config();

//start server

//add body parser
app.use(exp.json())

//forward req to empApp if path satarts with /employee-api
app.use("/employee-api",empApp)

//set a port number
const port=process.env.PORT || 4000

//connect to DB server
async function connectDB() {
    try{
        await connect(process.env.DB_URL)
        console.log("DB connection successful")
        //assign port number to HTTP server
        app.listen(port, () => console.log(`server listening to port ${port}...`))
    }
    catch(err){
        console.log("err in DB connection:",err)
    }
    
}

connectDB()

//error handling middleware
app.use((err,req,res,next) =>{
    console.log(err.name)
    //validation error
    if(err.name==="ValidationError")
        return res.status(400).json({message:"error occured",error:err.name})
    //cast error
    if(err.name==="CastError")
        return res.status(400).json({message:"error occured",error:err.name})
    //send server side error
    res.status(500).json({message:"error occured",error:"Server side error"})
})