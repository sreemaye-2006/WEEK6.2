import { create } from "zustand";

export const useCounterStore=create((set)=>({
    newCounter:0,
    newCounter1:100,
    incrementCounter1:()=>set(state=>({newCounter1:state.newCounter1+1})),
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0}),
    setnewCounter:()=>({newCounter:500}),
    decrementCounter1:()=>set(state=>({newCounter1:state.newCounter1-20})),
    //add user state with (name,age,email)
    user:{name:"ravi",email:"ravi@gmail.com",age:21},
//functions to change email, name, age
changeEmail:()=>set({...user,email:"test@gmail.com"}),
changeName:()=>set({...user,name:"ravi kumar"}),
changeAge:()=>set({...user,age:50}),
}))