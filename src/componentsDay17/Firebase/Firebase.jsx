import React from 'react'

const Firebase = () => {
    let [user,setUser]=useState(
        {
            name:'',
            email:''
        }
    )
    // const handleClick=async(e)=>{
    //     e.preventDefault();
    //     let {name,email}=user

    //     let response=await fetch("https://qasim-s-form-default-rtdb.firebaseio.com/"){
    //         method:'POST',
    //         headers:
    //         {
    //             'Content-Type'
    //         }
    //     }
    // }
    const handleChange=()=>{

    }
  return (
    <>
    <div className="main">
        <input type="text" name='name' value={name} placeholder="name" />
        <input type="text" name='email' value={email} placeholder="email" />
        <button onChange={handleChange} onClick={handleClick}>Submit</button>
    </div>
    </>
  )
}

export default Firebase