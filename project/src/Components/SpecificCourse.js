import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import productsData from './productsData';
import {TfiTimer} from "react-icons/tfi";
import {TbBellRinging} from "react-icons/tb";
import {CiBookmarkPlus} from "react-icons/ci";
import {BsHandThumbsUp} from "react-icons/bs";
import {AiOutlineStar} from "react-icons/ai";







const coursesbackimage=require('../AssetsFolder/AllCourses/allcoursespagebg.png');
const coursesbg={
    width: '100%',
    height: '35vh',
    backgroundImage: `url(${coursesbackimage})`,
    backgroundSize:'cover'
};



const SpecificCourse = () => {
  const {productId} = useParams()
  const thisProduct = productsData.find(prod =>String(prod.id) === productId)




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

      

      <div className='container marginclass'>
           <div className='row '>
              <div className='col-10 '>

              <div className='d-flex flex-row gap-5 '>
              <h1>{thisProduct.course}</h1>
              <span className='align-self-center bgspan text-white'>{thisProduct.price}</span>
              </div>

              <div className='d-flex flex-row mt-5 gap-5 '>

              <div className='col-2 d-flex flex-row gap-2'>
                <img src={thisProduct.image} alt="" style={{width:70, height:70}} className="circle"/>
                <div className='d-flex flex-column'>
                <span>Instructor:</span>
                 <span className='userUrl'>{thisProduct.instructor}</span>
                </div>
                </div>
                
                <div className='col-2 d-flex flex-column text-center'>
                  <span>Categories: </span>
                  <span className='userUrl'>{thisProduct.categories}</span>
                </div>

                <div className='col-2 d-flex flex-column text-center'>
                  <span>Reviews :</span>
                  <span className='userUrl text-warning fw-bold'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></span>
                </div>

                <div className='col-2 text-center'>
                  <button className='btn btn-info rounded-pill text-white fw-bold buycourse'> Buy Course</button>
                </div>    
                  
              </div>


              <div className='mt-4 '>
                    <img src={thisProduct.image} alt="" className='courseImage'/>
                    </div>

                 </div>



                 <div className='col-2 '>
                 <h5 className=' mt-5'>Course Features</h5>
                 <div className='d-flex flex-column gap-3'>
                 <div className='d-flex flex-row justify-content-between mt-2'>
                  <span><TfiTimer className='fs-4 text-info'/> Duration</span>
                  <span>{thisProduct.duration}</span>
                 </div>

                 <div className='d-flex flex-row justify-content-between'>
                  <span><TbBellRinging className='fs-4 text-info'/> Lectures</span>
                  <span>{thisProduct.lecture}</span>
                 </div>

                 <div className='d-flex flex-row justify-content-between'>
                  <span><CiBookmarkPlus className='fs-4 text-info'/> Quizzes</span>
                  <span>{thisProduct.quizzes}</span>
                 </div>

                 <div className='d-flex flex-row justify-content-between'>
                  <span><BsHandThumbsUp className='fs-4 text-info'/> Pass Percentage</span>
                  <span>{thisProduct.percentage}</span>
                 </div>

                 <div className='d-flex flex-row justify-content-between'>
                  <span><BsHandThumbsUp className='fs-4 text-info'/> Max Retakes</span>
                  <span>{thisProduct.maxRetake}</span>
                 </div>

                 <h5 className='mt-5'>Certification</h5>
                 <p className='mt-3 perDescr'>{thisProduct.certificateDescription}</p>

                 <img src={thisProduct.certificate} alt=""/>

                 </div>

                 </div>

            </div>



         </div>

      <Footer/>

    </>
  )
}

export default SpecificCourse





// import React from "react"
// import {useParams} from "react-router-dom"
// import productsData from "./productsData"

// function SpecificCourse() {
//     const {productId} = useParams()
//     const thisProduct = productsData.find(prod =>String(prod.id) === productId)
    
//     return (
//         <div>
//             <h1>{thisProduct.course}</h1>
//             <p>Price: ${ thisProduct.price}</p>
//             <p>{thisProduct.description}</p>
//         </div>
//     )
// }

// export default SpecificCourse