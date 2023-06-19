import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import EventsDataApi from "./EventsDataApi";
import { useParams } from "react-router-dom";
import { GiAlarmClock } from "react-icons/gi";

const coursesbackimage = require("../AssetsFolder/AllCourses/allcoursespagebg.png");
const coursesbg = {
  width: "100%",
  height: "35vh",
  backgroundImage: `url(${coursesbackimage})`,
  backgroundSize: "cover",
};

// Its for fetching data from inst Api file based on id 👇

export const EventSpecific = () => {
  const { EventId } = useParams();
  const thisEvents = EventsDataApi.find((prod) => String(prod.id) === EventId);
  // End

  return (
    <>
      <Navbar />
      {/* banner */}
      <div className="container-fluid " style={coursesbg}>
        <div className="container">
          <div className="row">
            <h1 className="fw-bolder text-white mt-5 pt-3  bgcourses">
              {thisEvents.name}
            </h1>
            <div className="d-flex flex-row gap-2">
              <span className="text-white">
                <Link to="/">Home</Link>
              </span>
              <span className="text-white"> /</span>
              <span className="text-white">
                <Link to="/events">Events</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}

      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-5 mt-5">
            <div className="evspHeading">
              <span>
                {" "}
                <h1> {thisEvents.name}</h1>
              </span>
            </div>
            <div className="mt-3">
              <p>
                {" "}
                <GiAlarmClock />
                {thisEvents.date}
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center" >
          <div className="col-md-5 mt-4">
            <img
              src={thisEvents.image}
              style={{ width: 560, height: 320 }}
            ></img>
          </div>
          <div className="col-md-5 mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7080055318957!2d71.47309257469168!3d34.000033120487174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d910d324a9cf0d%3A0xf2df847901c6501!2sIslamia%20College%20University%20Peshawar!5e0!3m2!1sen!2s!4v1687183593431!5m2!1sen!2s"
              width="560"
              height="320"
            //   style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
