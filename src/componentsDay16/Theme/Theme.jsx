import React from 'react'
import './Theme.css'

const Theme = () => {
let backgroundChange=()=>{
    let button=document.getElementById('but')
    let background=document.getElementById('main')
    let paraText=document.getElementById('text')
    let second=document.getElementById('sec')
    
    if(button.innerText==='Dark Mode'){
        background.style.backgroundColor="black"
        button.innerText="Light Mode"
        paraText.style.color='black'
        second.style.backgroundColor='white'
    }
    else if(button.innerText==='Light Mode'){
        background.style.backgroundColor="white"
        button.innerText='Dark Mode'
        paraText.style.color='white'
        second.style.backgroundColor='black'
    }
    else{
        return "Error"
    }
}
  return (
    <>
    <div id='main' style={{width:"100vw",height:"100vh",backgroundColor:"white"}}>
        <div className='first'>
        <h1>LOGO</h1>
        <button id='but' onClick={backgroundChange} className="btn btn-dark">Dark Mode</button>
        </div>
        <div id='sec' className='second'>
        <p id='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perspiciatis, necessitatibus, laudantium eius enim nesciunt, laborum architecto voluptates minima ipsa velit facere! Ex quisquam rem ab temporibus amet omnis facere?</p>
        <button id='but2' className="btn btn-dark">Subscribe</button>
        </div>
    </div>
    </>
  )
}

export default Theme