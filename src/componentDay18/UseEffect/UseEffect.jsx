import './UseEffect.css'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    let [title,setTitle]=useState('')
    
    async function fetchApi(){
        let res=await fetch('https://jsonplaceholder.typicode.com/posts')
        let data=await res.json()
        setTitle(data)
        console.log(data);
    }
    useEffect(()=>{
        fetchApi()
    },[])
  
    return (
        <>
            {title.map((dat)=>{
                return <p></p>
            })}
        </>
    );
}

export default UseEffect