import React, { useState } from 'react'
import './Form1.css'

const Form1 = () => {
    const [name,setName]=useState('')
    const [devName,setDevName]=useState('')
    const [email,setEmail]=useState('')
    const [comment,setComment]=useState('')
    const [satisfied,setRadio]=useState('')

    let [count,setCount]=useState(0)
    let [user,setUser]=useState([])
    const handleChange=(e)=>{
        e.preventDefault()
        let userData={id:Math.floor(Math.random()*100),name:name,devName:devName, email:email,comment:comment,satisfied:satisfied}
        // console.log(userData)
        setUser([...user,userData])
        setName('')
        setDevName('')
        setEmail('')
        setComment('')
        setRadio('')
        // document.getElementById('primary').style.display='none'
    }
    console.log(user);

  return (
    <>
    <div className="main">
    <div className="container col-2" id='primary' >
    <h1 id='heading'>Feedback</h1>
        <input id='text' type="text" name="name" value={name} placeholder="User Name" onChange={(e)=>{setName(e.target.value)}} />
        <input id='text' type="text" name="devName" value={devName} placeholder="Developer Name" onChange={(e)=>{setDevName(e.target.value)}} />
        <input id='text' type="text" name="email" value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} /> <br />
        <div className="radio">
        <input id='firstRadioInput' type="radio" name='radio' value='Satisfied' onChange={(e)=>{setRadio(e.target.value)}} /><span>Satisfied</span>
        <input type="radio" name='radio' value='Unsatisfied' onChange={(e)=>{setRadio(e.target.value)}} /><span>Unsatisfied</span>
        </div>
        <div className="commentBox">
        <textarea name="comment" value={comment} placeholder="Enter Comment" 
        onChange={(e)=>{
          setComment(e.target.value)
          setCount(e.target.value.length)
        }}
        maxLength={50} id="com" cols="30" rows="5"></textarea>
        <p id='wordCount'>{count}/50</p>
        </div>
        <button id='butt' onClick={handleChange} className="btn btn-light">Submit</button>
    </div>

    
    {user.map((Show) => {
          let {id,email, name,satisfied,comment,devName } = Show;
          return (
            <>
              <div className="show" key={id} >
                <div className="container form-content">
                  <form>
                    <h1>Feedback <span className="badge bg-secondary">{satisfied}</span></h1>
                    Name: <span id="txt">{name}</span>
                    <br />
                    DevName: <span id="txt">{devName}</span>
                    <br />
                    Email: <span id="txt">{email}</span>
                    <br />
                    Comment: <span id='txt'>{comment}</span>
                    <br />
                  </form>
                </div>
              </div>
            </>
          );
        })}
    </div>
    
    </>
  )

  
}

export default Form1