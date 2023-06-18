import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { EventsCard } from './EventsCard';
// import evt1 from "../Images/EventsDataApi/event-single-1.jpg";
import evt1 from "../AssetsFolder/EventsDataApi/event-single-1.jpg";
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
      {/* Events Cards */}
      <div className='container-fluid mt-5'>
        <div className='row bg-primary'>
          <div className='col-md-5'>
            <EventsCard
            id="1"
            image={evt1}
            
            
            />
          </div>
          <div className='col-md-5'>

          </div>
        </div>
      </div>

      </>
  )
}
export default Events;