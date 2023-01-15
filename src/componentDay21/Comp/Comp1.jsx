import React, { createContext, useContext, useState } from 'react'
import Comp2 from './Comp2'

const AppContext=createContext()
const Comp1 = () => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('Qasim')
  return (
    <>
    <AppContext.Provider value={{count,name}}  >
        <button className='btn btn-dark' 
        onClick={()=>{
            setCount(count+1)
            setName('Malik')
            console.log(count)
            }}>
            Count</button>
        <Comp2/>
    </AppContext.Provider>
    </>
  )
}
// Custom Hook
const useGlobalContext=()=>{
    return useContext(AppContext)
}
export default Comp1
export {useGlobalContext}