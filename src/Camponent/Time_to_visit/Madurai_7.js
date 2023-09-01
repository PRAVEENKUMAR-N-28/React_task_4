import React from 'react';
import img1 from './img2/madurai1.jpeg';
import img2 from './img2/madurai2.jpeg';
import img3 from './img2/madurai3.jpeg';
import './css/right.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Madurai_7 = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <article className='part_3'>
          <div>
              <h4>07. Maduri</h4>
              <p className="sub_title_1">
                  What is the best timr to visit:
              </p>
          </div>
          
          <section className='Content_1'>
              
              <div className="cont_1_1">
                  
                  <p>
                  October to March is the best time to visit Madurai. With a hot and dry climate for most of the year, Madurai is best visited during the winter season. The town is known for its ancient temples and other architectural and religious masterpieces and receives a generous crowd of people throughout the year. Madural is the most fascinating and welcoming during the months between October and March which coincides with its winter season.
                  </p> <br />
                  <p>
                  Madurai is one of the oldest culturally vibrant cities of India. Its historical places and temples have a steady flow of tourists from all around the world.
                  </p>
              </div>
  
              <div className="card_1" >
                      <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                          <Modal.Dialog >
                              <Modal.Header closeButton>
                              <Modal.Title className='top'><p>More About Best Time To Travel To Maduri</p></Modal.Title>
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
                                  <Offcanvas.Title ><p className='slider_title'>Best Time To Visit In Maduri</p></Offcanvas.Title>
                                  </Offcanvas.Header>
                                  <Offcanvas.Body>
                                      <p className='slide_cont_title'>Madurai in Winter (December-February)</p >
                                      <p className='slide_cont'>Many locals look forward to the winter season in Madurai due to the relief it brings from the summers. The season lasts from December to February. The temperature during the winter months ranges from 20 degree Celsius to 29 degree Celsius. The season is characterised by moderately cool temperatures which make travelling around the city a pleasant experience for all individuals. Pongal, a widely celebrated festival is regarded as extremely special in Madurai. The festival lasts for three days and comprises of praying for a good harvest by locals and farmers alike. Other religious festivals are also celebrated with great vigour. However, hotel prices may climb up as this is the peak tourist season.</p><br/>

                                      <p className='slide_cont_title'>Madurai in Monsoon (June-August)</p >
                                      <p className='slide_cont'>Monsoon season in Madurai lasts from June to August. Although the monsoon season continues for a smaller amount of time, the south-west monsoon winds bring in a large amount of rainfall which is extremely heavy. This rainfall also makes the weather gloomy but still makes the city beautiful as the nature around Madural mainly benefits from this rain. This is the perfect time to visit Madurai for people who love greenery and the lush natural surroundings.</p><br/>

                                      <p className='slide_cont_title'>Madurai in Summer (March-July)</p >
                                      <p className='slide_cont'>The summer season in Madurai lasts from March to May. The temperatures during this season range from 24 degree Celsius to 34 degree Celsius. This means that the weather in Madurai during these months is uncharacteristically hot. It is also really dry which makes the heat more noticeable and discourages travellers to visit. The summer season is, therefore, an offseason for Madurai, and the crowds are comparatively less as well.</p>
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

export default Madurai_7