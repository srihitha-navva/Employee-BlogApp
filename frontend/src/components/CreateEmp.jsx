import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

function CreateEmp() {

  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)
  const navigate=useNavigate()

  const {register,handleSubmit,formState:{errors}}=useForm()

  //form submit
  const onFormSubmit=async (newEmpObj) => {
    console.log(newEmpObj)
    try{
      setLoading(true)
    //make HTTP POST req
    let res= await fetch('http://localhost:4000/employee-api/employees',
    {
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(newEmpObj)
    })

    if(res.status===201){
      //navigate to employees component programatically
      navigate("/listofemps")
    }
    else{
      let errorRes=await res.json()
      throw new Error(errorRes.message || "Something went wrong")
    }

  }catch(err){
    //deal with error
    setError(err)
  }
   finally{
    setLoading(false)
   }
  }

  if(loading)
    return <p className='text-center text-4xl'>Loading...</p>
  if(error)
    return <p className='text-red-500 text-4xl text-center'>{error.message}</p>
  
  return (
    <div className='bg-gray-200 p-5 pt-7 rounded-3xl max-w-svh m-auto shadow-2xl'>
      <h1 className='text-5xl text-center text-gray-600'>Create New Employee</h1>
      {/* form */}
      <form className='w-full max-w-md mx-auto p-5' onSubmit={handleSubmit(onFormSubmit)}>
        <input type='text' placeholder='Enter Name' {...register("name")} id='' className='mb-3 border p-3 w-full rounded-2xl' /> 
        <input type='email' placeholder='Enter Email' {...register("email")} id='' className='mb-3 border p-3 w-full rounded-2xl' /> 
        <input type='tel' placeholder='Enter Mobile Number' {...register("mobile")} id='' className='mb-3 border p-3 w-full rounded-2xl' /> 
        <input type='text' placeholder='Enter Designation' {...register("designation")} id='' className='mb-3 border p-3 w-full rounded-2xl' /> 
        <input type='text' placeholder='Enter Company Name' {...register("companyName")} id='' className='mb-3 border p-3 w-full rounded-2xl' />
        <button type='submit' className='mb-3 border rounded-2xl p-3 block mx-auto bg-gray-300 '>Add Emp</button> 
      </form>
    </div>
  )
}

export default CreateEmp