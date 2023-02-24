import React from 'react';
import "./cart.css";
import Button from 'react-bootstrap/Button';
const Cart = () => {
    return (
        <>
            <div className='container-fluid  imgbg '>
                <div className='container'>
                    <div className='row'>
                    <h1 className='fw-bolder text-white mt-5 pt-3  hcard' >Cart</h1>
                    </div>
                    
                </div>
               
            </div>
            <div className='container  mt-5 '>
                <div className='row  justify-content-center pt-5 mb-4' style={{ height: "100px" , width:"100%"}}>
                        <div className='col-md-5'>
                        <p className='text-center mt-4 fs-2 fw-bold'>Your cart is currently empty.</p>
                        <hr/>
                    </div>
                </div>
                <div className='row justify-content-center pt-5 mt-4'style={{height:"100px"}}>
                    <div className='col-md-5 text-center '>
                        {/* <button className='btn rounded-pill  text-center bg-warning  '>RETURN TO SHOP</button> */}
                        
                        <Button className='rounded-pill btncol p-2 ' size="lg" style={{width:"180px", height:"50px"}}> RETURN TO SHOP
                        </Button>
                     </div>
                    </div>
            </div>
           
        </>
    )
}
export default Cart;