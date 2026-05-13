import axios from "axios"
import { useEffect,useState } from "react"
import { useNavigate } from "react-router"

function ListOfEmps() {

  const [emps,setEmps]=useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)
  const navigate=useNavigate()

  //parameterized function
  const goToEmployee=(empObj) => {
    //navigate to employee component along with selected emp obj
    navigate('/employee',{state:empObj})
  }

  const goToEditEmp=(empObj) => {
    //navigate to /employee along with selected obj
    navigate('/editemployee',{state:empObj})
  }

  const goToDeleteEmp=async(id) => {
    try{
      setLoading(true)
      let res=await axios.delete(`http://localhost:4000/employee-api/employees/${id}`)
      if(res.status===200){
        //get latest emps data
        getEmps()
    }else{
        throw new Error("Failed to delete employee")
      }
    }catch(err){
      setError(err)
    }finally{
      setLoading(false)
    }
  }

  
  
  async function getEmps(){
    try{
      let res=await axios.get("http://localhost:4000/employee-api/employees")
      if(res.status===200){
        let resObj=res.data
        setEmps(resObj.payload)
      }
    }catch(err){
      setError(err)
    }
  }
  
  //get all emps on component loading
  useEffect(() => {
    getEmps()
  },[])
  
  if(loading)
    return <p className='text-center text-4xl'>Loading...</p>
  if(error)
    return <p className='text-red-500 text-4xl text-center'>{error.message}</p>
    
  return (
    <div>
      <h1 className="text-4xl text-center p-6">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {
          emps.map((empObj) => (
            <div key={empObj._id} className="bg-white p-5 rounded-2xl gap-20 text-center 
              transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <p>{empObj.name}</p>
              <p>{empObj.email}</p>
              {/* 3 buttons */}
              <div className="flex justify-center p-3 gap-3">
                <button onClick={() => goToEmployee(empObj)} className="bg-gray-200 p-2 rounded-2xl transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">View</button>
                <button onClick={() => goToEditEmp(empObj)} className="bg-gray-200 p-2 rounded-2xl transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">Edit</button>
                <button onClick={() => goToDeleteEmp(empObj._id)} className="bg-gray-200 p-2 rounded-2xl transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">Delete</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )          
}

export default ListOfEmps