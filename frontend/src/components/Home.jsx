import { useContext } from "react"
import { counterContextObj } from "../contexts/ContextProvider"
import Test from "./Test"
import { useCounterStore } from "../store/CounterStore"

function Home() {

  //call useCounterStore hook to get state of zustand store
  let newCounter=useCounterStore((state) => state.newCounter)
  let incrementCounter=useCounterStore((state) => state.incrementCounter)

  const {counter,changeCounter,counter1,changeCounter1}=useContext(counterContextObj)
  console.log("Home")

  return (
    <div>
      <h1 className="text-4xl">Counter:{counter}</h1>
      <button onClick={changeCounter} className="bg-pink-500 p-5 text-black">Increment</button>
      <div>
        <h1 className="text-4xl">Counter1:{counter1}</h1>
        <button onClick={changeCounter1} className="bg-pink-500 p-5 text-black">Increment</button>
      </div>
      <div>
        <h1 className="text-4xl">Increment:{newCounter}</h1>
        <button onClick={incrementCounter} className="bg-blue-100 p-5 text-black">Increment</button>
      </div>
    </div>
  )
}

export default Home