import React from "react"


const Navbar=()=>{

    return(
        <>

  <div className="topbar ">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 align-self-center">
          <div className="logo text-end"> <a href="#" className="text-white ">
          <img src="./Images/Oes Logo/logo2.jpeg" alt="" style={{width:200,height:70 }}/>
          </a></div>
        </div>


        <div className="col-xl-6 align-self-center">
          <div className="toggle text-end">
           
            <a className="btn  fw-bold fs-4 text-black" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <i className="fa fa-bars"></i>
           </a>
          </div>
        </div>

      </div>
    </div>
  </div>


  <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
     <span className="text-primary fs-4">Online Education Service</span> 
     </h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
   
    <div className="dropdown mt-3">
      <button className="btn btn-info rounded-pill p-2 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Home
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
       <br/><br/>


      <button className="btn btn-info rounded-pill p-2 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Courses
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a className="dropdown-item" href="#">Features</a></li>
        <li><a className="dropdown-item" href="#">Categories</a></li>
       
      </ul>
      <br/><br/>

      <button className="btn btn-info rounded-pill p-2 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Instructors
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a className="dropdown-item" href="#">Become an instructor</a></li>
        <li><a className="dropdown-item" href="#">Instructor Single</a></li>
        
      </ul>
      <br/><br/>

      <button className="btn btn-info rounded-pill p-2 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Events
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a className="dropdown-item" href="#">Events Calendar</a></li>
        <li><a className="dropdown-item" href="#">Event List</a></li>
       
      </ul>
      <br/><br/>

      <button className="btn btn-info rounded-pill p-2 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Pages
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a className="dropdown-item" href="#">About Us</a></li>
        <li><a className="dropdown-item" href="#">Pricing Plans</a></li>
        <li><a className="dropdown-item" href="#">Gallery</a></li>
        <li><a className="dropdown-item" href="#">FAQ Page</a></li>
        <li><a className="dropdown-item" href="#">Contact Us</a></li>
        <li><a className="dropdown-item" href="#">404 Error Page</a></li>

      </ul>
      <br/>
      <br/>

      <button className="btn btn-info rounded-pill p-2 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Elements
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>











        </>
    )
}

export default Navbar