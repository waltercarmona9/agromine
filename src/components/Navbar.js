import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
                <li><NavLink
                to='/'
                className='nav-links' 
                >Home</NavLink></li>
                <li><NavLink
                to='/prices'
                className='nav-links'
              >Pricing</NavLink></li>
              <li><NavLink
                to='/gallary'
                className='nav-links' 
              >Gallary</NavLink></li>
              <button><NavLink
                to='/signup'
                className='nav-links' 
            >Sign Up</NavLink></button>
            <li><NavLink
                to='/login'
                className='nav-links' 
            >Log In</NavLink></li>
                </ul>
        </nav>
        </>
  )
}
export default Navbar