import React from "react";
import Navbar from "./Navbar";
import "./Instructor.css";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import img1 from "../AssetsFolder/Instructor/instructor-img-2.jpg";
import img2 from "../AssetsFolder/Instructor/instructor-img-3.jpg";
import img3 from "../AssetsFolder/Instructor/instructor-img-4.jpg";
import Carousel from "react-bootstrap/Carousel";

import imgbg from "../AssetsFolder/Instructor/play-button.png";
import car1 from "../AssetsFolder/Instructor/carasoul1.png";
import car2 from "../AssetsFolder/Instructor/carasoul2.png";
import car3 from "../AssetsFolder/Instructor/carasoul3.png";

import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
//  Teacher Pictures👇
import inst1 from "../AssetsFolder/Instructor/instructor-1.png";
import inst2 from "../AssetsFolder/Instructor/instructor-2.png";
import inst3 from "../AssetsFolder/Instructor/instructor-3.png";
import inst4 from "../AssetsFolder/Instructor/instructor-4.png";
import inst5 from "../AssetsFolder/Instructor/instructor-5.png";
import inst6 from "../AssetsFolder/Instructor/instructor-6.png";
import inst7 from "../AssetsFolder/Instructor/instructor-7.png";
import inst8 from "../AssetsFolder/Instructor/instructor-8.png";
import inst9 from "../AssetsFolder/Instructor/instructor-11.png";


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
           <a href="#"  > <img src={imgbg} alt="" className="d-flex imgplyIcon" /></a>
            </div>

            {/* FORM */}
            <div className="col-md-3 mt-5 text-center inst-form-bg">
              <h4 className="fw-bold text-center mt-4">Fill This Form</h4>
              <Form className="p-3">
                <Form.Group className="mb-3 mt-4 formfont" controlId="formBasictext">
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3 formfont" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 formfont" controlId="formBasictext">
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
                  className="mt-3  rounded-pill  text-center text-white fw-bold" id="instformbtn"
                  type="button"
                  style={{ width: "70%", height: "60px" }}
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
          <h5 className="text-center mt-5 inst-sec-heading">What's New</h5>
          <h1 className="text-center fw-bold">The Best Tutors in Town</h1>
          <p className="text-center mb-5">
            Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque,
            facilisis vel <br /> mollis vitae, mollis nec ante. Quisque aliquam
            dictum condim.
          </p>

          {/* Card */}

          <div className="row-md-12 d-flex justify-content-evenly pb-5 instbox">
            <div className="col-md-3 ps-2 mt-4">
              <div className="text-center">
                <a href="#">
                  {" "}
                  <img src={img1} id="cardimg" alt="" />
                </a>
                <a href="#">
                  {" "}
                  <h5 className="mt-4 fw-bold">Jacke Masito</h5>
                </a>

                <p>Teacher</p>

                <p className="text-start">
                  {" "}
                  <small>
                    Donec iaculis mi eget tempus lobortis. Maecenas vitae velit
                    neque. Pellentesque suscipit facilisis sapien. Suspen
                    auctor…
                  </small>
                </p>
                <span className="p-2">
                  <a href="#">
                    {" "}
                    <BsTwitter />
                  </a>
                </span>
                <span className="p-2">
                  {" "}
                  <a href="#">
                    {" "}
                    <BsFacebook />
                  </a>
                </span>
                <span className="p-2">
                  <a href="#">
                    {" "}
                    <BsInstagram />
                  </a>
                </span>
                <div></div>
              </div>
            </div>
            <div className="col-md-3 ps-2 mt-4">
              <div className="text-center">
                <a href="#">
                  {" "}
                  <img src={img2} id="cardimg" alt="" />
                </a>
                <a href="#">
                  {" "}
                  <h5 className="mt-4 fw-bold">Richard Dune</h5>
                </a>

                <p>Teacher</p>

                <p className="text-start">
                  {" "}
                  <small>
                    Donec iaculis mi eget tempus lobortis. Maecenas vitae velit
                    neque. Pellentesque suscipit facilisis sapien. Suspen
                    auctor…
                  </small>
                </p>
                <span className="p-2">
                  <a href="#">
                    {" "}
                    <BsTwitter />
                  </a>
                </span>
                <span className="p-2">
                  {" "}
                  <a href="#">
                    {" "}
                    <BsFacebook />
                  </a>
                </span>
                <span className="p-2">
                  <a href="#">
                    {" "}
                    <BsInstagram />
                  </a>
                </span>
              </div>
            </div>

            <div className="col-md-3 ps-2 mt-4">
              <div className="text-center">
                <a href="#">
                  {" "}
                  <img src={img3} id="cardimg" alt="" />
                </a>
                <a href="#">
                  {" "}
                  <h5 className="mt-4  fw-bold">Glen Anders</h5>
                </a>

                <p>Teacher</p>

                <p className="text-start">
                  {" "}
                  <small>
                    Donec iaculis mi eget tempus lobortis. Maecenas vitae velit
                    neque. Pellentesque suscipit facilisis sapien. Suspen
                    auctor…
                  </small>
                </p>
                <span className="p-2">
                  <a href="#">
                    {" "}
                    <BsTwitter />
                  </a>
                </span>
                <span className="p-2">
                  {" "}
                  <a href="#">
                    {" "}
                    <BsFacebook />
                  </a>
                </span>
                <span className="p-2">
                  <a href="#">
                    {" "}
                    <BsInstagram />
                  </a>
                </span>
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
                src={car1}
                style={{ width: "121px", height: "121px" }}
                alt="First slide"
              />
              <h6 className="text-center text-white pt-4 pb-3">
                Donec iaculis mi eget tempus lobortis. Maecenas vitae velit
                neque. <br />
                Pellentesque suscipit facilisis sapien. Suspen auctor
              </h6>
              <h3 className="text-center text-white">Cecily Brown</h3>
              <p className="text-center text-white pb-5">STUDENT</p>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-auto carasoul-img mt-5"
                src={car2}
                style={{ width: "121px", height: "121px" }}
                alt="Second slide"
              />
              <h6 className="text-center text-white pt-4 pb-3">
                Donec iaculis mi eget tempus lobortis. Maecenas vitae velit
                neque. <br />
                Pellentesque suscipit facilisis sapien. Suspen auctor
              </h6>
              <h3 className="text-center text-white">John Ewans</h3>
              <p className="text-center text-white pb-5">STUDENT</p>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-auto carasoul-img mt-5"
                src={car3}
                style={{ width: "121px", height: "121px" }}
                alt="Third slide"
              />

              <h6 className="text-center text-white pt-4 pb-3">
                Donec iaculis mi eget tempus lobortis. Maecenas vitae velit
                neque. <br />
                Pellentesque suscipit facilisis sapien. Suspen auctor
              </h6>
              <h3 className="text-center text-white">First slide label</h3>
              <p className="text-center text-white pb-5">STUDENT</p>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      {/* Carasoul Finished ✔✔✔ */}
      {/* Teacher pictures 👇 */}
      <div className="container-fluid">
        <div className="container mt-5 mb-5 ">
          
            <div className="text-center mb-5">
              <h5 className="mt-5 pt-5 fw-bold inst-sec-heading">Our Difference</h5>
              <h1 className="mt-3 fw-bold">Top Teachers in Every Field</h1>
              <p className="mt-2 pic-parag">
                Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque,
                facilisis vel<br/> mollis vitae, mollis nec ante. Quisque aliquam
                dictum condim.
              </p>
                  </div> 
        
        {/* teacher Pictures👇 */}
             <div className="row  d-flex gap-4 flex-row pb-4 justify-content-center ">
                      <div className="col d-flex justify-content-evenly ">
                         <div className="text-center pt-4"> <a href="#"><img src={inst1} style={{ width: 80, height: 80 }} /></a></div>
                          <div className="ps-3  p-4 teac-card-bor" style={{height:"110px", width:"240px"}}>
                             <a href="#" ><h5 className="fw-bold">Jacke Masatie</h5></a>
                              <p>STUDENT</p>
                          </div>

                          <div className="text-center pt-4"><a href="#"> <img src={inst2} style={{ width: 80, height: 80 }} /></a></div>
                          <div className="ps-3  p-4 teac-card-bor" style={{height:"110px", width:"240px"}}>
                             <a href="#" ><h5 className="fw-bold">Jacke Masatie</h5></a>
                              <p>STUDENT</p>
                          </div>

                          <div className="text-center pt-4"><a href="#"> <img src={inst3} style={{ width: 80, height: 80 }} /></a></div>
                          <div className="ps-3  p-4 teac-card-bor" style={{height:"110px", width:"240px"}}>
                             <a href="#" ><h5 className="fw-bold">Jacke Masatie</h5></a>
                              <p>STUDENT</p>
                          </div>

                          
                      </div> 

              <div className="col d-flex justify-content-evenly ">
                         <div className="text-center pt-4"><a href="#"> <img src={inst3} style={{ width: 80, height: 80 }} /></a></div>
                          <div className="ps-3  p-4 teac-card-bor" style={{height:"110px", width:"240px"}}>
                             <a href="#" ><h5 className="fw-bold">Jacke Masatie</h5></a>
                              <p>STUDENT</p>
                          </div>

                          <div className="text-center pt-4"><a href="#"> <img src={inst5} style={{ width: 80, height: 80 }} /></a></div>
                          <div className="ps-3  p-4 teac-card-bor" style={{height:"110px", width:"240px"}}>
                             <a href="#" ><h5 className="fw-bold">Jacke Masatie</h5></a>
                              <p>STUDENT</p>
                          </div>

                          <div className="text-center pt-4"><a href="#"> <img src={inst6} style={{ width: 80, height: 80 }} /></a></div>
                          <div className="ps-3  p-4 teac-card-bor" style={{height:"110px", width:"240px"}}>
                             <a href="#" ><h5 className="fw-bold">Jacke Masatie</h5></a>
                              <p>STUDENT</p>
                          </div>

                          
                      </div> 

              <div className="col d-flex justify-content-evenly ">
                         <div className="text-center pt-4"><a href="#"> <img src={inst7} style={{ width: 80, height: 80 }} /></a></div>
                          <div className="ps-3  p-4 teac-card-bor" style={{height:"110px", width:"240px"}}>
                             <a href="#" ><h5 className="fw-bold">Jacke Masatie</h5></a>
                              <p>STUDENT</p>
                          </div>

                          <div className="text-center pt-4"><a href="#"> <img src={inst8} style={{ width: 80, height: 80 }} /></a></div>
                          <div className="ps-3  p-4 teac-card-bor" style={{height:"110px", width:"240px"}}>
                             <a href="#" ><h5 className="fw-bold">Jacke Masatie</h5></a>
                              <p>STUDENT</p>
                          </div>

                          <div className="text-center pt-4"><a href="#"> <img src={inst9} style={{ width: 80, height: 80 }} /></a></div>
                          <div className="ps-3  p-4 teac-card-bor" style={{height:"110px", width:"240px"}}>
                             <a href="#" ><h5 className="fw-bold">Jacke Masatie</h5></a>
                              <p>STUDENT</p>
                          </div>

                          
              </div>        
                          
           
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Instructor;