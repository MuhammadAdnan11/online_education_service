import React from 'react'
import "./LoginForm.css"


const LoginForm = () => {
  return (
    <>
    
		<div class="wrapper">
        <div class="logo">
            <img src="./Images/Registeration/signIn.png" alt=""/>
        </div>
        <div class="text-center mt-4 name">
            User Login
        </div>
        <form class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username"/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"/>
            </div><br/>
            <div className="d-flex justify-content-between">
            <div className=" d-flex flex-row gap-2">
            <input type="checkbox" /><span>Remember me</span>
            </div>
            <a href="#">Lost your password?</a>
            </div>
            <button class="btn mt-3">Login</button>
        </form>
        <div class="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="#">Sign up</a>
        </div>
    </div>
	

    </>
  )
}

export default LoginForm