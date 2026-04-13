import { createContext,useState } from "react"

export const counterContextObj=createContext()
//create context provider obj
function ContextProvider({children}) {
    const[counter,setCounter]=useState(10)
    const[counter1,setCounter1]=useState(20)
    const changeCounter1=()=>{
      setCounter1(counter1+1)
    }
    //function to change state
    const changeCounter=()=>{
        setCounter(counter+1)
    }
  return (
    <counterContextObj.Provider value={{counter,counter1,changeCounter,changeCounter1}} >
    {children}
    </counterContextObj.Provider>
  )
}

export default ContextProvider