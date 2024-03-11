import React from 'react'
import './Nave.css'
import { Link } from 'react-router-dom'

const Nave = () => {
  return (
    <>
     <div id='nav'>
      <div className='fir'>
      <h1><b>FOOD</b> <span>COURT</span></h1>

      </div>
      <div id='lo'>
      <Link to="/Home" className='d'>HOME</Link>
  <Link to="/Login" className='d'>LOGIN</Link>
  <Link to="/Signup" className='d'>SIGN UP</Link> 
  <Link to="/Adminedit" style={{backgroundColor:'antiquewhite',padding:'10px 20px',borderRadius:'10px'}} className='d'>ADD PRODUCT</Link>
  </div>
    
  </div>
    </>
  )
}

export default Nave