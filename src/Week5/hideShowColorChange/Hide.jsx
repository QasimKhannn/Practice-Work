import React from 'react'

const Hide = () => {
let Hide=()=>{
    let paragraph=document.getElementById('para')
    let button=document.getElementById('but')
    
    if(button.innerText==="Hide"){
        paragraph.style.visibility="hidden"
    button.innerText="Show"
    }
    else if(button.innerText==="Show"){
        paragraph.style.visibility="visible"
        button.innerText="Hide"
    }
    else{
        return "Some Error"
    }
}

  return (
    <>
    <p id='para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas et quisquam odit? Itaque dolorum fuga ipsum obcaecati eligendi tempore asperiores, sequi quisquam ut debitis consectetur dicta reiciendis natus beatae perspiciatis.</p>
    <button id='but' onClick={Hide} className="btn btn-dark">Hide</button>
    </>
  )
}

export default Hide