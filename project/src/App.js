
import React from 'react';

// import Navbar from './Components/Navbar';
// import Home from "./Components/Home"
// import Gallery from './Components/Gallery';
// import Error_page from './Components/error_page';

// import Faq from './Components/Faq';
// import Contact from './Components/contactUs';
// import Cart from './Components/cart';
import Dashboard from './Components/dashboard';
import Navbar from './Components/Navbar';
import Home from "./Components/Home"
import Counter from "./Components/Counter";
import Footer from "./Components/Footer"
import ScrollButton from "./Components/ScrollButton"



import './App.css';


function App() {
  return (
   <>

   
{/* <Navbar/>
<Home/> */}
      {/* <Gallery/> */}
      {/* <Error_page/> */}
      {/* <Faq /> */}
      {/* <Contact/> */}
      {/* <Cart /> */}
      <Dashboard/>
  </>    

  
<Navbar/>
<Home/>
<Counter/>
<Footer/>
<ScrollButton/>



   </>

  );
}

export default App;
