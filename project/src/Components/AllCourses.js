import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import "./AllCourses.css"
import {CiStar} from "react-icons/ci";
import {AiOutlineUnorderedList} from "react-icons/ai";
import {CiGrid42} from "react-icons/ci";





const coursesbackimage=require('../AssetsFolder/AllCourses/allcoursespagebg.png');
const coursesbg={
    width: '100%',
    height: '35vh',
    backgroundImage: `url(${coursesbackimage})`,
    backgroundSize:'cover'
};


const API_URL ="https://samiullah191014.github.io/MyApi/MyAPI.json";

const AllCourses = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

//   const recordsPerPage=6;
//   const lastIndex = currentPage * recordsPerPage;
//   const firstIndex= lastIndex-recordsPerPage;
//   const records = users.slice(firstIndex,lastIndex);
//   const npage = Math.ceil(users.length / recordsPerPage);
//   const numbers = [...Array(npage +1).keys()].slice(1);



  const getUsers = async () => {
      const response = await fetch(`${API_URL}`);
      const FinalData = await response.json();

      setUsers(FinalData)
      
  }




  useEffect(() => {
      getUsers();
  }, [])


//   function prePage(){
//     if(currentPage !== 1){
//         setCurrentPage(currentPage -1)
//     }

//   }


//   function nextPage(){
//     if(currentPage !== npage){
//         setCurrentPage(currentPage + 1)
//     }

//   }

//   function changePage(id){
//     setCurrentPage(id);

//   }

  return (
    <>

    <Navbar/>
      
      <div className='container-fluid ' style={coursesbg}>
      <div className='container'>
        <div className='row'>
        <h1 className='fw-bolder text-white mt-5 pt-3  bgcourses' >All Courses</h1>
        <div className='d-flex flex-row gap-2'>
        <span className='text-white'><Link to="/">Home</Link></span> 
        <span className='text-white'> /</span>
        <span className='text-white'><Link to="/courses">All Courses</Link></span>
        </div>

        </div>
      </div>

      </div>
      

        
 



<div class="container mt-5">

                    <div className="row height d-flex justify-content-center align-items-center">

                      <div className="col-md-8">

                        <div className="search">
                          <i className="fa fa-search"></i>
                          <input type="text" className="form-control rounded-pill" onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search for course"/>
                          
                        </div>
                        
                      </div>
                      
                    </div>
                </div> 



         
            <div className='container '>
           <div class=" marggin">
            <Link to="/courses" class=" btn-default btn-sm "><span class="glyphicon glyphicon-th-list ">
            </span><AiOutlineUnorderedList className='fw-bolder fs-4'/></Link> <Link to="/grid" class=" btn-default btn-sm "><span
                class="glyphicon glyphicon-th "></span><CiGrid42 className='fw-bolder fs-4'/></Link>
           </div>
           </div>
           
 
      <div className="container container1 ">
               
               {users.filter((val)=>{
                if (searchTerm ===""){
                    return val 
                }
                else if (val.course.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
               }).map((curElem) => {
                       return (

                           <div className="card_item HoverDiv " key={curElem.id} >
                               <div className="card_inner ">
                                   <img src={curElem.image} alt="" />
                                   <div className="userName ">{curElem.course}</div>
                                   <div className="userUrl">{curElem.instructor}</div>
                                   
                                   <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                                    lorem quis.</p>
                                    <div className='d-flex flex-row justify-content-between'>
                                    <p className='rating'><CiStar className='fs-5'/>{curElem.Rating} Ratings </p>
                                    <span className='bgspan'>{curElem.price}</span>
                                     </div>
                               </div>

                           </div>
                       )
                   })
               }


           </div>   
           
                          {/* <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item ">
      <a class="page-link" href="#" tabindex="-1" onClick={prePage}>Previous</a>
    </li>
    {
        numbers.map((n,i)=>{
            <li className={`page-item ${currentPage===n ? 'active' : ''}`} key={i}>
                <a href="#" className='page-link' onClick={()=> changePage(n)} >{n}</a>
            </li>
        })
    }
    
    <li class="page-item">
      <a class="page-link" href="#" onClick={nextPage}>Next</a>
    </li>
  </ul>
</nav> */}



            
     


           

    <Footer/>

    

</>
  )
}

export default AllCourses;

