import React from 'react'
import './RegForm.css'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const RegForm = () => {
const [name,setName]=('')
const [devName,setDevName]=('')
const [email,setEmail]=('')
const [position,setPosition]=('')
const [condition,setCondition]=('')

// const [user,setUser]=useState([])
    const handleClick=(e)=>{
        // e.preventDefault()
        // let userData={id:Math.floor(Math.random()*100),name:name, email:email}
        // // console.log(userData)
        // setUser([...user,userData])
        // setName('')
        // setEmail('')
    }

  return (
    <div className="main">
    <Form className='container col-3'>
      <Form.Group className="mb-3" controlId="name">
        <Form.Control type="name" value={name} placeholder="Enter Username" onChange={(e)=>{setName(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="devName">
        <Form.Control type="devName" value={devName} placeholder="Enter Developer Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Control type="email" value={email} placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="position">
        <Form.Control type="position" value={position} placeholder="Enter Position" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="radio" id='check'>
        <Form.Check type="radio" name="group1" value={condition} label="Satisfied" onChange={(e)=>{setCondition(e.target.value)}} />
        <Form.Check type="radio" name="group1" value={condition} label="Unsatisfied" onChange={(e)=>{setCondition(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="comment" >
        <Form.Control type="comment" placeholder="Comment.." id='com' />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleClick}>
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default RegForm