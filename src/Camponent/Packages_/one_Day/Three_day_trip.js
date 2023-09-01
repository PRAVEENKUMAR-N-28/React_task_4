import React from 'react';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carousel from 'react-bootstrap/Carousel';



import yk1 from '../img/rameshwarem1.jpeg';
import yk2 from '../img/rameshwarem4.jpeg';
import yk3 from '../img/Kanyakumari.jpeg';
import Three_1 from './Three_1';
import Three_2 from './Three_2';


function Three_day_trip() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    
    <section >
     
      <h4 style={{fontWeight:"600" , marginTop:"40px"}}>Three Day Trip</h4>
      <div className="part1">

                  <Three_1 />
                  <Three_2 />
 
                 <div className="package3">
                      
                     <div className="Day_1_1">
                     <Carousel className='carousel' > 
                         <Carousel.Item>
                           <img src={yk1} alt="" className='carousle_part1_img'/>
                         </Carousel.Item>
                         <Carousel.Item>
                           <img src={yk2} alt="" className='carousle_part1_img'/>
                         </Carousel.Item>
                         <Carousel.Item>
                           <img src={yk3} alt="" className='carousle_part1_img'/>
                         </Carousel.Item>
                         
                     </Carousel>
                     <div className="package_Conntent">
                        <p className='One_day_title'>
                          Three Day Trip from Rameshwaram & Kanyakumari
                        </p>
                        <p className='package_con'>
                          In this trip we Cover More then 7 place's . More about the place deatils click About Rs.5000
                        </p>
                        
                        <a href="#" className='book' onClick={handleShow} >About & Book</a>
                        <Offcanvas show={show} onHide={handleClose} placement='start' backdrop={false} >
                                  <Offcanvas.Header closeButton>
                                  <Offcanvas.Title ><p className='slider_title'>One Day trip From Rameshwaram & Kanyakumari </p></Offcanvas.Title>
                                  </Offcanvas.Header>
                                  <Offcanvas.Body>
                                      <p className='slide_cont_title'>District List</p >
                                      <p className='slide_cont'>
                                        <ul>
                                          <li>Rameshwaram</li>
                                          <li>Kanyakumari </li>
                                         

                                        </ul> <br />
                                        <p>Go to the place to visit page to know about more detils</p>
                                      </p><br/>

                                      <p className='slide_cont_title'>Benefits</p >
                                      <p className='slide_cont'>
                                        <ol>
                                          <li>Food</li>
                                          <li>Room</li>
                                          <li>Pick Up & Drop in the Same Place</li>
                                          <li>Guide</li>
                                            
                                        </ol>  
                                      </p><br/>

                                      <p className='slide_cont_title'>Per person Rs.5000/-</p >
                                      <p className='slide_cont'>
                                      <a href="#" className='book'>Book The Trip</a>
                                      </p>
                                  </Offcanvas.Body>
                              </Offcanvas>
                      </div>
                     </div>
                 </div>
 
                 
      </div>
         
                
    </section>
  )
}

export default Three_day_trip