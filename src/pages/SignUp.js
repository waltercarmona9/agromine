import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/Login.css'
import logo from '../static/white logo.png'
// import { Link } from 'react-router-dom'
const SignUp = () => {
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()

    const navigate = useNavigate()

    const submit = () => {
        fetch('http://localhost:8000/auth/register', {
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
                    navigate('/login')
                }
                else {
                    localStorage.setItem('session', data.user.email)
                    localStorage.setItem('admin', false)
                    navigate('/login')
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
                           <h1>Aleardy Have an Account?</h1>
                           <button>Log In</button>
                            </div>
                            <div className="main">
                                <div className="content">
                                    <div className="headings">
                                <img src={logo} alt="" />
                                <h1>Level Up with us and increase your production now.</h1>
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

export default SignUp
