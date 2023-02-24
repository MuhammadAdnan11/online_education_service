import React from "react";
// import Button from 'react-bootstrap/Button';
import "./error_page.css";
const error_page = () => {
  return (
    <>
      
      <div className="container-fluid  bgimg">
        <div className="container">
          <div className="row align-self-center justify-content-center ">
            <img src="./Images/error-404/404-image.png" alt="" style={{ width: 400, height: 300 }} className="mt-5"></img>
            <p className="text-center text-white fs-3 fw-bolder">Oops, seems you ventured to far out<br/>
              into space. Here's the way back<br/>
              home.</p>
            <di className="text-center">
            <button className="btn btn-primary rounded-pill text-center bg-white text-black">BACK TO HOME</button>
            </di>
          </div>
        
         </div>
      </div>



    </>
  );
};
export default error_page;
