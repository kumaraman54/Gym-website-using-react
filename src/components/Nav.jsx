import React from 'react'
import { Link } from 'react-router-dom'
import './styles/navbar.css'

const Nav = () => {
  return (
    <>
    <div className='app'>
    
    <div className='head'>
    <div className='logo'>
   <Link to="/"><img src='fit.webp' alt='here'></img></Link> 
    
   <Link to="/"><h1>UPLINE</h1></Link>
    <Link to="/"><h2>Fitness</h2></Link>
    </div>


    <div className='compo'>
        <ul>
            <li><Link to="Membership">Membership</Link></li>
            <li><Link to="Blog">Blog</Link></li>
            <li><Link to="Gallery">Gallery</Link></li>
            <li><Link to="Signup">Signup</Link></li>
            <li></li>
        </ul>
    </div>
    </div>
    </div>
    </>
  )
}

export default Nav