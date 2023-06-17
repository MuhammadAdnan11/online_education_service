import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const gallerybackimage=require('../AssetsFolder/Gallery/title-area-background.png');
const gallerybg={
  width: '100%',
    height: '35vh',
  backgroundImage: `url(${gallerybackimage})`,
  backgroundSize:'cover'
};



const Events = () => {
  return (
      <>
      <Navbar />
      <div className='container-fluid' style={gallerybg}>

                <div className='container'>
                    <div className='row'>
                    <h1 className='fw-bolder text-white mt-5 pt-3  hcard' >Events Calendar</h1>
                    <div className='d-flex flex-row gap-2'>
                  <span className='text-white'><Link to="/" className="text-white">Home </Link></span> 
                {/* <span className='text-white'> /</span>
               <span className='text-white'><Link to="/courses" className="text-white">All Courses</Link></span> */}
              </div>
                    </div>
                    
                </div>
         
            </div>

      </>
  )
}
export default Events;