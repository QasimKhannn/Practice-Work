import React, { useState } from 'react'
import "./Count.css"

let Count = (props)=> {
    let {inc,dec,res}=props
    let [count,setCount]=useState(0)
    let zero=()=>{
      if(count!=0){
        return count
      }
      else{
        return 'zero'
      }
    }

    let increaser=()=>{
      setCount(count+=1)
    }
    let decreaser=()=>{
      setCount(count-=1)
    }
    let reset=()=>{
      setCount(0)
    }

  return (
    <>
    <div className='main'>
    <div className='first'>
      <h4>{zero(count)}</h4>
    <div className='second'>
      <button onClick={increaser} className="btn btn-primary">{inc}</button>
      <button onClick={decreaser} className="btn btn-primary">{dec}</button>
      <button onClick={reset} className="btn btn-primary">{res}</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Count