import React from 'react'
import './Props.css'

const Props = (props) => {
    let {type,image,name,age,city,relation,image1,name1,age1,city1,relation1}=props
  return (
    <>
    <div className='main'>
        <h4>{type}</h4>
        <div className='inner'>
            <div className='first' id='same'>
                <img src={image} alt="" />
                <ul>
                  <li>{name}</li>
                  <li>{age}</li>
                  <li>{city}</li>
                  <li>{relation}</li>
                </ul>
            </div>
            <div className='second' id='same'>
            <img src={image1} alt="" />
                <ul>
                  <li>{name1}</li>
                  <li>{age1}</li>
                  <li>{city1}</li>
                  <li>{relation1}</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Props