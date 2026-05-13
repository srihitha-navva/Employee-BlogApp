import {create} from 'zustand'

//create store -- use a hook ('use' it is not a normal function)
export const useCounterStore=create((set)=>({ // we use extra () for returning an object from set function
    //state
    newCounter:0,
    newCounter1:0,
    newCounter2:0,
    
    //add user state {name,age,email}
    user:{name:"ravi",email:"ravi@email.com",age:21},
    //function to change email
    changeEmail:() => set({...user,email:"test@email.com"}),
    //function to change name and age
    changeNameAndAge:() => set({...user,name:"test",age:18}),

    //function to modify state -- we need state to get previous state to increment or decrement
    incrementCounter:() => set(state=>({newCounter:state.newCounter+1})),
    incrementCounter1:() => set(state=>({newCounter1:state.newCounter1+1})),
    decrementCounter:() => set(state=>({newCounter:state.newCounter-1})),
    reset:() => set({newCounter:0}), //we do not need a previous state to reset

    //function to change newCounter to 500
    changeCounter:() => set({newCounter:500}),
    //function to decrement newCounter by 20
    decrementCounter1:() => set(state=>({newCounter2:state.newCounter2-20}))
})) 