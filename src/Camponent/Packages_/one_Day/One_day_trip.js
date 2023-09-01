import React from 'react';
import ch1 from '../img/chennai1.jpeg';
import ch2 from '../img/chennai2.jpeg';
import ch3 from '../img/chennai3...jpeg';
import ch4 from '../img/chennai4.jpeg';
import Oty1 from '../img/ooty1.jpeg';
import Oty2 from '../img/ooty2.jpeg';
import Oty3 from '../img/ooty3.jpeg';
import Oty4 from '../img/ooty4.jpeg';
import yk1 from '../img/yercaud1.jpeg';
import yk2 from '../img/yercaud2.jpeg';
import yk3 from '../img/yercaud3.jpeg';
import yk4 from '../img/yercaud4.jpeg';
import hk1 from '../img/hogenakkal1.jpeg';
import hk2 from '../img/hogenakkal2.jpeg';
import hk3 from '../img/hogenakkal3.jpeg';
import hk4 from '../img/hokenakkal4.jpeg';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carousel from 'react-bootstrap/Carousel';
import OneChenni from './OneChenni';
import OneOoty from './OneOoty';
import OneYercaud from './OneYercaud'

const One_day_trip = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    
    <section >
      <h2 style={{fontWeight:"600"}}>Packages</h2>
      <h4 style={{fontWeight:"600"}}>One Day Trip</h4>
      <div className="part1">
      {/* <div className="package1">
                     
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
                        <Offcanvas show={show} onHide={handleClose} placement='end'>
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
                 </div> */}

                 <OneChenni />
                 <OneOoty />
                 {/* <OneYercaud /> */}
 
                 {/* <div className="package2">
                      
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
                        <Offcanvas show={show} onHide={handleClose} placement='end'>
                                  <Offcanvas.Header closeButton>
                                  <Offcanvas.Title ><p className='slider_title'>One Day trip From Chennai</p></Offcanvas.Title>
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
                 </div> */}
 
                 {/* <div className="package3">
                      
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
                        <Offcanvas show={show} onHide={handleClose} placement='end'>
                                  <Offcanvas.Header closeButton>
                                  <Offcanvas.Title ><p className='slider_title'>One Day trip From Chennai</p></Offcanvas.Title>
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
                 </div> */}
 
                 <div className="package4">
                      
                     <div className="Day_1_1">
                     <Carousel className='carousel' > 
                         <Carousel.Item>
                           <img src={hk1} alt="" className='carousle_part1_img'/>
                         </Carousel.Item>
                         <Carousel.Item>
                           <img src={hk2} alt="" className='carousle_part1_img'/>
                         </Carousel.Item>
                         <Carousel.Item>
                           <img src={hk3} alt="" className='carousle_part1_img'/>
                         </Carousel.Item>
                         <Carousel.Item>
                           <img src={hk4} alt="" className='carousle_part1_img'/>
                         </Carousel.Item>
                     </Carousel>
                     <div className="package_Conntent">
                        <p className='One_day_title'>
                          One Day Trip from Hogenakkal
                        </p>
                        <p className='package_con'>
                          In this trip we Cover More then 3 place's in single day. More about the place deatils click About Rs.1500
                        </p>
                        
                        <a href="#" className='book' onClick={handleShow} >About & Book</a>
                        <Offcanvas show={show} onHide={handleClose} placement='start' backdrop={false}>
                                  <Offcanvas.Header closeButton>
                                  <Offcanvas.Title ><p className='slider_title'>One Day trip From Hogenakkal</p></Offcanvas.Title>
                                  </Offcanvas.Header>
                                  <Offcanvas.Body>
                                      <p className='slide_cont_title'>Place List</p >
                                      <p className='slide_cont'>
                                        <ul>
                                          <li>Theerthamalai Temple</li>
                                          <li>Pennagram Village</li>
                                          <li>Hogenakkal Falls</li>
                                          <li>Mettur Dam</li>

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
      </div>
         
                
    </section>
  )
}

export default One_day_trip