// import React, { useState } from 'react'
import './Clr.css'

const Clr = () => {
    const randomColor = () => {
        var makeColorCode = '0123456789ABCDEF';
        var code = '#';
            for (var count = 0; count < 6; count++) {
                code =code+ makeColorCode[Math.floor(Math.random() * 16)];
        }
      return code;
     };
    
     let changeColor=()=>{
        document.getElementById('wow').style.backgroundColor=randomColor()
        document.getElementById('wow').style.color=randomColor()
     }

  return (
    <>
    <div className="main">
    <div className="second">
        <h2 id='wow' style={{width:"100px", height:"100px", backgroundColor:"#FF0"}}>Ok</h2>
        <button onClick={changeColor} className="btn btn-danger">Change</button>
    </div>
    </div>
    </>
  )
}

export default Clr