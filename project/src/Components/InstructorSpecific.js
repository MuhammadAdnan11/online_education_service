import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import InstructorDataAPI from './InstructorDataAPI';

const coursesbackimage=require('../AssetsFolder/AllCourses/allcoursespagebg.png');
const coursesbg={
    width: '100%',
    height: '35vh',
    backgroundImage: `url(${coursesbackimage})`,
    backgroundSize:'cover'
};



const InstructorSpecific = () => {
    const {InstructorId} = useParams()
    const thisInstructor = InstructorDataAPI.find(prod =>String(prod.id) === InstructorId)
    return (
        <>
            
            <Navbar/>
        {/* banner */}
<div className='container-fluid ' style={coursesbg}>
   <div className='container'>
     <div className='row'>
     <h1 className='fw-bolder text-white mt-5 pt-3  bgcourses' >{thisInstructor.name}</h1>
     <div className='d-flex flex-row gap-2'>
     <span className='text-white'><Link to="/">Home</Link></span> 
     <span className='text-white'> /</span>
     <span className='text-white'><Link to="/instructor">Instructor</Link></span>
     <span className='text-white'> /</span>
     <span className='text-white'><Link to="/specificCourses">{thisInstructor.profession}</Link></span>


     </div>

     </div>
   </div>

   </div>  
        {/* Banner End */}

      <div>{ thisInstructor.experience1h1}</div>
        
        </>
      
  )
}

export default InstructorSpecific