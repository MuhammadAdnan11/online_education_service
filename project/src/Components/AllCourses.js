import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import "./AllCourses.css"
import {CiStar} from "react-icons/ci";
import {IoIosSearch} from "react-icons/io";




const coursesbackimage=require('../AssetsFolder/AllCourses/allcoursespagebg.png');
const coursesbg={
    width: '100%',
    height: '35vh',
    backgroundImage: `url(${coursesbackimage})`,
    backgroundSize:'cover'
};


const API_URL ="https://samiullah191014.github.io/MyApi/MyAPI.json";

const AllCourses = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [users, setUsers] = useState([]);



  const getUsers = async () => {
      const response = await fetch(`${API_URL}`);
      const FinalData = await response.json();
      setUsers(FinalData)
      
  }




  useEffect(() => {
      getUsers();
  }, [])


  return (
    <>

    <Navbar/>
      
      <div className='container-fluid ' style={coursesbg}>
      <div className='container'>
        <div className='row'>
        <h1 className='fw-bolder text-white mt-5 pt-3  bgcourses' >All Courses</h1>
        <div className='d-flex flex-row gap-2'>
        <span className='text-white'><Link to="/">Home</Link></span> 
        <span className='text-white'> /</span>
        <span className='text-white'><Link to="/courses">All Courses</Link></span>
        </div>

        </div>
      </div>

      </div>
      

        <Link to="/grid">Grid</Link>
 


<div className="container mt-5 ">
    <br/>
	<div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 ">
                            <form className="card card-sm rounded-pill ">
                                <div className="card-body row no-gutters align-items-center ">
                                    <div className="col-auto ">
                                        <IoIosSearch className='fs-3'/>
                                    </div>
                                    
                                    <div className="col ">
                                        <input className="form-control form-control-sm form-control-borderless  " type="search" onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search for courses"/>
                                    </div>
                
                                </div>
                            </form>
                        </div>
                        
                    </div>
</div>




           

      <div className="container container1">
        
               
               {users.filter((val)=>{
                if (searchTerm == ""){
                    return val 
                }
                else if (val.course.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
               }).map((curElem) => {
                       return (

                           <div className="card_item HoverDiv" key={curElem.id} >
                               <div className="card_inner">
                                   <img src={curElem.image} alt="" />
                                   <div className="userName">{curElem.course}</div>
                                   <div className="userUrl">{curElem.instructor}</div>
                                   
                                   <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                                    lorem quis.</p>
                                    <div className='d-flex flex-row justify-content-between'>
                                    <p className='rating'><CiStar className='fs-5'/>{curElem.Rating} Ratings </p>
                                    <span className='bgspan'>{curElem.price}</span>
                                     </div>
                               </div>

                           </div>
                       )
                   })
               }

           </div>   
           

           
          
        
                

    <Footer/>

</>
  )
}

export default AllCourses;

