import React, {useState} from 'react'
import './Delete.css'

const users =[
    {
        id:1,
        img: "https://images.pexels.com/photos/6716662/pexels-photo-6716662.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Saeed",
        age: 23
    },
    {
        id:2,
        img: "https://images.pexels.com/photos/6716662/pexels-photo-6716662.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Ahmad",
        age: 23
    },
    {
        id:3,
        img: "https://images.pexels.com/photos/6716662/pexels-photo-6716662.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Malik",
        age: 23
    }
]

const Delete = () => {
    const [persons, setPersons] = useState(users)
    const Delete=(uid)=>{
        const updatedUser=persons.filter((item)=>item.id!==uid)
        setPersons(updatedUser)
    }
  return (
    <>
    <h3>{persons.length === 0 ?`No User active yet`: `total ${persons.length} users are active`}</h3>
        {
        persons.map((person) => {
            const {id,img, name, age} = person;
            return(
            <div className='cart'>
                <img src={img} alt="" />
                <p>{name}</p>
                <p>{age}</p>
                <button className='btn btn-primary' onClick={()=>Delete(id)} >Delete</button>
            </div>
            )
        })}
        <button className='btn btn-dark' onClick={() =>{setPersons([])}}>Delete All</button>
    </>
  )
}

export default Delete