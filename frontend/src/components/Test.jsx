import { useContext } from "react"
import { counterContextObj } from "../contexts/ContextProvider"
import { useCounterStore } from "../store/CounterStore"

function Test() {
    console.log("test")
    
  return (
    <div>Test</div>
  )
}

export default Test