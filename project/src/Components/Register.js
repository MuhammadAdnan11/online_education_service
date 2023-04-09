import React ,{useState} from 'react'
import "./LoginForm.css"
import axios from 'axios';
import {MdOutlineEmail} from "react-icons/md";
import {useNavigate} from 'react-router-dom'


const Register = () => {
    const history = useNavigate();

    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [name, setName]= useState('');
    const [cpassword, setCpassword]= useState('');

   

    async function Submit(e){
      
        e.preventDefault();

        try{
          await axios.post("http://localhost:8000/register",{
            email,password,name,cpassword,
            
          })
          .then(res=>{
            if(res.data==="exist"){
                alert("user already exists")
            //   history("/admin")
            }

            else if(res.data==="notexist"){
                history("/login")
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
            <img src="./Images/Registeration/register2.png" alt=""/>
        </div>
        <div class="text-center mt-4 name">
            User Registration
        </div>
        <form class="p-3 mt-3 " action="/signup" method="post">
      
            <div class="form-field d-flex align-items-center ">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" onChange={(e)=>{setName(e.target.value)}}  placeholder="Username"/>
            </div>

            <div class="form-field d-flex align-items-center">
                <span><MdOutlineEmail/></span>
                <input type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
            </div>

            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
            </div>

            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="cpassword" name="cpassword" id="cpassword" onChange={(e)=>{setCpassword(e.target.value)}}  placeholder="Confirm Password"/>
            </div>
            
          <button type='submit' class="btn mt-3" onClick={Submit}>Register</button>
          
        </form>
       
    </div>
	



    </>
    
  )
}

export default Register































// import React ,{useState} from 'react'
// import "./LoginForm.css"
// import axios from 'axios';
// import {MdOutlineEmail} from "react-icons/md";
// import {useNavigate} from 'react-router-dom'


// const Register = () => {
//     const history = useNavigate();

//     const [email, setEmail]= useState('');
//     const [password, setPassword]= useState('');
//     const [userType, setUserType]= useState('');
//     const [secretKey, setSecretKey]= useState('');

//     async function Submit(e){
//       if(userType=="Admin" && secretKey!="Samikhan"){
//         e.preventDefault();
//         alert("Invalid admin")
       
//       }else{
       
//         e.preventDefault();

//         try{
//           await axios.post("http://localhost:8000/register",{
//             email,password
            
//           })
//           .then(res=>{
//             if(res.data=="exist"){
//                 alert("user already exists")
//             //   history("/admin")
//             }

//             else if(res.data=="notexist"){
//                 history("/login")
//               }
//           })
//           .catch(e=>{
//             alert("wrong details")
//             console.log(e)
//           })
//         }
//         catch(e){
//         console.log(e)
//         }
//       }
        
//     }

//   return (
//     <>

// <div class="wrapper">
//         <div class="logo">
//             <img src="./Images/Registeration/register2.png" alt=""/>
//         </div>
//         <div class="text-center mt-4 name">
//             User Registration
//         </div>
//         <div>
//         Register As
//           <input type="radio" name="userType" value="User" onChange={(e)=>setUserType(e.target.value)} />User
//           <input type="radio" name="userType" value="Admin" onChange={(e)=>setUserType(e.target.value)} />Admin

//         </div>
//         <form class="p-3 mt-3 " action="POST">
//         {userType=="Admin"?
//            <div class="form-field d-flex align-items-center">
//             <span><MdOutlineEmail/></span>
//                 <input type="text" name="text" id="text" onChange={(e)=>{setSecretKey(e.target.value)}} placeholder="Secrete Key"/>
//             </div>
//                : null }
        
//             <div class="form-field d-flex align-items-center ">
//                 <span class="far fa-user"></span>
//                 <input type="text" name="userName" id="userName" placeholder="Username"/>
//             </div>

//             <div class="form-field d-flex align-items-center">
//                 <span><MdOutlineEmail/></span>
//                 <input type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
//             </div>

//             <div class="form-field d-flex align-items-center">
//                 <span class="fas fa-key"></span>
//                 <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
//             </div>

//             <div class="form-field d-flex align-items-center">
//                 <span class="fas fa-key"></span>
//                 <input type="password" name="password" id="pwd" placeholder="Confirm Password"/>
//             </div>
            
//             <button type='submit' class="btn mt-3" onClick={Submit}>Register</button>
//         </form>
       
//     </div>
	



//     </>
    
//   )
// }

// export default Register




