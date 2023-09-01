import React from 'react';
import c1 from './img2/chennai1.jpeg';
import c2 from './img2/chennai2.jpeg';
import c3 from './img2/chennai3.jpeg';
import './css/right.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';






const Chennai_1 = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <article className='part_3'>
        <div>
            <h4>01. Chennai</h4>
            <p className="sub_title_1">
                What is the best timr to visit:
            </p>
        </div>
        
        <section className='Content_1'>
            
            <div className="cont_1_1">
                
                <p>
                    October to February during the winters and the pre-monsoons season is the best time to visit Chennai. This time of the year is considered as the best time to explore the metropolitan city as summers are scorching and monsoons bring torrential downpours and cyclones. Its geographical location on the beautiful coastline mostly keeps the city's weather hot and humid.
                </p> <br />
                <p>
                    Chennai is one of the cities that has successfully blended the modern, traditional and sides with ease. The city welcomes everyone who wants to seek a soulful and spiritual connection but also those who love shopping for sarees and enjoy good food. There is no conundrum in Chennai when you visit. It's all about the moment, whether you decide to take a stroll down Marina Beach.
                </p>
            </div>

            <div className="card_1" >
                    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                        <Modal.Dialog >
                            <Modal.Header closeButton>
                            <Modal.Title className='top'><p>More About Best Time To Travel To Chennai</p></Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <div className="center">
                                    <figure>
                                        <img src={c1} alt="" style={{height:"160px", width:"120px" , padding:'10px'}} />
                                        <figcaption style={{textAlign:'center'}}>Chennai, <br /> India<br />  source</figcaption>
                                    </figure>
                                    <figure>
                                        <img src={c2} alt="" style={{height:"160px", width:"120px"  , padding:'10px'}}/>
                                        <figcaption style={{textAlign:'center'}}>Chennai,   Kathipara Source</figcaption>
                                    </figure>
                                    <figure>
                                        <img src={c3} alt="" style={{height:"160px", width:"120px"  , padding:'10px'}}/>
                                        <figcaption style={{textAlign:'center'}}>Chennai, <br />  Beach<br />  Source</figcaption>
                                    </figure>
                                </div>
                            </Modal.Body>

                            <Modal.Footer>
                            <Button variant="secondary"onClick={handleClose}>Close</Button>
                            <Button variant="primary" onClick={handleShow}> Save changes </Button>
                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                <Offcanvas.Title ><p className='slider_title'>Best Time To visit In Chennai</p></Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <p className='slide_cont_title'>Chennai in Winters (November - February)</p >
                                    <p className='slide_cont'>Winters, the best time to visit Chennai, begin in November and last till February. Even the transitional month of October is quite good for exploring the city. The weather is quite pleasant with the maximum temperature hovering around 30°C and the minimum around 22 deg * C Its proximity to the coastline also results in occasional rains, but it will not be something that will hamper travel plans to a great extent. Kapaleeshwarar temple, Government Museum, Fort St George, St. Andrews Church, Fort Museum, Nalli Silks, Kalakshetra Foundation, Vivekananda House etc. are some of the attractions that can be seen when in Chennai. The season is also famous for the array of festivals organised in the city like the Dance and Music Festival in December, Travel & Tourism Fair and Pongal in January and the Natyanjali Dance Festival held in February/ March. These events are traditional and important celebrations of Chennai and its culture and must not be missed when there.</p><br/>
                                    <p className='slide_cont_title'>Chennai in Summers (March - June)</p >
                                    <p className='slide_cont'>March marks the onset of the summer season in Chennai. It lasts till June and visiting the city during this time is not for the faint- hearted, some say. The days are blazing hot with the temperatures soaring as high as 39°C and the nights are equally warm with the minimum hovering around 27 deg * C Exploring the cityscape during this time of the year is an extremely exhausting affair and is, therefore, not advised to tourists.</p><br/>
                                    <p className='slide_cont_title'>Chennai in Monsoons (July-September)</p >
                                    <p className='slide_cont'>Chennai is susceptible to heavy downpours and cyclones between the months of July and September. These months mark the monsoon season in the region and is considered off-season as tourism does not really thrive here. The extreme rainfalls and strong winds could prove to be a hindrance to sightseeing and, therefore, the monsoon season is not recommended to tourists. The hotel tariffs, however, drop drastically during the season, making it a decent option for budget travellers. In case one has to visit Chennai, they may want to plan a trip at the onset of the season when the showers are moderate and allow travelling through the city.</p>
                                </Offcanvas.Body>
                            </Offcanvas>
                            </Modal.Footer>
                            
                        </Modal.Dialog>

                        
                    </div>
            </div>
           
           
        </section>
    </article>
  )
}





export default Chennai_1