import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [ email, setemail ] =useState('');
	const [ password, setpassword ] =useState('');
	const [ loggedIn, setLoggedIn ] =useState(false);
	const navigate = useNavigate();
	const [ isValidEmail, setIsValidEmail ] =useState(true);


	const handleSubmit = async (e) => {
		e.preventDefault();
		
		try {
			console.log(email,password);
			const response = await fetch('http://localhost:5000/api/login',{
				method:'POST',
				headers:{
					'Content-Type':'application/json',
				},
				body: JSON.stringify({email, password}),
			});

			
			if (response.ok) {
				console.log('Login successful');
				alert('Login success');
				navigate('/Home');
			}else{
				console.error('Login failed');
				alert('Loginn failed');
			}
		}catch (error) {
			console.error ('Error:',error);
			alert('Error occured');
		}
	};

	const handleLogin = () => {
		navigate('/target-route');
	};
	const handleEmailChange = (event) => {
		const newEmail = event.target.value;
		setemail(newEmail);
	}

  return (
    <>
  
      <div id='a' style={{backgroundColor:'rgb(245, 239, 233)',height:'100%'}}>
      <main class="main">
	<div class="container">
		<section class="wrapper">
			<div class="heading">
				<h1 class="text text-large">Sign In</h1>
				<p class="text text-normal">New user? <span><a href="/Signup" class="text text-links">Create an account</a></span>
				</p>
			</div>
			<form action="" method="post" name="signin" onSubmit={handleSubmit} class="form">
				<div class="input-control">
					<label for="email" class="input-label" hidden>Email Address</label>
					<input type="email" name="email" id="email" value={email} onChange={handleEmailChange}class="input-field" placeholder="Email Address" required />
				</div>
				<div class="input-control">
					<label for="password" class="input-label" hidden>Password</label>
					<input type="password" name="password" id="password" value={password} onChange={(e) =>setpassword(e.target.value)} class="input-field" placeholder="Password" />
				</div>
				<div class="input-control">
					<a href="#" class="text text-links">Forgot Password</a>
					<input type="submit" name="submit" class="input-submit" onClick={handleSubmit} value="Sign In" />
				</div>
			</form>
			<div class="striped">
				<span class="striped-line"></span>
				<span class="striped-text">Or</span>
				<span class="striped-line"></span>
			</div>
			<div class="method">
				<div class="method-control">
					<a href="#" class="method-action">
						<i class="ion ion-logo-google"></i>
						<span>Sign in with Google</span>
					</a>
				</div>
				<div class="method-control">
					<a href="#" class="method-action">
						<i class="ion ion-logo-facebook"></i>
						<span>Sign in with Facebook</span>
					</a>
				</div>
				<div class="method-control">
					<a href="#" class="method-action">
						<i class="ion ion-logo-apple"></i>
						<span>Sign in with Apple</span>
					</a>
				</div>
			</div>
		</section>
	</div>
</main>
      </div>
      
    </>
  )
}

export default Login