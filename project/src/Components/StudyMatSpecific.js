import React from 'react'

import { useParams } from "react-router-dom";
import StudyMaterialApi from './StudyMaterialApi';
export const StudyMatSpecific = () => {

    const { MatId} = useParams();
    const thisMat = StudyMaterialApi.find((mat) => String(mat.id) === MatId);

  return (
      <>
      
          <div className="container mt-5">
          <h1 className="text-center fw-bold studyh1">Study Materials</h1>
        <div className="row justify-content-center">
          
          <div className="col-5 mt-4">
                      <h4 className="fw-bold"> {thisMat.lesson1}</h4>
            <p>
             {thisMat.paragraph1}
            </p>
                  </div>
                  <div className="col-5 mt-4">
                      <div className="mt-4 p-5">
                      <a href={thisMat.file1}>
                          {/* <button id="studybtn">Download File</button> */}
                          <button className="btn studybtn " ><i className="fa fa-download  pe-1"></i> Download PDF File</button>
                         
                          </a>
                          </div>
                  </div>
              </div>
      </div>
              </>
  )
}
