import React from "react";
import Button from 'react-bootstrap/Button';
import "./error_page.css";
const error_page = () => {
  return (
    <>
      <div className="error_pic">
        <img src="./Images/error-404/404-background.png" alt="" />
        <div className="icon">
          <img src="./Images/error-404/404-image.png" alt="" />
          <h4>
            Oops, seems you ventured to far out
            <br /> into space. Here's the way back<center> home.</center>
          </h4>
              </div>
              <div className="button">
              <Button variant="primary rounded-pill">BACK TO HOME</Button>
        </div>
      </div>
    </>
  );
};
export default error_page;
