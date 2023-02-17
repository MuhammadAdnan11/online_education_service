import React, { Component } from "react";
import "./gallery.css";
export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      imageUrlArray: [
        "./Images/Gallery/gallery-img-1.jpg",
        "./Images/Gallery/gallery-img-2.jpg",
        "./Images/Gallery/gallery-img-3.jpg",
        "./Images/Gallery/gallery-img-4.jpg",
        "./Images/Gallery/gallery-img-5.jpg",
        "./Images/Gallery/gallery-img-6.jpg",
        "./Images/Gallery/gallery-img-7.jpg",
        "./Images/Gallery/gallery-img-8.jpg",
        "./Images/Gallery/gallery-img-9.jpg",
        "./Images/Gallery/gallery-img-10.jpg",
        "./Images/Gallery/gallery-img-11.jpg",
        "./Images/Gallery/gallery-img-12.jpg",
      ],
      showModal: false,
      popImageUrl: " ",
    };
  }

  render() {
    let imageUrlArray = this.state.imageUrlArray;
    const images = imageUrlArray.map((url, index) => {
      return (
        <>
          <img className="singleImage" src={url} key={index} alt="" />
        </>
      );
    });

    return (
        <>
            
            <div className="gal_heading">
                <img src="./Images/Gallery/title-area-background.png" alt="" />
                <h1>
            <b>Gallery</b>
                </h1>
              
        </div>
        <div className="images">{images}</div>
      </>
    );
  }
}
