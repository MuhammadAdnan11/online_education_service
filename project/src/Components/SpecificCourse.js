import React from 'react'
import SpecificCourseCard from './SpecificCourseCard'
import Navbar from './Navbar'
import Footer from './Footer';
import { Link } from 'react-router-dom';



const coursesbackimage=require('../AssetsFolder/AllCourses/allcoursespagebg.png');
const coursesbg={
    width: '100%',
    height: '35vh',
    backgroundImage: `url(${coursesbackimage})`,
    backgroundSize:'cover'
};



const SpecificCourse = () => {
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
        <span className='text-white'> /</span>
        <span className='text-white'><Link to="/specificCourses">Selected Course</Link></span>


        </div>

        </div>
      </div>

      </div>

      <SpecificCourseCard 
       

      />

      <Footer/>

    </>
  )
}

export default SpecificCourse