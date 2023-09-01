import React from 'react';
import ch1 from '../img/chennai1.jpeg';
import ch2 from '../img/chennai2.jpeg';
import ch3 from '../img/chennai3...jpeg';
import ch4 from '../img/chennai4.jpeg';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carousel from 'react-bootstrap/Carousel';
const One_chennai = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className="Day_1_1">
                     <Carousel className='carousel' > 
                         <Carousel.Item>
                           <img src={ch1} alt="" className='carousle_part1_img'/>
                         </Carousel.Item>
                         <Carousel.Item>
                           <img src={ch2} alt="" className='carousle_part1_img'/>
                         </Carousel.Item>
                         <Carousel.Item>
                           <img src={ch3} alt="" className='carousle_part1_img'/>
                         </Carousel.Item>
                         <Carousel.Item>
                           <img src={ch4} alt="" className='carousle_part1_img'/>
                         </Carousel.Item>
                     </Carousel>
                      <div className="package_Conntent">
                        <p className='One_day_title'>
                          One Day Trip from Chennai
                        </p>
                        <p className='package_con'>
                          In this trip we Cover More then 3 place's in single day. More about the place deatils click About Rs.1500
                        </p>
                        
                        <a href="#" className='book' onClick={handleShow} >About & Book</a>
                        <Offcanvas show={show} onHide={handleClose} placement='end'backdrop={false}>
                                  <Offcanvas.Header closeButton>
                                  <Offcanvas.Title ><p className='slider_title'>One Day trip From Chennai</p></Offcanvas.Title>
                                  </Offcanvas.Header>
                                  <Offcanvas.Body>
                                      <p className='slide_cont_title'>Place List</p >
                                      <p className='slide_cont'>
                                        <ul>
                                          <li>Marina Beach</li>
                                          <li>MGR Flim City</li>
                                          <li>Marundeeswarar Temple</li>
                                          <li>Breezy Beach</li>

                                        </ul> <br />
                                        <p>Go to the place to visit page to know about more detils</p>
                                      </p><br/>

                                      <p className='slide_cont_title'>Benefits</p >
                                      <p className='slide_cont'>
                                        <ol>
                                          <li>Food</li>
                                          <li>Pick Up Drop in the Same Place</li>
                                          <li>Guide</li>
                                            
                                        </ol>  
                                      </p><br/>

                                      <p className='slide_cont_title'>Per person Rs.1500/-</p >
                                      <p className='slide_cont'>
                                      <a href="#" className='book'>Book The Trip</a>
                                      </p>
                                  </Offcanvas.Body>
                              </Offcanvas>
                      </div>
                     </div>
  )
}

export default One_chennai