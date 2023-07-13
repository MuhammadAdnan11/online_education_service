import React from "react";
import Navbar from "./Navbar";
import "./StudyMaterial.css";
import Footer from "./Footer";
export const StudyMaterial = () => {
  return (
    <>
      <Navbar />
          <div className="container mt-5">
          <h1 className="text-center fw-bold studyh1">Study Materials</h1>
        <div className="row justify-content-center">
          
          <div className="col-5 mt-4">
            <h4  className="fw-bold">Lesson-1</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna.Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Proin pharetra nonummy
              pede. Mauris et orci.
            </p>
                  </div>
                  <div className="col-5 mt-4">
                      <div className="mt-4 p-5">
                      <a href="../Pdf/1.pdf" download="1.pdf">
                          {/* <button id="studybtn">Download File</button> */}
                          <button className="btn studybtn " ><i className="fa fa-download  pe-1"></i> Download PDF File</button>
                         
                          </a>
                          </div>
                  </div>
              </div>
              
              <div className="row justify-content-center">
          
          <div className="col-5 mt-4">
            <h4 className="fw-bold">Lesson-2</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna.Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Proin pharetra nonummy
              pede. Mauris et orci.
            </p>
                  </div>
                  <div className="col-5 mt-4">
                      <div className="mt-4 p-5">
                      <a href="../Pdf/1.pdf" download="2.pdf">
                          {/* <button id="studybtn">Download File</button> */}
                          <button className="btn studybtn " ><i className="fa fa-download  pe-1"></i> Download PDF File</button>
                         
                          </a>
                          </div>
                  </div>
              </div>
              
              <div className="row justify-content-center">
          
          <div className="col-5 mt-4">
            <h4 className="fw-bold">Lesson-3</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna.Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Proin pharetra nonummy
              pede. Mauris et orci.
            </p>
                  </div>
                  <div className="col-5 mt-4">
                      <div className="mt-4 p-5">
                      <a href="../Pdf/1.pdf" download="3.pdf">
                          {/* <button id="studybtn">Download File</button> */}
                          <button className="btn studybtn " ><i className="fa fa-download  pe-1"></i> Download PDF File</button>
                         
                          </a>
                          </div>
                  </div>
              </div>
              
              <div className="row justify-content-center">
          
          <div className="col-5 mt-4">
            <h4 className="fw-bold">Lesson-4</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna.Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Proin pharetra nonummy
              pede. Mauris et orci.
            </p>
                  </div>
                  <div className="col-5 mt-4">
                      <div className="mt-4 p-5">
                      <a href="../Pdf/1.pdf" download="1.pdf">
                          {/* <button id="studybtn">Download File</button> */}
                          <button className="btn studybtn " ><i className="fa fa-download  pe-1"></i> Download PDF File</button>
                         
                          </a>
                          </div>
                  </div>
              </div>
              
              <div className="row justify-content-center">
          
          <div className="col-5 mt-4">
            <h4 className="fw-bold">Lesson-5</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna.Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Proin pharetra nonummy
              pede. Mauris et orci.
            </p>
                  </div>
                  <div className="col-5 mt-4">
                      <div className="mt-4 p-5">
                      <a href="../Pdf/1.pdf" download="1.pdf">
                          {/* <button id="studybtn">Download File</button> */}
                          <button className="btn studybtn " ><i className="fa fa-download  pe-1"></i> Download PDF File</button>
                         
                          </a>
                          </div>
                  </div>
        </div>
          </div>
          
          <Footer/>
    </>
  );
};
