import React,{useState} from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import HomeCard from "../Components/HomeCard"




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
       />


<HomeCard
       imgrsc1="./Images/HomePageCard/card2.jpg"
       cardTitle="Vocabulary"
       cardName="Jill King"
        cardText="Some quick example text to build on the card title and make up the
          bulk of the card's content."
       />


<HomeCard
       imgrsc1="./Images/HomePageCard/card3.jpg"
       cardTitle="Expository Writing"
       cardName="Jill King"
        cardText="Some quick example text to build on the card title and make up the
          bulk of the card's content."
       />
    </div>
</div>
  


     </>
  )
}

export default Counter