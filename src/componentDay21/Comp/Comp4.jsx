import React from 'react'
import Comp5 from './Comp5'
import { useGlobalContext } from './Comp1'

const Comp4 = () => {
  const {count,name}=useGlobalContext()
  return (
    <>
    <p>{count}</p>
    <p>{name}</p>
    <Comp5/>
    </>
  )
}

export default Comp4