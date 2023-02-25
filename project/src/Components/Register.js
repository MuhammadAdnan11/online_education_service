import React from 'react'
import "./LoginForm.css"
import {MdOutlineEmail} from "react-icons/md";

const Register = () => {
  return (
    <>

<div class="wrapper">
        <div class="logo">
            <img src="./Images/Registeration/register2.png" alt=""/>
        </div>
        <div class="text-center mt-4 name">
            User Registration
        </div>
        <form class="p-3 mt-3 ">
            <div class="form-field d-flex align-items-center ">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username"/>
            </div>

            <div class="form-field d-flex align-items-center">
                <span><MdOutlineEmail/></span>
                <input type="email" name="userEmail" id="userEmail" placeholder="Email"/>
            </div>

            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"/>
            </div>

            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Confirm Password"/>
            </div>
            
            <button class="btn mt-3">Register</button>
        </form>
       
    </div>
	



    </>
    
  )
}

export default Register