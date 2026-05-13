import { NavLink } from "react-router"

function Header() {
  return (
    <nav className="flex justify-end gap-6 p-5 text-2xl bg-gray-300">
        <NavLink to='' className={({isActive}) => isActive?"text-sky-400":""}>Home</NavLink>
        <NavLink to='create-emp' className={({isActive}) => isActive?"text-sky-400":""}>CreateEmp</NavLink>
        <NavLink to='listofemps' className={({isActive}) => isActive?"text-sky-400":""}>List of Employees</NavLink>
    </nav>
  )
}

export default Header