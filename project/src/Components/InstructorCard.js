import React from "react";
import "./Instructor.css";
import Card from 'react-bootstrap/Card';
import {BiTimeFive} from "react-icons/bi"
import {FiMapPin} from "react-icons/fi"



const InstructorCard = (props) => {
  return (
    <>
      {/* <div className="container ">
        <div className="row d-flex gap-4 flex-row pb-4 justify-content-center ">
          <div className="col d-flex justify-content-evenly ">
              <div className="text-center pt-4">
              <a href="#">
                <img src={props.imginsrc} style={{ width: 80, height: 80 }} />
              </a>
              </div>
            <div
              className="col"
              style={{ height: "110px", width: "240px" }}
            >
              <a href="#">
                              <h5 className="fw-bold">{props.inname }</h5>
              </a>
                          <p>{ props.instr}</p>
            </div>
          </div>
        </div>
      </div> */}
          

          <Card style={{ width: '20rem',height:"102px" }} className="d-flex flex-row HoverDiv" id="intShadow">
              <Card.Img variant="top" src={props.imginsrc} className="text-center mt-2" style={ {width:"80px", height:"80px"}} />
      
      <div className="d-block ms-3 mt-3" style={{height:"120px", width:"200px"}}>
        <Card.Title className="fw-bolder iconcolor1">{props.inname}</Card.Title>
        <div className="mt-1">
        <span> {props.instr}</span><br/>
        
        </div>
        </div>
    </Card>


    </>
  );
};

export default InstructorCard;
