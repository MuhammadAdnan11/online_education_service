import React from 'react';
import "./dashboard.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsFacebook } from 'react-icons/bs';
const Dashboard = () => {
    return (
        <>
         <div className='container-fluid  imgbg '>
                <div className='container'>
                    <div className='row'>
                    <h1 className='fw-bolder text-white mt-5 pt-3  hcard' >User dashboard</h1>
                    </div>
                    
                </div>
              {/* Container End  */}
            </div>

            {/* Login */}
            <div className='container mt-5 pt-5 '>
                <div className='row col-md-12  justify-content-evenly'>

                    <div className='col-md-5  '>
                    <h3 className='fw-bold '>Login with your account</h3>
                    <Form>
      <Form.Group className="mb-3 mt-3" controlId="formBasicEmail" style={{width:"350px"}}>
        <Form.Label className='fw-bold'><small>Username*</small></Form.Label>
        <Form.Control type="email"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword"style={{width:"350px"}}>
        <Form.Label className='fw-bold'><small>Password*</small></Form.Label>
        <Form.Control type="password" />
                            </Form.Group>
        
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox"  label="Remember me" />
                                </Form.Group>
                            
     <div className=' mb-2 '>  
                        <Button className='rounded-pill p-2 text-white' id='btncol' style={{width:"80%", height:"50px"}}>LOGIN
                        </Button>
                            </div>
                
                        </Form>     
                        <div className='d-flex' id='regcol'>
                            <p className=''><small>Not a member yet?</small></p>
                            <a href='#' ><small>Register Now</small></a>
                    </div>
                    </div>


                    <div className='col-md-5  mt-5 pt-5  '>
                        <h6 className='mt-5 pt-3 mb-5 text-center titcenter fw-bold'>Recommended</h6>
                       
                        <div className='row-md-12 d-flex '>
                            
                            <div className='col-md-5'>
                            <div className=' mb-2 ps-2'>  
                        <Button className=' rounded-pill   p-2 text-white' id='fbcol' style={{width:"100%", height:"50px"}}>FACEBOOK<BsFacebook/>
                        </Button>
                            </div>


                            </div>
                            <div className='col-md-6 ps-1 text-center'>
                                <p id='netfont' >Connect with Social<br/> Networks</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
            

        
        </>
    )
}
export default Dashboard;