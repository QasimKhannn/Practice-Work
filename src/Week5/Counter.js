import React from 'react'
import Count from './Count'

const Counter = () => {
  return (
    <>
    <Count inc={"Increase"} dec={"Decrease"} res={"Reset"}/>
    <Count inc={"Increase"} dec={"Decrease"} res={"Reset"}/>
    </>
  )
}

export default Counter