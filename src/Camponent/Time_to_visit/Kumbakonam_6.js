import React from 'react';
import './css/Left.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img1 from './img2/kumbakonam1.jpeg';
import img2 from './img2/kumbakonam2.jpeg';
import img3 from './img2/kumbakonam3.jpeg';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Kumbakonam_6 = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <article className='part_3_1'>
        <div>
            <h4>06. Kumbakonam</h4>
        </div>
        <section className='Content_2'>
            <div className="card_2">
                <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title className='top'><p>More About Best Time To Travel To Kumbakonam</p></Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                                <div className="center">
                                        <figure>
                                            <img src={img1} alt="" style={{height:"160px", width:"120px" , padding:'10px'}} />
                                            <figcaption style={{textAlign:'center'}}> Dawn <br />   source</figcaption>
                                        </figure>
                                        <figure>
                                            <img src={img2} alt="" style={{height:"160px", width:"120px"  , padding:'10px'}}/>
                                            <figcaption style={{textAlign:'center'}}>Steemit<br/> Source</figcaption>
                                        </figure>
                                        <figure>
                                            <img src={img3} alt="" style={{height:"160px", width:"120px"  , padding:'10px'}}/>
                                            <figcaption style={{textAlign:'center'}}>Holydham <br />  Source</figcaption>
                                        </figure>
                                </div>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" onClick={handleShow}>Save changes</Button>
                                <Offcanvas show={show} onHide={handleClose} placement='end'>
                                  <Offcanvas.Header closeButton>
                                  <Offcanvas.Title ><p className='slider_title'>Best Time To Visit In Kumbakonam</p></Offcanvas.Title>
                                  </Offcanvas.Header>
                                  <Offcanvas.Body>
                                      <p className='slide_cont_title'>Kumbakonam in Winter (October - February)</p >
                                      <p className='slide_cont'>The winters in Kumbakonam are pleasantly cold, with light sweaters helping you to survive the cold. The temperature ranges from 15 to 25 degrees Celcius, and the diurnal range of temperature isn't more than a maximum of 10 degrees Celcius. This season is most preferred by tourists to visit Kumbakonam, as exploring the city in this weather becomes comfortable and the temperature is pleasing most of the time during winter months.</p><br/>

                                      <p className='slide_cont_title'>Kumbakonam in Monsoon (June-August)</p >
                                      <p className='slide_cont'>The monsoon is associated with frequent and untimely shower spells in the region. The temperature drops down considerably after the scorching summers and the place witness a waste stretch of greenery as the rains give life to the flora of the region. The rains can though be problematic at times and can interfere with your exploration plans, but overall this season can also be preferred by tourists to pay a visit to Kumbakonam.</p><br/>

                                      <p className='slide_cont_title'>Kumbakonam in Summer (March-May)</p >
                                      <p className='slide_cont'>Summers in the Deccan region of the country is undeniable hot, and the scorching sun might be an unpleasant experience. The summers are usually arid and heated up, and the temperature goes up to 40 degrees Celcius during the day. The season is majorly avoided by tourists to plan a visit to Kumbakonam because of the overall weather conditions.</p>
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

export default Kumbakonam_6