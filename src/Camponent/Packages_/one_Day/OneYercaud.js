import React from 'react';
import yk1 from '../img/yercaud1.jpeg';
import yk2 from '../img/yercaud2.jpeg';
import yk3 from '../img/yercaud3.jpeg';
import yk4 from '../img/yercaud4.jpeg';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carousel from 'react-bootstrap/Carousel';

const OneYercaud = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
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
                         <Carousel.Item>
                           <img src={yk4} alt="" className='carousle_part1_img'/>
                         </Carousel.Item>
                     </Carousel>
                     <div className="package_Conntent">
                        <p className='One_day_title'>
                          One Day Trip from Yercaud
                        </p>
                        <p className='package_con'>
                          In this trip we Cover More then 3 place's in single day. More about the place deatils click About Rs.1500
                        </p>
                        
                        <a href="#" className='book' onClick={handleShow} >About & Book</a>
                        <Offcanvas show={show} onHide={handleClose} placement='end' backdrop={false}>
                                  <Offcanvas.Header closeButton>
                                  <Offcanvas.Title ><p className='slider_title'>One Day trip From Yercaud</p></Offcanvas.Title>
                                  </Offcanvas.Header>
                                  <Offcanvas.Body>
                                      <p className='slide_cont_title'>Place List</p >
                                      <p className='slide_cont'>
                                        <ul>
                                          <li>Pagoda Point</li>
                                          <li>Botanical Garden</li>
                                          <li>Emerald Lake</li>
                                          <li>Lady,s Seat</li>

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
                 </div>
  )
}

export default OneYercaud