import { useForm } from "react-hook-form"
import { useNavigate, useLocation } from "react-router"
import { useEffect } from "react"
import axios from 'axios'

function EditEmployee() {

  const {
    register,
    handleSubmit,
    formState:{errors},
    setValue
  }=useForm()

  //get empObj from navigate hook
  const { state }=useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setValue("name",state.name)
    setValue("email",state.email)
    setValue("mobile",state.mobile)
    setValue("designation",state.designation)
    setValue("companyName",state.companyName)
  },[])

  const saveModifiedForm= async (modifiedEmp) => {
    //make http req to put
    const res=await axios.put(`http://localhost:4000/employee-api/employees/${state._id}`,modifiedEmp)
    if(res.status===200)
      //navigate to list of employees
      navigate('/listofemps')
  }
  
  return (
    <div>
      <h1 className='text-5xl text-center text-gray-600'>Edit Employee Details</h1>
      {/* form */}
      <form onSubmit={(handleSubmit(saveModifiedForm))} className='w-full max-w-md mx-auto p-5'>
        <input type='text' placeholder='Enter Name' {...register("name")} id='' className='mb-3 border p-3 w-full rounded-2xl' /> 
        <input type='email' placeholder='Enter Email' {...register("email")} id='' className='mb-3 border p-3 w-full rounded-2xl' /> 
        <input type='tel' placeholder='Enter Mobile Number' {...register("mobile")} id='' className='mb-3 border p-3 w-full rounded-2xl' /> 
        <input type='text' placeholder='Enter Designation' {...register("designation")} id='' className='mb-3 border p-3 w-full rounded-2xl' /> 
        <input type='text' placeholder='Enter Company Name' {...register("companyName")} id='' className='mb-3 border p-3 w-full rounded-2xl' />
        <button  type='submit' className='mb-3 border rounded-2xl p-3 block mx-auto bg-gray-300 '>Save</button> 
      </form>
    </div>
  )
}

export default EditEmployee