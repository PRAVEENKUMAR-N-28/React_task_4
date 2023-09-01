import React from 'react';
import './css/Left.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img1 from './img2/ooty1.jpeg';
import img2 from './img2/ooty2.jpeg';
import img3 from './img2/ooty3.jpeg';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Ooty_4 = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <article className='part_3_1'>
        <div>
            <h4>04. Ooty</h4>
        </div>
        <section className='Content_2'>
            <div className="card_2">
                <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                    <Modal.Dialog >
                        <Modal.Header closeButton>
                            <Modal.Title className='top'><p>More About Best Time To Travel To Ooty</p></Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                                <div className="center">
                                        <figure>
                                            <img src={img1} alt="" style={{height:"160px", width:"120px" , padding:'10px'}} />
                                            <figcaption style={{textAlign:'center'}}> Mountine <br /> RailWay <br />   source</figcaption>
                                        </figure>
                                        <figure>
                                            <img src={img2} alt="" style={{height:"160px", width:"120px"  , padding:'10px'}}/>
                                            <figcaption style={{textAlign:'center'}}>Ooty Lake<br/> Source</figcaption>
                                        </figure>
                                        <figure>
                                            <img src={img3} alt="" style={{height:"160px", width:"120px"  , padding:'10px'}}/>
                                            <figcaption style={{textAlign:'center'}}>Trekking Ooty <br />  Source</figcaption>
                                        </figure>
                                </div>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" onClick={handleShow}>Save changes</Button>
                                <Offcanvas show={show} onHide={handleClose} placement='end'>
                                  <Offcanvas.Header closeButton>
                                  <Offcanvas.Title ><p className='slider_title'>Best Time To Visit In Ooty</p></Offcanvas.Title>
                                  </Offcanvas.Header>
                                  <Offcanvas.Body>
                                      <p className='slide_cont_title'>Ooty in Summer (March - June)</p >
                                      <p className='slide_cont'>Ooty experiences an average temperature that ranges between 23 degree Celsius and 31 degree Celsius, which is perfect for you to explore the sheer beauty of this place in full swing.</p><br/>

                                      <p className='slide_cont_title'>Ooty in Winter (October - March)</p >
                                      <p className='slide_cont'>With temperatures that stay below 15 degree Celsius, winters in Ooty are perfect to have a gala time. Each year, during January or February, Department of Tourism in Tamil Nadu hosts The Tea and Tourism Festival for three days. A vast range of tea leaves are displayed, and rows of tea stalls are put up for tasting and buying a wide variety of tea. In addition to this, these three days are packed with cultural shows and performances, which reverberate with the heritage of the Nilgiris.</p><br/>

                                      <p className='slide_cont_title'>Ooty in Monsoon (July-September)</p >
                                      <p className='slide_cont'>People who love rainfall and green grass beds laid over mountains can pack their bags and head straight to Ooty during the monsoon months, which lasts between June and September. Even though you are unlikely to experience the bright, warm sunshine, you will have a great time nevertheless.</p>
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
                  The best time to visit Ooty is throughout the year as the weather is pleasant and great for sightseeing. The temperature usually ranges from 5-15 degrees throughout the year with colder nights. However, the peak season is from October to June when the weather is pleasant and you can get involved in outdoor activities. Ooty can be visited during monsoons (if you don't mind the rain) when the freshly washed surroundings give Ooty an ethereal charm. The annual Tea and Tourism Festival attracts crowds in huge numbers to visit the place and have a great time in this wonderful place.
                  </p> <br />
                  <p>
                  The poised and elegant 'Queen of Hill Stations' welcomes you to the kingdom in the clouds. Individuals travel far and wide to partake in the awe-inspiring wonders of one of India's most beloved hill stations - Ootacamund or Ooty. Here, history and culture form a sweet medley, while nature sings to its own symphony. Colonial churches, Hindu temples, tribal museums and libraries brand the plains with stories.
                  </p>
              </div>

            </div>
        </section>
    </article>
  )
}

export default Ooty_4