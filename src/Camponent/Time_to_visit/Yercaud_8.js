import React from 'react';
import './css/Left.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img1 from './img2/yercaud1.jpeg';
import img2 from './img2/yercaud2.jpeg';
import img3 from './img2/yercaud3.jpeg';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Yercaud_8 = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <article className='part_3_1'>
        <div>
            <h4>08. Yercaud</h4>
        </div>
        <section className='Content_2'>
            <div className="card_2">
                <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title className='top'><p>More About Best Time To Travel To Yercaud</p></Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                                <div className="center">
                                        <figure>
                                            <img src={img1} alt="" style={{height:"160px", width:"120px" , padding:'10px'}} />
                                            <figcaption style={{textAlign:'center'}}> Easemytrip <br />   source</figcaption>
                                        </figure>
                                        <figure>
                                            <img src={img2} alt="" style={{height:"160px", width:"120px"  , padding:'10px'}}/>
                                            <figcaption style={{textAlign:'center'}}>Oyorooms<br/> Source</figcaption>
                                        </figure>
                                        <figure>
                                            <img src={img3} alt="" style={{height:"160px", width:"120px"  , padding:'10px'}}/>
                                            <figcaption style={{textAlign:'center'}}>Hiveminer <br />  Source</figcaption>
                                        </figure>
                                </div>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" onClick={handleShow}>Save changes</Button>
                                <Offcanvas show={show} onHide={handleClose} placement='end'>
                                  <Offcanvas.Header closeButton>
                                  <Offcanvas.Title ><p className='slider_title'>Best Time To Visit In Yercaud</p></Offcanvas.Title>
                                  </Offcanvas.Header>
                                  <Offcanvas.Body>
                                      <p className='slide_cont_title'>Yercaud in Summer (March - June)</p >
                                      <p className='slide_cont'>With temperatures that hardly move out of the range between 24 degree Celsius and 28 degree Celsius, Yercaud experiences mild summers during March to June. The best places to visit during this season are the enchanting Emerald Lake, Killiyur Falls, Silk Farm, and Lady?s Seat. Apart from these attractions, one particular festival which allures tourists from every nook of the world is the Yercaud Summer Festival. Held in May, it is an annual festival which keeps everyone on their toes until its arrival. Usually taking place for five days, the enrapturing summer event is as grand as it gets! From sophisticated folk dances to bewitching musical concerts, from captivating cultural competitions to horse riding tournaments, this event is a treasure trove of a smorgasbord of wonderful activities.</p><br/>

                                      <p className='slide_cont_title'>Yercaud in Winter (November - February)</p >
                                      <p className='slide_cont'>Yercaud experiences a delightful climate from October to February. The average temperature which stays between a pleasant 10 degree Celsius and 15 degree Celsius is ideal for leisurely nature walks as well as adventure activities. Do not miss out on the Bear?s Cave, Pagoda Point, Shevaroy Temple, and Anna Park, if you plan to visit this beautiful place during winter.</p><br/>

                                      <p className='slide_cont_title'>Yercaud in Monsoon (July-September)</p >
                                      <p className='slide_cont'>Yercaud experiences a hot and humid monsoon with temperatures that range between 20 degree Celsius and 25 degree Celsius from June to September. At this time, the coffee plantations look ethereal after being washed by the rain. The Botanical Garden, Raja Rajeshwari Temple, and the Sri Chakra Mahameru Temple are some of the places you should visit during this time.</p>
                                  </Offcanvas.Body>
                              </Offcanvas>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            </div>
            <div>
            <p className="sub_title_1">
                  What is the best time to visit:
            </p>            
            <div className="cont_2_1">
                
                  <p>
                  Located in the tropical area and the Deccan region of the country, Kumbakonam has the typical tropical climate, with pleasant winters and hot and dry summers. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable time to pay a visit. The summers are hot and largely uncomfortable for one to visit the place.
                  </p> <br />
                  <p>
                    Kumbakonam has a typical tropical climate. Regions around the Cauvery Delta are rather hot, but Kumbakonam has moderate weather throughout the year and summers are said to be far better than in hot coastal cities like Chennai. All said, there are numerous places to visit in Kumbakonam and it were better you choose the most ideal time for a visit. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable time to pay a visit.
                  </p>
              </div>

            </div>
        </section>
    </article>
  )
}

export default Yercaud_8