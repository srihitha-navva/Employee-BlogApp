//create mini express application
import exp from 'express'
import { EmployeeModel } from '../Models/EmployeeModel.js'

export const empApp=exp.Router()

//Define REST API routes

//create employee
empApp.post('/employees',async(req,res,next) => {
    try{
        //get employee data from req
        const newEmp=req.body
        //create new employee document
        const newEmpDocument=new EmployeeModel(newEmp)
        //save
        const result=await newEmpDocument.save()
        console.log("result:",result)
        //send res
        res.status(201).json({message:"Employee created"})
    }
    catch(err){
        next(err)
    }
})

//read all employees
empApp.get('/employees',async(req,res,next) => {
    try{
        //read all employees from db
        let empList=await EmployeeModel.find()
        //send res
        res.status(200).json({message:"Employees:",payload:empList})
    }
    catch(err){
        next(err)
    }
})

//edit employee by Id
empApp.put('/employees/:id',async(req,res,next) => {
    try{
        //read id from req params
        const eid=req.params.id
        //read updated data from req body
        const modfiedEmp=req.body
        //find and update data
        const updatedEmp=await EmployeeModel.findByIdAndUpdate(eid,{$set:{...modfiedEmp}},{returnDocument:'after',runValidators:true})
        //if not found
        if(!updatedEmp)
            return res.status(404).json({message:"Employee not found"})
        //send res
        res.status(200).json({message:"Employee updated",payload:updatedEmp})
    }
    catch(err){
        next(err)
    }
})

//delete employee by Id
empApp.delete('/employees/:id',async(req,res,next) => {
    try{
        //read id from req params
        const eid=req.params.id
        //find and delete the data from db
        let deletedEmp=await EmployeeModel.findByIdAndDelete(eid)
        //if not found
        if(!deletedEmp)
            return res.status(404).json({message:"Employee not found"})
        res.status(200).json({message:"Employee Deleted",payload:deletedEmp})
    }
    catch(err){
        next(err)
    }
})