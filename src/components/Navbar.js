import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../static/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">   
            <div className="farm">
              <a href="/"><img src={logo} alt="Logo" /></a>
          </div>
          <ul className="nav-list">
                <li><Link
                to='/'
                className='nav-links' 
                >Home</Link></li>
                <li><Link
                to='/About'
                className='nav-links'  
              >About</Link></li>
              <li><Link
                to='/Events'
                className='nav-links' 
              >Contact</Link></li>
              <li><Link
                to='/Members'
                className='nav-links' 
            >Login</Link></li>
                </ul>
        </nav>
        </>
  )
}
export default Navbar