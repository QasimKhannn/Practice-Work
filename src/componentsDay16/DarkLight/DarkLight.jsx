import React from "react";
import { useState } from "react";
import "./DarkLight.css";

const DarkLight = () => {
  const [color,setColor]=useState('black')
  const [divColor,setDivColor]=useState('white')

  let changeColor=()=>{
    if(color==='black' && divColor==='white'){
      setColor("white")
      setDivColor("black")
    }
    else if(color==='white' && divColor==='black'){
      setColor("black")
      setDivColor("white")
    }
    
  }
  return (
    <div style={{backgroundColor:divColor,height:"100vh",width:"100vw"}}>
        <h1 style={{color:color}}>Logo</h1>
        <p style={{color:color}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, beatae sunt quae ut nobis libero exercitationem quibusdam quos quod incidunt sed voluptatem voluptas blanditiis ratione repellendus omnis accusantium ullam. Unde.</p>
        <button onClick={changeColor} className="btn btn-primary">{color==="black" ? "DarkMode":"LightMode"}</button>
    </div>
  )
}

export default DarkLight