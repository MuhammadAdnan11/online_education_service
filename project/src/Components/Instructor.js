import React from "react";
import Navbar from "./Navbar";
import "./Instructor.css";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import img1 from "../AssetsFolder/Instructor/instructor-img-2.jpg";
import img2 from "../AssetsFolder/Instructor/instructor-img-3.jpg";
import img3 from "../AssetsFolder/Instructor/instructor-img-4.jpg";
import Carousel from 'react-bootstrap/Carousel';

import imgbg from "../AssetsFolder/Instructor/play-button.png";
import car1 from "../AssetsFolder/Instructor/carasoul1.png";
import car2 from "../AssetsFolder/Instructor/carasoul2.png";
import car3 from "../AssetsFolder/Instructor/carasoul3.png";

import { BsFacebook,BsTwitter,BsInstagram } from 'react-icons/bs';


const instrbackimage = require("../AssetsFolder/Instructor/become-instructor-video-img-1.png");
const instructorimg = {
  height: "70vh",
  backgroundImage: `url(${instrbackimage})`,
  backgroundSize: "cover",
};

const starimg = require("../AssetsFolder/Instructor/h2-backgoround-3.png");
const starbg = {
//   height: "70vh",
  backgroundImage: `url(${starimg})`,
  backgroundSize: "cover",
};

const Instructor = () => {
  return (
    <>
      <Navbar />

      {/* video */}
      <div className="container-fluid mt-5 mb-5">
        <div className="container ">
          <div className="row-md-12 d-flex justify-content-evenly ">
            <div className="col-md-9 instrvideo mt-5" style={instructorimg}>
              <img src={imgbg} alt="" />
            </div>

            {/* FORM */}
            <div className="col-md-3 mt-5 text-center ps-4">
              <h4 className="fw-bold text-center mt-4">Fill This Form</h4>
              <Form>
                <Form.Group className="mb-3 mt-4" controlId="formBasictext">
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasictext">
                  <Form.Control type="text" placeholder="Phone Number" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your message"
                  />
                </Form.Group>
                <Button
                  className="mt-3  rounded-pill  text-center text-white"
                  type="submit"
                  style={{ width: "70%", height: "70px" }}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>

      {/* Second Part */}
      <div className="container-fluid " style={starbg}>
        <div className="container">
          <h5 className="text-center mt-5">What's New</h5>
          <h1 className="text-center">The Best Tutors in Town</h1>
          <p className="text-center mb-5">
            Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque,
            facilisis vel <br /> mollis vitae, mollis nec ante. Quisque aliquam
            dictum condim.
          </p>

          {/* Card */}

          <div className="row-md-12 d-flex justify-content-evenly pb-5 ">
            <div className="col-md-3 ps-2 mt-4">
              <div className="text-center">
              <a href="#">  <img src={img1} id="cardimg" alt="" /></a>
              <a href="#">  <h5 className="mt-4 fw-bold">Jacke Masito</h5></a>
               
                  <p>Teacher</p>
                
                <p className="text-start"> <small>
                  Donec iaculis mi eget tempus lobortis. Maecenas vitae velit
                  neque. Pellentesque suscipit facilisis sapien. Suspen auctor…</small>
                              </p>
                              <span className="p-2"><a href="#">  <BsTwitter /></a></span>     
                       <span className="p-2"> <a href="#">  <BsFacebook /></a></span>   
                       <span className="p-2" ><a href="#">    <BsInstagram /></a></span>
                              <div>
                                  
                </div>
              </div>
            </div>
            <div className="col-md-3 ps-2 mt-4">
              
              <div className="text-center">
              <a href="#">  <img src={img2} id="cardimg" alt="" /></a>
              <a href="#">  <h5 className="mt-4 fw-bold">Richard Dune</h5></a>
                
                  <p>Teacher</p>
                
                <p className="text-start"> <small>
                  Donec iaculis mi eget tempus lobortis. Maecenas vitae velit
                  neque. Pellentesque suscipit facilisis sapien. Suspen auctor…</small>
                              </p>
                              <span className="p-2"><a href="#">  <BsTwitter /></a></span>     
                       <span className="p-2"> <a href="#">  <BsFacebook /></a></span>   
                       <span className="p-2" ><a href="#">    <BsInstagram /></a></span>
              </div>
              </div>
           
                  <div className="col-md-3 ps-2 mt-4">
                  <div className="text-center">
                  <a href="#">  <img src={img3} id="cardimg" alt="" /></a>
                  <a href="#">  <h5 className="mt-4  fw-bold">Glen Anders</h5></a>
                
                  <p>Teacher</p>
               
                <p className="text-start"> <small>
                  Donec iaculis mi eget tempus lobortis. Maecenas vitae velit
                  neque. Pellentesque suscipit facilisis sapien. Suspen auctor…</small>
                              </p>
                       <span className="p-2"><a href="#">  <BsTwitter /></a></span>     
                       <span className="p-2"> <a href="#">  <BsFacebook /></a></span>   
                       <span className="p-2" ><a href="#">    <BsInstagram /></a></span>
                              </div>
                      </div>
              </div>
                      
          </div>
        
        {/* container end */}
          </div>
    

          {/* Carousel */}
          <div className="container-fluid p-5 bgCarasoul mt-5">
              <div className="container ">
              <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-auto carasoul-img mt-5"
          src={car1} style={{width:"121px",height:"121px"}}
          alt="First slide"
        />
            <h6 className="text-center text-white pt-4 pb-3">
          Donec iaculis mi eget tempus lobortis. Maecenas vitae velit
                  neque. <br/>Pellentesque suscipit facilisis sapien. Suspen auctor
                          </h6>
                          <h3 className="text-center text-white">Cecily Brown</h3>
                          <p className="text-center text-white pb-5">STUDENT</p>
         
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-auto carasoul-img mt-5"
          src={car2}style={{width:"121px",height:"121px"}}
          alt="Second slide"
        />
            <h6 className="text-center text-white pt-4 pb-3">
          Donec iaculis mi eget tempus lobortis. Maecenas vitae velit
                  neque. <br/>Pellentesque suscipit facilisis sapien. Suspen auctor
                          </h6>
                          <h3 className="text-center text-white">John Ewans</h3>
                          <p className="text-center text-white pb-5">STUDENT</p>
         
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-auto carasoul-img mt-5"
          src={car3} style={{width:"121px",height:"121px"}}
          alt="Third slide"
        />
        
          
          <h6 className="text-center text-white pt-4 pb-3">
          Donec iaculis mi eget tempus lobortis. Maecenas vitae velit
                  neque. <br/>Pellentesque suscipit facilisis sapien. Suspen auctor
                          </h6>
                          <h3 className="text-center text-white">First slide label</h3>
                          <p className="text-center text-white pb-5">STUDENT</p>
        
      </Carousel.Item>
    </Carousel>
              </div>
          </div>
          {/* Carasoul Finished */}✔✔✔
          
          {/* Teacher pictures */}👇
          <div className="container-fluid">
              <div className=""></div>
      </div>

      {/* <Footer/> */}
    </>
  );
};
export default Instructor;
