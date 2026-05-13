import { useLocation } from "react-router"

function Employee() {

  //read state received in navigation
  const{ state }=useLocation()

  return (
      <div className="justify-center bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md 
                    transform transition duration-300 hover:scale-105">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">Employee Details</h1>
        <p>Name: {state.name}</p>
        <p>Email Id: {state.email}</p>
        <p>Mobile Number: {state.mobile}</p>
        <p>Designation: {state.designation}</p>
        <p>Company Name: {state.companyName}</p>
      </div>
  )
}

export default Employee