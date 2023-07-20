// import React, { useState, useEffect } from "react";

// const YourCourses = () => {
//   const [courseData, setCourseData] = useState([]);

//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("courseData")) || [];
//     setCourseData(storedData);
//   }, []);

//   const handleUnenroll = (index) => {
//     const updatedData = [...courseData];
//     updatedData.splice(index, 1);
//     setCourseData(updatedData);
//     localStorage.setItem("courseData", JSON.stringify(updatedData));
//   };

//   const handleSuccessfulPayment = (newCourseData) => {
//     const isDuplicate = courseData.some(
//       (data) =>
//         data.image === newCourseData.image &&
//         data.instructor === newCourseData.instructor
//     );

//     if (!isDuplicate) {
//       setCourseData((prevData) => [...prevData, newCourseData]);
//       localStorage.setItem(
//         "courseData",
//         JSON.stringify([...courseData, newCourseData])
//       );
//     }
//   };

//   const uniqueCourses = courseData.filter((data, index, self) => {
//     return (
//       index ===
//       self.findIndex(
//         (d) => d.image === data.image && d.instructor === data.instructor
//       )
//     );
//   });

//   return (
//     <div>
//       <h2>Your Courses</h2>
//       {uniqueCourses.map((data, index) => (
//         <div key={index}>
//           <img src={data.image} alt="Course" />
//           <p>Instructor: {data.instructor}</p>
//           <button onClick={() => handleUnenroll(index)}>Unenroll</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default YourCourses;














// YourCourses.js

import React, { useState, useEffect } from "react";
import "./YourCourses.mod.css";

const YourCourses = () => {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("courseData")) || [];
    setCourseData(storedData);
  }, []);

  const handleUnenroll = (index) => {
    const updatedData = [...courseData];
    updatedData.splice(index, 1);
    setCourseData(updatedData);
    localStorage.setItem("courseData", JSON.stringify(updatedData));
  };

  const handleSuccessfulPayment = (newCourseData) => {
    const isDuplicate = courseData.some(
      (data) =>
        data.image === newCourseData.image &&
        data.instructor === newCourseData.instructor
    );

    if (!isDuplicate) {
      setCourseData((prevData) => [...prevData, newCourseData]);
      localStorage.setItem(
        "courseData",
        JSON.stringify([...courseData, newCourseData])
      );
    }
  };

  const uniqueCourses = courseData.filter((data, index, self) => {
    return (
      index ===
      self.findIndex(
        (d) => d.image === data.image && d.instructor === data.instructor
      )
    );
  });

  return (
    <div className="container9">
      <h2 className="text-center mt-4">Your Courses</h2>
      <div className="cart9">
        {uniqueCourses.map((data, index) => (
          <div key={index} className="cart-item9">
            <img src={data.image} alt="Course" />
            <div className="cart-item-details9">
              <p className="instructor9 fw-bold">Instructor: {data.instructor}</p>
              <button
                className="unenroll-button9"
                onClick={() => handleUnenroll(index)}
              >
                Unenroll
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourCourses;

