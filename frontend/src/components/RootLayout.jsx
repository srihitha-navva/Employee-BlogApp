import { Outlet } from "react-router"
import Header from "./Header"

function RootLayout() {
  return (
    <div>
        <Header />
        <div className="min-h-screen mx-20 p-20 bg-sky-50">
            <Outlet />
        </div>
    </div>
  )
}

export default RootLayout