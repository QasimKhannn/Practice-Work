import React, { useState } from 'react'
import './Fetch.css'

const Fetch = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")

    let [user,setUser]=useState([])
    const handleSubmit=(e)=>{
        e.preventDefault()
        let userData={id:Math.floor(Math.random()*100),name, email}
        // console.log(userData)
        setUser([...user,userData])
        setName('')
        setEmail('')
    }

  return (
    <>
    <div className="name">
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='UserName' value={name} onChange={(e)=>{setName(e.target.value)}} />
            <input type="email" name='email' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="number" placeholder='Number'/>
            <button className='btn btn-dark' type='submit'>Register</button>
        </form>
    </div>
    </>
  )
}

export default Fetch