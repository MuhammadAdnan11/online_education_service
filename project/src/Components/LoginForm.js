import React, { useState } from 'react'
import "./LoginForm.css"
import {useNavigate, Link } from 'react-router-dom'
import {MdOutlineEmail} from "react-icons/md";

import axios from 'axios';


const LoginForm = () => {
     const history = useNavigate();
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

    async function Submit(e){
        e.preventDefault();

        try{
          await axios.post("http://localhost:8000/login",{
            email,password
          })
          .then(res=>{
            if(res.data=="exist"){
              history("/admin")
            }

            else if(res.data=="notexist"){
                alert("user is not signed up ")
              }
          })
          .catch(e=>{
            alert("wrong details")
            console.log(e)
          })
        }
        catch(e){
        console.log(e)
        }
    }

  return (
    <>
    
		<div class="wrapper">
        <div class="logo">
            <img src="./Images/Registeration/signIn.png" alt=""/>
        </div>
        <div class="text-center mt-4 name">
            User Login
        </div>
        <form class="p-3 mt-3" action="/login" method='post'>
            <div class="form-field d-flex align-items-center">
            <span><MdOutlineEmail/></span>
                <input type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
            </div><br/>
            <div className="d-flex justify-content-between">
            <div className=" d-flex flex-row gap-2">
            <input type="checkbox" /><span>Remember me</span>
            </div>
            <a href="#">Lost your password?</a>
            </div>
            <button type='submit' class="btn mt-3" onClick={Submit}>Login</button>
        </form>
        <div class="text-center fs-6">
            <a href="#">Forget password?</a> or <Link to="/register">Sign up</Link>
        </div>
    </div>
	

    </>
  )
}

export default LoginForm

