import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import LoginForm from "./Components/LoginForm"
import Register from "./Components/Register"
import ContactUs from "./Components/ContactUs"
import Dashboard from "./Components/Dashboard"
import Gallery from "./Components/Gallery"
import Cart from "./Components/Cart"
import Error_page from "./Components/Error_page"
import Faq from './Components/Faq';
import AllCourses from './Components/AllCourses';
import AllCoursesGrid from './Components/AllCoursesGrid';
import SpecificCourse from './Components/SpecificCourse';
import Instructor from './Components/Instructor';
import InstructorSpecific from './Components/InstructorSpecific';
import Instdetailcard from './Components/Instdetailcard';




const router = createBrowserRouter([
 
  {
    path: "/",
    element: <App/>
  },
  
  {
    path: "about",
    element: <AboutUs/>,
    
    
  },
  {
    path: "contact",
    element: <ContactUs/>,
    
    
  },

  // {
  //   path: "courses",
  //   element: <AllCourses/>,
    
    
  // },
  {
    path: "dashboard",
    element: <Dashboard/>,
    
    
  },
  {
    path: "cart",
    element: <Cart/>,
    
    
  },

  // {
  //   path: "/specificCourse/:id",
  //   element: <SpecificCourse/>,
    
    
  // },



  {
    path: "/specificCourse/:productId",
    element: <SpecificCourse/>,
    
  },


  {
    path: "/courses",
    element: <AllCourses/>,
 
  },
  {
    path: "/specificInstructor/:InstructorId",
    element: <InstructorSpecific/>,
    
  },

  



  {
    path: "*",
    element: <Error_page/>,
    
    
  },
  {
    path: "faq",
    element: <Faq/>,
    
    
  },
  {
    path: "gallery",
    element: <Gallery/>,
    
    
  },
  {
    path: "instructor",
    element: <Instructor/>,
    
    
  },
  {
    path: "instcard",
    element: <Instdetailcard/>,
    
    
  },

  {
    path: "register",
    element: <Register/>,
    
    
  },

  {
    path: "grid",
    element: <AllCoursesGrid/>,
    
    
  },

  {
    path: "login",
    element: <LoginForm/>,
    
    
  },

  {
    path: "/home",
    element: <App/>,
    
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
  <React.StrictMode>
 
  <RouterProvider router={router} /> 
  
  </React.StrictMode>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
