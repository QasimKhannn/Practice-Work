import React,{useState} from 'react'
import './Cars.css'
// import cards from './car'

const Cars = () => {
    // const [car,setCar]=useState(cards);
    const [model,setModel]=useState('')
    const [color,setColor]=useState('')
    const [price,setPrice]=useState('')
    const [name,setName]=useState('')
    const [image,setImage]=useState('')

    const [car,setCar]=useState([])
    const handleChange=(e)=>{
    e.preventDefault()
    let carData={id:Math.floor(Math.random()*1000),name:name,color:color,model:model,price:price,image:image}
      setCar([...car,carData])
    }
    console.log(car)
    const handleAll=()=>{
        setCar(car)
    }
    const handleRed=()=>{
       const dat=car.filter((car)=>car.color==="Red");
       setCar(dat);
    }
    const handleBlue=()=>{
        const dat=car.filter((car)=>car.color==="Blue");
        setCar(dat);
     }
     const handleGray=()=>{
        const dat=car.filter((car)=>car.color==="Gray");
        setCar(dat);
     }
     const handleBlack=()=>{
        const dat=car.filter((car)=>car.color==="Black");
        setCar(dat);
     }
     const handleGreen=()=>{
        const dat=car.filter((car)=>car.color==="Green");
        setCar(dat);
     }
     const handleYellow=()=>{
        const dat=car.filter((car)=>car.color==="Yellow");
        setCar(dat);
     }
  return (
    <>
        <div className="main">

            {/* Header */}
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <h1>LOGO</h1>
                        </div>
                        <div className="col-9" id='menu'>
                            <ul>
                                <li><a href="/">CARS</a></li>
                                <li><a href="/">UPLOAD</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* SideBar and section*/}
            <div className="section">
                <div className="row">
                    <div className="col-3" id='sidebar'>
                        <div className="container">
                            <button className='btn btn-dark' onClick={handleAll}>ALL</button>
                        </div>
                            <div className="container">
                            <div className="colors">
                            <h6>COLORS</h6>
                            <div className="row">
                            <div className="col-12">
                                <button className='btn btn-dark' onClick={handleRed}>RED</button>
                                <button className='btn btn-dark'onClick={handleBlue}>Blue</button>
                                <button className='btn btn-dark' onClick={handleGray}>GRAY</button>
                                <button className='btn btn-dark' onClick={handleGreen}>GREEN</button>
                            </div>
                            <div className="col-12">
                                <button className='btn btn-dark'>PINK</button>
                                <button className='btn btn-dark' onClick={handleBlack}>BLACK</button>
                                <button className='btn btn-dark'>SILVER</button>
                                <button className='btn btn-dark' onClick={handleYellow}>YELLOW</button>
                            </div>
                            </div>
                            </div>
                            </div>
                            <div className="container">
                            <div className="models">
                                <h6>MODELS</h6>
                                <button className='btn btn-dark'>1999</button>
                                <button className='btn btn-dark'>2010</button>
                                <button className='btn btn-dark'>2015</button>
                                <button className='btn btn-dark'>2020</button>
                                <button className='btn btn-dark'>2022</button>
                            </div>
                            </div>
                            <div className="companies container">
                                <h6>COMPANIES</h6>
                                <button className='btn btn-danger'>Audi</button>
                                <button className='btn btn-danger'>BMW</button>
                                <button className='btn btn-danger'>FORD</button>
                                <button className='btn btn-danger'>FROXI</button>
                                <button className='btn btn-danger'>MERCEDES</button>
                                <button className='btn btn-danger'>PRIUS</button>
                                <button className='btn btn-danger'>SWIFT</button>
                            </div>
                            <div className="main1">
                                <div className="upload">
                                    <h4>Car Registeration</h4>
                                    <div className="primary">
                                    <h6>Select Brand</h6>
                                    <select value={name} name="name" onChange={(e)=>{setName(e.target.value)}}>
                                    <option></option>
                                    <option value="Audi">Audi</option>
                                    <option value="BMW">BMW</option>
                                    <option value="FORD">Ford</option>
                                    <option value="Froxi">Froxi</option>
                                    <option value="Mercedes">Mercedes</option>
                                    <option value="Prius">Prius</option>
                                    <option value="Swift">Swift</option>
                                    </select>
                                    <h6>Select Color</h6>
                                    <select value={color} name="color" onChange={(e)=>{setColor(e.target.value)}}>
                                    <option></option>
                                    <option value="Red">Red</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Gray">Gray</option>
                                    <option value="Green">Green</option>
                                    <option value="Pink">Pink</option>
                                    <option value="Black">Black</option>
                                    <option value="Silver">Silver</option>
                                    <option value="Yellow">Yellow</option>
                                    </select>
                                    <label htmlFor="price">Enter Price</label>
                                    <input type="text" id='price' placeholder='Enter Price in $' value={price} onChange={(e)=>{setPrice(e.target.value)}} />
                                    <h6>Select Model</h6>
                                    <select value={model} name="model" onChange={(e)=>{setModel(e.target.value)}}>
                                    <option></option>
                                    <option value="1999">1999</option>
                                    <option value="2010">2010</option>
                                    <option value="2015">2015</option>
                                    <option value="2020">2020</option>
                                    <option value="2022">2022</option>
                                    </select>
                                    <label htmlFor="imageInput">Upload Picture</label>
                                    <input type="file" id='imageInput' onChange={(e)=>{setImage(e.target.files[0])}}/>
                                    <button className='btn btn-dark' onClick={handleChange} >Upload</button>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="col-9" id='items'>
                        <div className="row">
                        {car.map((prop)=>{
                            const {id,image,name,color,price,model}=prop
                            return (
                                <>
                                <div className='col-lg-4 show' key={id}>
                                <div className='container'>
                                    <div className='back'>
                                    <img src={image} alt="Loading..." />
                                    <div className='container'>
                                    <h4>{name}</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 container">
                                            <p>Color : {color}</p>
                                        </div>
                                        <div className="col-6">
                                            <p>Price : {price}</p>
                                        </div>
                                    </div>
                                    <h6>{model}</h6>
                                        </div>
                                    </div>
                                </div>
                                </>
                              )
                            })}
                            </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Cars