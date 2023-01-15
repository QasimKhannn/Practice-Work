import React, { useState } from 'react'

const Validation = () => {
    let [name,setName]=useState('')
    let [pass,setPass]=useState('')
    let [RePass,setRePass]=useState('')

    let [label,setLabel]=useState('')
    let [label2,setLabel2]=useState('')
    let [label3,setLabel3]=useState('')
    let [user,setUser]=useState([])

    const handleRegister=(e)=>{
        // e.preventDefault()
        let userData={id:Math.floor(Math.random()*100),name:name,pass:pass,RePass:RePass}
        setUser([...user,userData])
        // setName('')
        // setPass('')
        // setRePass('')
        console.log(userData)

        if(name===""){
            setLabel("Enter Name")
        }
        else{
            setLabel("")
        }
        if(pass===""){
            setLabel2("Enter Password")
        }
        else{
            setLabel2("")
        }
        if(RePass===""){
            setLabel3("Enter Pass")
        }
        else if(pass!==RePass){
            setLabel3("Dont Match")
        }
        else{
            setLabel3("")
        }
    }
  return (
    <>
    <div className="main">
        <div className="form">
            <input type="text" placeholder='Enter Name' value={name} name={name} onChange={(e)=>{setName(e.target.value)}} />
            <p>{label}</p>
            <input type="password" placeholder='Enter Password' value={pass} name={pass} 
            onChange={(e)=>{
                setPass(e.target.value)
                // if(pass!="" && RePass===""){
                //     setLabel3("Enter Password")
                // }
                }}/>
            <p>{label2}</p>
            <input type="password" placeholder='Retype Password' value={RePass} name={RePass} 
            onChange={(e)=>{
                setRePass(e.target.value)
                // if(pass.length-1===RePass.length){
                //     setLabel3("")
                // }
                // else{
                //     setLabel3("Pass Dont Match")
                // }
                }}/>
            <p>{label3}</p>
            <button onClick={handleRegister} >Register</button>
        </div>
    </div>
    </>
  )
}

export default Validation