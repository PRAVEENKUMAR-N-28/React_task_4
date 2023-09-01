import React from 'react';
import Oty1 from '../img/ooty1.jpeg';
import Oty2 from '../img/ooty2.jpeg';
import Oty3 from '../img/ooty3.jpeg';
import Oty4 from '../img/ooty4.jpeg';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carousel from 'react-bootstrap/Carousel';

const OneOoty = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className="package2">
                      
                     <div className="Day_1_1">
                     <Carousel className='carousel' > 
                         <Carousel.Item>
                           <img src={Oty1} alt="" className='carousle_part1_img'/>
                         </Carousel.Item>
                         <Carousel.Item>
                           <img src={Oty2} alt="" className='carousle_part1_img'/>
                         </Carousel.Item>
                         <Carousel.Item>
                           <img src={Oty3} alt="" className='carousle_part1_img'/>
                         </Carousel.Item>
                         <Carousel.Item>
                           <img src={Oty4} alt="" className='carousle_part1_img'/>
                         </Carousel.Item>
                     </Carousel>
                     <div className="package_Conntent">
                        <p className='One_day_title'>
                          One Day Trip from Ooty
                        </p>
                        <p className='package_con'>
                          In this trip we Cover More then 3 place's in single day. More about the place deatils click About Rs.1500
                        </p>
                        
                        <a href="#" className='book' onClick={handleShow} >About & Book</a>
                        <Offcanvas show={show} onHide={handleClose} placement='end' backdrop={false}>
                                  <Offcanvas.Header closeButton>
                                  <Offcanvas.Title ><p className='slider_title'>One Day trip From Ooty</p></Offcanvas.Title>
                                  </Offcanvas.Header>
                                  <Offcanvas.Body>
                                      <p className='slide_cont_title'>Place List</p >
                                      <p className='slide_cont'>
                                        <ul>
                                          <li>Nilgiri Mountain Railway</li>
                                          <li>Ooty Botanical Garden</li>
                                          <li>Emerald Lake</li>
                                          <li>Dolphin's Nose</li>

                                        </ul> <br />
                                        <p>For more details go to Place to visit page</p>
                                      </p><br/>

                                      <p className='slide_cont_title'>Benefits</p >
                                      <p className='slide_cont'>
                                        <ol>
                                          <li>Food</li>
                                          <li>Pick Up & Drop in the Same Place</li>
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
                 </div>
  )
}

export default OneOoty