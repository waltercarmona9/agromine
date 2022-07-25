import React from 'react'
import img1 from '../static/combine 1.png'
import img2 from '../static/combine2 1.png'
import img3 from '../static/correcte drone 1.png'
import img4 from '../static/corrected drone 2 1.png'
import Navbar from '../components/Navbar';
import '../styles/Gallary.css'
const Gallary = () => {
  return (
    <>
    <Navbar/>
    <div className="gallary">
        <h1>Gallary</h1>
        <div className="imgflex">
            <img src={img1}></img>
            <img src={img4}></img>
        </div>
        <div className="imgflex">
            <img src={img2}></img>
        <img src={img3}></img>
        </div>
    </div>
    </>
  )
}

export default Gallary