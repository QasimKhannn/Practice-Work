import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    let [count,setCount]=useState(0)

    const zero=()=>{
      if(count!==0){
        return count
      }
      else{
        return 'Zero'
      }
    }

    const handleChange=()=>{
      setCount(count+=1)
    }
    const Dec=()=>{
      setCount(count=count-1)
    }
    const Res=()=>{
      setCount(count=0)
    }

  return (
  <>
    <div className='content'>
        <div className='center'>
          <h1>{zero(count)}</h1>
          <button onClick={handleChange} className="btn btn-primary">Increase</button>
          <button onClick={Dec} className="btn btn-primary">Decrease</button>
          <button onClick={Res} className="btn btn-primary">Reset</button>
        </div>
    </div>
  </>
  )
}

export default Counter