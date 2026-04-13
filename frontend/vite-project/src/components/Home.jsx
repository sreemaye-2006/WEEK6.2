import {useContext} from 'react'
import { CounterContextObj } from '../contexts/ContextProvider'
import { useCounterStore } from '../store/CounterStore'

function Home() {
  //call useCounterStore hook to get state of zustand store
  // let{newCounter,incrementCounter,decrementCounter}=useCounterStore();
  let newCounter=useCounterStore((State)=>state.newCounter);
  let incrementCounter=useCounterStore((state)=>state.incrementCounter)
  const {counter,changeCounter}=useContext(CounterContextObj)
  return (
 <div>
  <h1 className='text-4xl' >Counter:{counter}</h1>
  <button onClick={changeCounter} className='bg-amber-300 p-5'>
    change
  </button>
 </div>
  )
}

export default Home

// Counter:{counter}