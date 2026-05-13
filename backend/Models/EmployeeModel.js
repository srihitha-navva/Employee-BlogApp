import { Schema, model } from "mongoose";

const employeeSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name required"]
    },
    email:{
        type:String,
        required:[true,"Email required"],
        unique:[true,"Email already exists"]
    },
    mobile:{
        type:Number,
        required:[true,"mobile no. required"]
    },
    designation:{
        type:String,
        required:[true,"designation required"]
    },
    companyName:{
        type:String,
        required:[true,"Company Name required"]
    }
},{
    versionKey:false,
    timestamps:true
})

export const EmployeeModel=model("employee",employeeSchema)