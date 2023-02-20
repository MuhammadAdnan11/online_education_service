// import React, { Component } from "react";
// import "./gallery.css";
// export default class Gallery extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       imageUrl: "",
//       imageUrlArray: [
//         "./Images/Gallery/gallery-img-1.jpg",
//         "./Images/Gallery/gallery-img-2.jpg",
//         "./Images/Gallery/gallery-img-3.jpg",
//         "./Images/Gallery/gallery-img-4.jpg",
//         "./Images/Gallery/gallery-img-5.jpg",
//         "./Images/Gallery/gallery-img-6.jpg",
//         "./Images/Gallery/gallery-img-7.jpg",
//         "./Images/Gallery/gallery-img-8.jpg",
//         "./Images/Gallery/gallery-img-9.jpg",
//         "./Images/Gallery/gallery-img-10.jpg",
//         "./Images/Gallery/gallery-img-11.jpg",
//         "./Images/Gallery/gallery-img-12.jpg",
//       ],
//       showModal: false,
//       popImageUrl: " ",
//     };
//   }

//   render() {
//     let imageUrlArray = this.state.imageUrlArray;
//     const images = imageUrlArray.map((url, index) => {
//       return (
//         <>
//           <img className="singleImage" src={url} key={index} alt="" />
//         </>
//       );
//     });

//     return (
//         <>
            
//             <div className="gal_heading">
//                 <img src="./Images/Gallery/title-area-background.png" alt="" />
//                 <h1>
//             <b>Gallery</b>
//                 </h1>
              
//         </div>
//         <div className="images">{images}</div>
//       </>
//     );
//   }
// }


import React from 'react'
import "./gallery.css";

const Gallery=()=> {
  return (
    <>
      <div className='container-fluid imgbg'>
        <div className='container'>
          <div className='row text-sm-center'>
       <h1 className='text-white mt-5 p-4'> Gallery </h1>

          </div>
       </div>
      </div>

      <div className='container mt-5'>
        <div className='row d-flex flex-row gap-2 justify-content-center cursor-pointer HoverDiv'>
          <img src="./Images/Gallery/gallery-img-1.jpg" alt="" style={{ width: 250, height: 200 }}></img>
          <img src="./Images/Gallery/gallery-img-2.jpg" alt="" style={{width:250,height:200}}></img>
          <img src="./Images/Gallery/gallery-img-3.jpg" alt="" style={{width:250,height:200}}></img>
          <img src="./Images/Gallery/gallery-img-4.jpg" alt="" style={{width:250,height:200}}></img>
          <img src="./Images/Gallery/gallery-img-5.jpg" alt="" style={{width:250,height:200}}></img>
          <img src="./Images/Gallery/gallery-img-6.jpg" alt="" style={{width:250,height:200}}></img>
          <img src="./Images/Gallery/gallery-img-7.jpg" alt="" style={{ width: 250, height: 200 }}></img>
          <img src="./Images/Gallery/gallery-img-8.jpg" alt="" style={{width:250,height:200}}></img>
          <img src="./Images/Gallery/gallery-img-9.jpg" alt="" style={{width:250,height:200}}></img>
          <img src="./Images/Gallery/gallery-img-10.jpg" alt="" style={{width:250,height:200}}></img>
          <img src="./Images/Gallery/gallery-img-11.jpg" alt="" style={{width:250,height:200}}></img>
          <img src="./Images/Gallery/gallery-img-12.jpg" alt="" style={{width:250,height:200}}></img>
          
          
        </div>
      </div>
    </>
  )
}

export default Gallery
