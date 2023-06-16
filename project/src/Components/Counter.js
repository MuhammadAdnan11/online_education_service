import React,{useState} from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import HomeCard from "../Components/HomeCard"
import HomeCard1 from "../Components/HomeCard1"
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import {FaRegComment } from "react-icons/fa";





const  Counter=({className, ...rest})=> {
    const [viewPortEntered,setViewPortEntered] = useState(false)
  return (
    <>
    <section className="counter ">
        <div className="counter-row">
            <div className=" counter-column ">
            <span className="text-center">
    <img src ="./Images/Counterpage/counter4.png" classNameName="ml-5" alt="" style={{width:60,height:50}}/>
                 </span>
                <strong data-number="1912" className="text-center" >
                    <CountUp {...rest} start ={ viewPortEntered ? null:0} end={1912}>
                    {({countUpRef})=>{
                        return(
                            <VisibilitySensor
                            active = {!viewPortEntered}
                            onChange ={isVisible =>{
                                if(isVisible){
                                    setViewPortEntered(true);
                                }
                            }}

                            delayedCall
                            >
                            <span className='number' ref={countUpRef}/>
                            </VisibilitySensor>
                        )
                    }}
                    </CountUp>
                </strong>
                <span className="text-center"> Success Stories</span>
            </div>




            <div className=" counter-column">
            <span className="text-center">
            <img src ="./Images/Counterpage/counter3.png" alt="" style={{width:60,height:50}}/>
            </span>
                <strong data-number="89" className="text-center" >
                    <CountUp {...rest} start ={ viewPortEntered ? null:0} end={89}>
                    {({countUpRef})=>{
                        return(
                            <VisibilitySensor
                            active = {!viewPortEntered}
                            onChange ={isVisible =>{
                                if(isVisible){
                                    setViewPortEntered(true);
                                }
                            }}

                            delayedCall
                            >
                            <span className='number' ref={countUpRef}/>
                            </VisibilitySensor>
                        )
                    }}
                    </CountUp>
                </strong>
                <span className="text-center">Dedicated Tutors</span>
            </div>



            <div className=" counter-column">
            <span className="text-center">
            <img src ="./Images/Counterpage/counter2.png" alt="" style={{width:60,height:50}}/>
              </span>
                <strong data-number="56" className="text-center" >
                    <CountUp {...rest} start ={ viewPortEntered ? null:0} end={56}>
                    {({countUpRef})=>{
                        return(
                            <VisibilitySensor
                            active = {!viewPortEntered}
                            onChange ={isVisible =>{
                                if(isVisible){
                                    setViewPortEntered(true);
                                }
                            }}

                            delayedCall
                            >
                            <span className='number' ref={countUpRef}/>
                            </VisibilitySensor>
                        )
                    }}
                    </CountUp>
                </strong>
                <span className="text-center"> Scheduled Events</span>
            </div>



            <div className=" counter-column">
            <span className="text-center">
            <img src ="./Images/Counterpage/counter1.png" alt="" style={{width:60,height:50}}/>
             </span>
                <strong data-number="305" className="text-center">
                    <CountUp {...rest} start ={ viewPortEntered ? null:0} end={305}>
                    {({countUpRef})=>{
                        return(
                            <VisibilitySensor
                            active = {!viewPortEntered}
                            onChange ={isVisible =>{
                                if(isVisible){
                                    setViewPortEntered(true);
                                }
                            }}

                            delayedCall
                            >
                            <span className='number' ref={countUpRef}/>
                            </VisibilitySensor>
                        )
                    }}
                    </CountUp>
                </strong>
                <span className="text-center"> Available Courses</span>
            </div>


        </div>
    </section>





{/* counter section end here  */}
{/* New section start from here 👇 */}

<div className="container mt-5">
    <div className="row">
        <span className="text-center colo1 ">What's New</span>
        <h1 className="text-center fw-bold widclass">Popular Online Courses</h1>
        <p className="text-center">
            Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque,facilisis vel<br/>
             mollis vitae, mollis nec ante. Quisque aliquam dictum condim.
        </p>
    </div>
</div>



{/* card section start here 👇  */}

<div className="container mt-5">

    <div className="row justify-content-center gap-3">
    <HomeCard
       imgrsc1="./Images/HomePageCard/card1.jpg"
       cardTitle="English Grammer"
       cardName="Jill King"
        cardText="Some quick example text to build on the card title and make up the
          bulk of the card's content."
          price="Free"
          cents=""
          btn="GoToCourse"
       />


<HomeCard
       imgrsc1="./Images/HomePageCard/card2.jpg"
       cardTitle="Vocabulary"
       cardName="Jill King"
        cardText="Some quick example text to build on the card title and make up the
          bulk of the card's content."
          price="$79"
          cents=".60"
          btn="GoToCourse"
         
       />


<HomeCard
       imgrsc1="./Images/HomePageCard/card3.jpg"
       cardTitle="Expository Writing"
       cardName="Jill King"
        cardText="Some quick example text to build on the card title and make up the
          bulk of the card's content."
          price="$66"
          cents=".50"
          btn="GoToCourse"
       />
    </div>
</div>
  



{/* After card section start👇 */}

<div className="container mt-5">
    <div className="row">
        <span className="text-center colo1 ">What's New</span>
        <h1 className="text-center fw-bold widclass">The Best Tutors in Town</h1>
        <p className="text-center">
            Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque,facilisis vel<br/>
             mollis vitae, mollis nec ante. Quisque aliquam dictum condim.
        </p>
    </div>
</div>




{/* home main page testimonial 👇 */}

<section className="container mt-5">
  

  <div className="row text-center">
    <div className="col-md-4 mb-5 mb-md-0">
      <div className="d-flex justify-content-center mb-4 HoverDiv">
        <img src="Images/HomepageTestimonial/test1.jpg"
          className="rounded-circle shadow-1-strong" width="150" height="150"  />
      </div>
      <h5 className="mb-3 iconcolor1">Maria Smantha</h5>
      <h6 className="text-primary mb-3">Teacher</h6>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
        tenetur.
      </p>
      <ul className="list-unstyled d-flex justify-content-center mb-0 gap-2 ">
        <li>
        <AiOutlineTwitter classNameName="iconcolor1"/>
        </li>
        
        <li>
        <FaFacebookF classNameName="iconcolor1"/>
        </li>
        <li>
        <FaInstagramSquare classNameName="iconcolor1"/>
        </li>
        
      </ul>
    </div>
    <div className="col-md-4 mb-5 mb-md-0">
      <div className="d-flex justify-content-center mb-4 HoverDiv">
        <img src="Images/HomepageTestimonial/test2.jpg"
          className="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 className="mb-3 iconcolor1">Lisa Cudrow</h5>
      <h6 className="text-primary mb-3">Special Assistant</h6>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2"></i>Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.
      </p>
      <ul className="list-unstyled d-flex justify-content-center mb-0 gap-2">
        <li>
        <AiOutlineTwitter classNameName="iconcolor1"/>
        </li>
        
        <li>
        <FaFacebookF classNameName="iconcolor1"/>
        </li>
        <li>
        <FaInstagramSquare classNameName="iconcolor1"/>
        </li>
        
      </ul>
    </div>
    <div className="col-md-4 mb-0">
      <div className="d-flex justify-content-center mb-4  HoverDiv">
        <img src="Images/HomepageTestimonial/test3.jpg"
          className="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 className="mb-3 iconcolor1">John Smith</h5>
      <h6 className="text-primary mb-3">Education Assistant</h6>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2"></i>At vero eos et accusamus et iusto odio
        dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.
      </p>
      <ul className="list-unstyled d-flex justify-content-center mb-0 gap-2">
        <li>
        <AiOutlineTwitter classNameName="iconcolor1"/>
        </li>
        
        <li>
        <FaFacebookF classNameName="iconcolor1"/>
        </li>
        <li>
        <FaInstagramSquare classNameName="iconcolor1"/>
        </li>
        
      </ul>
    </div>
  </div>
</section>




{/* section after testimonial  👇 */}



<form id="contact" action="https://formspree.io/f/xrgvnlag" method="POST">
<div className="section-content">
				<h1 className="section-header">Enroll in <span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Free Courses Now !</span></h1>
			</div>

			<div className="contact-section">
			<div className="container">
      <div className="row">
				  
					<div className="col-md-4 form-line">
              <h2 className="text-center">Courses for free</h2>
			  			<div className="form-group">
			  				<label for="exampleInputUsername">Your name</label>
					    	<input type="text" name="name" className="form-control" id="" placeholder=" Enter Name" required/>
				  		</div>

				  		<div className="form-group">
					    	<label for="exampleInputEmail">Email Address</label>
					    	<input type="email" name="email" className="form-control" id="exampleInputEmail" placeholder=" Enter Email id" required/>
					  	</div>	

					  	<div className="form-group">
					    	<label for="telephone">Mobile No.</label>
					    	<input type="tel" className="form-control" id="telephone" name='mobile no' placeholder=" Enter mobile no." pattern="[0-9]{10}" required/>
                <button type="submit" className="btn btn-default submit ">
                <i className="fa fa-paper-plane " aria-hidden="true">
                </i>
                GET IT NOW
                </button>
			  			</div>
              
              
			  			</div>
              
              <div className="col-md-8">
			           <h1 className="mt-4 p-2">Register Now</h1>
                 <p className="p-2">Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum, facilisis vel 
                 mollis vitae, mollis nec ante. Quisque aliquam dictum.</p>
                 <div className="d-flex flex-row gap-4 p-2 ">
                 <h1 className="display-4">00<span className="fs-5">Days</span></h1>
                 <h1 className="display-4">00<span className="fs-5">Hours</span></h1>
                 <h1 className="display-4">00<span className="fs-5">Minutes</span></h1>
                 <h1 className="display-4">00<span className="fs-5">Seconds</span></h1>


                 </div>
        </div>
			</div>
        
			</div>
      </div>
		</form>




{/* after testimonial is here 👇 */}

<div className="container marginclass">
    <div className="row">
        <span className="text-center colo2 ">Don’t Miss Anything</span>
        <h1 className="text-center fw-bold widclass display-5">Upcoming events</h1>
        <p className="text-center">
            Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque,facilisis vel<br/>
             mollis vitae, mollis nec ante. Quisque aliquam dictum condim.
        </p>
    </div>
</div>



{/* new section start here 👇 */}
    



<div className="container mt-5">

    <div className="row justify-content-center gap-3">
    <HomeCard1
       imgrsc1="./Images/HomePageCard/courseImg1.jpg"
       cardTitle="Creative Day"
       time=" 22.12.2024 @ 8:00 am - 5:00 pm"
       place=" Cambridge, MA 02138, USA"
       btnD="22 Dec"
       />


<HomeCard1
       imgrsc1="./Images/HomePageCard/courseImg2.jpg"
       cardTitle="Happy Hour"
       time=" 22.12.2024 @ 8:00 am - 5:00 pm"
       place=" Cambridge, MA 02138, USA"
       btnD="5 Dec"
       />


<HomeCard1
       imgrsc1="./Images/HomePageCard/courseImg3.jpg"
       cardTitle="Creative Leadership"
       time=" 22.12.2024 @ 8:00 am - 5:00 pm"
       place=" Cambridge, MA 02138, USA"
       btnD="15 Nov"
       />
    </div>
</div>



{/* new section start here 👇 */}


<div className="container marginclass">
  <div className="row">
    <div className="col-md-6">
    <span className=" colo2  fw-bolder">What's New</span>
    <h1 className=" fw-bolder display-5">From Our Blog</h1>
    <p className="">Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum <br/>
    neque,mollis nec ante. Quisque aliquam dictum.</p>

    <div className="d-flex flex-row gap-4 HoverDiv">
    <img src="./Images/Counterpage/blogimg1.jpg" alt="blog img" style={{width:160,height:160}} />
    <div className="d-flex flex-column "><h3 className="iconcolor1">Lifelong Learning</h3>
    <p>Lorem Ipsn gravida nibh vel velit auctor aliquet.
    Aenean sollicitudin, lorem quis</p>
    <span className="iconcolor1">23/10/2023 <FaRegComment/> <span className="size4">4</span></span>
    </div>
    </div>

    <div className="d-flex flex-row gap-4 mt-4 HoverDiv">
    <img src="./Images/Counterpage/blogimg2.jpg" alt="blog img" style={{width:160,height:160}} />
    <div className="d-flex flex-column "><h3 className="iconcolor1">Success Needs a Plan</h3>
    <p>Lorem Ipsn gravida nibh vel velit auctor aliquet.
    Aenean sollicitudin, lorem quis</p>
    <span className="iconcolor1">23/10/2022 <FaRegComment/><span className="size4">3</span></span>
    </div>
    </div>

    </div>
    <div className="col-md-6 mt-5 p-4 text-center animateImageCss">
      <img src="./images/counterpage/moving image.png" alt="" />
    </div>

  </div>
</div>



     </>
  )
}

export default Counter