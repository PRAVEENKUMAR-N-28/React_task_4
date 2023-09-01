import React from 'react';
import img1 from './img2/theni1.jpeg';
import img2 from './img2/theni2.jpeg';
import img3 from './img2/theni3.jpeg';
import './css/right.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Theni_9 = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <article className='part_3'>
          <div>
              <h4>09. Theni</h4>
              <p className="sub_title_1">
                  What is the best timr to visit:
              </p>
          </div>
          
          <section className='Content_1'>
              
              <div className="cont_1_1">
                  
                  <p>
                  In order to spend your vacation in the lap of nature in south India, no place would be better than the town of Cardamom - Theni. The best season to visit Theni is winter when the weather remains all pleasant and favourable for tourism. On the other hand, summer remains hot and monsoon receives a heavy rainfall which makes the two seasons not suitable for touring.
                  </p> <br />
                  <p>
                  Theni is known for having a salubrious climate throughout the year. The average temperature ranges between 15 degrees Celsius to 40 degrees Celsius. The best months to visit are from the month of December to February since the weather is pleasant and allows you to indulge in a number of outdoor activities.
                  </p>
              </div>
  
              <div className="card_1" >
                      <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                          <Modal.Dialog >
                              <Modal.Header closeButton>
                              <Modal.Title className='top'><p>More About Best Time To Travel To Theni</p></Modal.Title>
                              </Modal.Header>
  
                              <Modal.Body>
                                  <div className="center">
                                      <figure>
                                          <img src={img1} alt="" style={{height:"160px", width:"120px" , padding:'10px'}} />
                                          {/* <figcaption style={{textAlign:'center'}}>Landscape  <br />  source</figcaption> */}
                                      </figure>
                                      <figure>
                                          <img src={img2} alt="" style={{height:"160px", width:"120px"  , padding:'10px'}}/>
                                          {/* <figcaption style={{textAlign:'center'}}>Sea<br/> Source</figcaption> */}
                                      </figure>
                                      <figure>
                                          <img src={img3} alt="" style={{height:"160px", width:"120px"  , padding:'10px'}}/>
                                          {/* <figcaption style={{textAlign:'center'}}>Coast <br />  Source</figcaption> */}
                                      </figure>
                                  </div>
                              </Modal.Body>
  
                              <Modal.Footer>
                              <Button variant="secondary"onClick={handleClose}>Close</Button>
                              <Button variant="primary" onClick={handleShow}> Save changes </Button>
                              <Offcanvas show={show} onHide={handleClose} >
                                  <Offcanvas.Header closeButton>
                                  <Offcanvas.Title ><p className='slider_title'>Best Time To Visit In Theni</p></Offcanvas.Title>
                                  </Offcanvas.Header>
                                  <Offcanvas.Body>
                                      <p className='slide_cont_title'>Theni in Summer</p >
                                      <p className='slide_cont'>The summer season in Theni starts from the month of March and continues till May. The months are generally hot and not favourable to visit Theni. Temperature during these months ranges between 24°C and 42°C.</p><br/>

                                      <p className='slide_cont_title'>Theni in Winter</p >
                                      <p className='slide_cont'>December marks the beginning of winter season in Theni which ends in the month of February. The temperature during these months varies from 22°C to 32°C, and thus, the town witnesses a pleasant weather and make the season best to visit Theni.</p><br/>

                                      <p className='slide_cont_title'>Theni in Monsoon</p >
                                      <p className='slide_cont'>Monsoon in Theni strikes in the month of June and lasts until September. The town experiences a heavy rainfall during this time that fills the town with zest. Despite being at peak of its beauty, the town of Theni is not best to visit during monsoon.</p>
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

export default Theni_9