import React from 'react'
import Child from './Child'
import { useGlobalContext } from './Comp1'

const Comp5 = () => {
    const {count,name}=useGlobalContext()
  return (
    <>
        <div>Count is {count}</div>
        <p>{name}</p>
        <Child/>
    </>
  )
}

export default Comp5