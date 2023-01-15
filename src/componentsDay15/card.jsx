import React from 'react'
import './card.css'
const Card = (props) => {
    let {id,image,title,desc}=props
  return (
    <>
    <div className='col-lg-3 col-md-4 col-sm-6'>
    <div className='container'>
        <div className='back'>
        <img src={image} alt="Loading..." />
        <div className='container' id='para'>
        <h3>{id}</h3>
        <h4>{title}</h4>
        </div>
        <p>{desc}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card