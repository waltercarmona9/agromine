import '../styles/HomePage.css'
import { NavLink } from 'react-router-dom'
import image from '../static/img.png'
import Navbar from '../components/Navbar'
const HomePage = () => {
  return (
    <>
    <Navbar/>
    <div className='home'>
        <div className="text">
            <h1>"Redifining the future of Farming"</h1>
            <p>Step into the future with our amazing AI technology!</p>
            <button><NavLink to="/signup" className="white">Sign Up</NavLink></button>
        </div>
        <div className="image">
            <img src={image} />
        </div>
    </div>
    </>
  )
}

export default HomePage