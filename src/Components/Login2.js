import React from 'react'
import './Login2.css'
//import { emailValidator, passwordValidator } from '../Components/Validator';
import { useNavigate } from "react-router-dom";

const Login2 = () => {
    const history = useNavigate()

    const [input, setInput] = React.useState({ email:'', password:''});

    const [errorMessage, seterrorMessage] = React.useState('');
    const [successMessage, setsuccessMessage] = React.useState('');

    const handleChange = e => {
        setInput({ ...input, [e.target.name]: e.target.value});
    }; 

    const emailValidator = email => {
        const emailRegex = /^[^\s@]+@[^\s@]+$/;
        return emailRegex.test(email)
    }
    const passwordValidator = password => {
        const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        return passwordRegex.test(password)
    }

    const formSubmitter = e => {
        e.preventDefault();
        setsuccessMessage('');
        if (!emailValidator(input.email))return seterrorMessage('please enter valid id');

        
   // setsuccessMessage('successfully validated');
   console.log(input.email)
if(input.email !== 'adm@a.com' || input.password !== '123@123')return seterrorMessage('invalid email or password id');

localStorage.setItem('auth', true)
history('/Adminedit')

    } ;


    
  return (
    <>
   <div>
			<div className="limiter" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
				<div className="container-login100" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}>
					<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
						<form className="login100-form validate-form" onSubmit={formSubmitter}>
							<span className="login100-form-title p-b-49"><h1> Admin Login</h1></span><br></br>
							{errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
							{successMessage.length > 0 && (
								<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
							)}
							<div className="wrap-input100 validate-input m-b-23" data-validate="email is required">
								<span className="label-input100">Email</span><br></br>
								<input
									className="input100"
									type="text"
									name="email"
									style={{width:'100%',}}
									placeholder="Type your username"
									onChange={handleChange}
								/><br></br><br></br>
								<span className="focus-input100" data-symbol="" />
							</div>
							<div className="wrap-input100 validate-input" data-validate="Password is required">
								<span className="label-input100">Password</span><br></br>
								<input
									className="input100"
									type="password"
									name="password"
									style={{width:'100%',}}
									placeholder="Type your password"
									onChange={handleChange}
								/>
								<span className="focus-input100" data-symbol="" />
							</div>
							<div className="text-right p-t-8 p-b-31">
								<a href="#">Forgot password?</a>
							</div><br></br><br></br>
							<div className="container-login100-form-btn">
								<div className="wrap-login100-form-btn">
									<div className="login100-form-bgbtn" />
									<button className="login100-form-btn" style={{backgroundColor:'skyblue',padding:'10px 20px',marginLeft:'100px',borderRadius:'10px'}}>Login</button>
								</div>
							</div>
						{/* 	<div className="txt1 text-center p-t-54 p-b-20">
								<span>Or Sign Up Using</span>
							</div>
							<div className="flex-c-m">
								<a href="#" className="login100-social-item bg1">
									<i className="fa fa-facebook" />
								</a>
								<a href="#" className="login100-social-item bg2">
									<i className="fa fa-twitter" />
								</a>
								<a href="#" className="login100-social-item bg3">
									<i className="fa fa-google" />
								</a>
							</div> */}
							{/* <div className="flex-col-c p-t-155">
                <span className="txt1 p-b-17">Or Sign Up Using</span>
                <a href="#" className="txt2">
                  Sign Up
                </a>
              </div> */}
						</form>
					</div>
				</div>
			</div>
			<div id="dropDownSelect1" />
		</div>
    </>
  )}

export default Login2