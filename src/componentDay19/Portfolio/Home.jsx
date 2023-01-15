import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    {/* ____________________________________Home____________________________________ */}
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1>Qasim Malik</h1>
                            <p>I am a passionate <u>MERN stack Developer</u> from Rawalpindi</p>
                            <div className="container menu">
                                <ul>
                                    <li><a href="...">Home</a></li>
                                    <li><a href="...">Portfolio</a></li>
                                    <li><a href="...">Experience</a></li>
                                    <li><a href="...">About</a></li>
                                    <li><a href="...">Contact</a></li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home