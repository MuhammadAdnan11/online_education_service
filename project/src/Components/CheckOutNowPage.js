// import React from 'react'
// import StripeCheckout from 'react-stripe-checkout';

// const CheckOutNowPage = ({total}) => {

//     const tokenHandler = (token)=>{
//         console.log(token);
//     }
//   return (
//     <>
//       <StripeCheckout
//       amount={total*100}
//       shippingAddress
//       token={tokenHandler}
//       stripeKey='pk_test_51MmtPaEEVZHpyQqNpyOvmC3nhjjrRl5KvDPsKwblsHiVb7JXRbpOHkk8rnEgJzLxt4CD7hoKQPQ2DsIX6IkvCVMl00pS8iSovr'
//       currency='USD'
//       >
//         <button>Pay Now</button>
//       </StripeCheckout>
//     </>
//   )
// }

// export default CheckOutNowPage










// import React from 'react'
// import { Link } from 'react-router-dom'

// const CheckOutNowPage = ({total}) => {
//   return (
//     <>
    
//       <Link to="/stripe"><button total={total}>CheckOut Now</button></Link>

      
//     </>
//   )
// }

// export default CheckOutNowPage












// import React from 'react'
// import { Link } from 'react-router-dom'

// const CheckOutNowPage = ({ total }) => {
//   return (
//     <>
//       <Link to={`/stripe?total=${total}`}>
//         <button className="btn btn-sm rounded-pill ">CheckOut Now</button>
//       </Link>
//     </>
//   )
// }

// export default CheckOutNowPage
















import React from 'react';
import { Link } from 'react-router-dom';

const CheckOutNowPage = ({ total, state }) => {
  // Extract image and instructor from each item in the state array
  const images = state.map(item => item.image);
  const instructors = state.map(item => item.instructor);

  // Join the images and instructors arrays into strings
  const imageParam = images.join(',');
  const instructorParam = instructors.join(',');

  return (
    <>
      <Link to={`/stripe?total=${total}&images=${imageParam}&instructors=${instructorParam}`}>
        <button className="btn btn-sm rounded-pill ">CheckOut Now</button>
      </Link>
    </>
  );
};

export default CheckOutNowPage;
