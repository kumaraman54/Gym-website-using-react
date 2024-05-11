import React from 'react'
import './styles/signup.css'
const Signup = () => {
  return (
    <div className='vid'>
      <video autoPlay loop muted playsInline className='bg-clip'>
        <source src='vid1.mp4' type='video/mp4'></source>
      </video>
      <div className='sign-box'>
        <span>UPLINE FITNESS</span>
        <div className='para'>
        <span>Sign up</span>
      </div>
      <div className='sign-form'>
        <h2>Email</h2>
        <input type='Email' name='email' id='email'></input>
        <h2>Password</h2>
        <input type='password' name='password' id='password'></input>
      </div>
      <div className='terms'>
        <p>By clicking "Sign in", you agree to our Terms<br></br> and Conditions and consent to our Privacy Policy</p>
      </div>
      <div className='sign-btn'>
        <button>sign in</button>
      </div>
      </div>

     
    </div>
  )
}

export default Signup