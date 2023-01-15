import React from 'react'
import Users from './Data'

const Example = () => {
    
  return (
    <>
    
    {Users.map((use)=>{
        const {id,name,age}=use
        return (
            <>
            <div className="container">
                <h1>{id}</h1>
                <h1>{name}</h1>
                <h1>{age}</h1>
            </div>
            </>
        )
    })}
    </>
  )
}

export default Example