import React from 'react'
import './Signup.css'
import { useState } from 'react';

const Signup = () => {
  const [username,setname ] =useState('');
  const [ email,setemail ] =useState('');
  const [ password,setpassword ] =useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch ('http://localhost:5000/api/users',{
        method:'POST',
        headers: {
          'Content-Type':'application/json',
        },
          body:JSON.stringify({username,email,password }),
        
      });
      if (response.ok) {
        console.log('User Created Successfully');
        alert('Users Created Successfully');
        setname('');
        setemail('');
        setpassword('');
      }
      else{console.log('Failed to create usr');
    alert('Failed to create user');
  }
    }catch (error) {
      console.error('Error',error);
      alert('Error occured');
    }
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setemail(newEmail);
  };


  return (
    <>
    <body style={{backgroundColor:'rgb(248, 244, 239)'}}>
    <div class="container">
    <form action="" method="post" class="sign-form" id="sign-form" onSubmit={handleSubmit} autocomplete="on">
      <h1 class="form-title">Sign Up</h1>
      <p class="form-caption">See your growth and get consulting support!</p>
      <button class="google-sign-btn"><i class="fa fa-google"></i> Sign up with Google</button>

      <br></br>

      <div class="google-guide-container">
        <div class="hr-left"></div>
        <p class="guide-google">or Sign up with Email</p>
        <div class="hr-right"></div>
      </div>

      <label for="username">Name<span class="star-required">*</span></label>
      <input type="text" name="username" id="username" placeholder="Name" value={username} onChange={(e) =>setname(e.target.value)} autofocus required />

      <label for="email">Email<span class="star-required">*</span></label>
      <input type="email" name="email" id="email" placeholder="mail@website.com" value={email} onChange={handleEmailChange} required />

      <label for="password">Password<span class="star-required">*</span></label>
      <input type="password" name="password" id="password" placeholder="Min. 8 character" value={password} onChange={(e) =>setpassword(e.target.value)} required />

      <br></br>

      <input type="checkbox" name="terms-agree" id="terms-agree" required />
      <p class="sentence-agree">I agree to the <a href="">Terms & Conditions</a></p>

      <input type="submit" value="Sign Up" id="submit" />

      <p class="have-account-line">Already have an Account? <a href="/Login">Sign in</a></p>

      <p class="info">&copy;2024 Felix All rights reserved.</p>
    </form>
  </div></body>
    </>
  )
}

export default Signup