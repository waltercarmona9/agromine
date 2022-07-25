import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/Login.css'
import logo from '../static/white logo.png'
import { NavLink } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()

    const navigate = useNavigate()

    const submit = () => {
        fetch('http://ordinapi.hailcore.club/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email:email, pass:pass})
        })
        .then(res => res.json())
        .then(data => {
            if(data.user){
                if(data.user.user_metadata.admin){
                    localStorage.setItem('session', data.user.email)
                    localStorage.setItem('admin', true)
                    navigate('/admin')
                }
                else {
                    localStorage.setItem('session', data.user.email)
                    localStorage.setItem('admin', false)
                    navigate('/')
                }
            }
            else{console.log(data)}
            
        })
    }

    if(!localStorage.getItem('session')){
        return (
                        <>

                        <div className="login">
                            <div className="flexo">
                           <h1>Don't have an account?</h1>
                           <button><NavLink to="/signup" className="bhai">Sign Up</NavLink></button>
                            </div>
                            <div className="main">
                                <div className="content">
                                    <div className="headings">
                                <img src={logo} alt="" />
                                <h1>Grow up your buissness now, Welcome Back!</h1>
                                <p>For any issues please contact farmAI@gmail.com</p>
                                    </div>
                                <div className="form">
                                <input type="email" placeholder="Enter your Email" onChange={val=>setEmail(val.target.value)}/>
                            <input type="password" placeholder="Enter your Password" onChange={val => setPass(val.target.value)}/>
                            <button type='submit' onClick={submit}>Submit</button>
                                </div>
                                </div>
                            </div>
                        </div>

                        </>
                    
        )
    }
    else{
        if(localStorage.getItem('admin') == 'true'){window.location = '/'}
        else{window.location = '/'}
    }
}

export default Login
