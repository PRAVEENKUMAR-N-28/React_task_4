import React from 'react';
import './css/Left.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img1 from './img2/rameshwaram1.jpeg';
import img2 from './img2/rameshwaram2.jpeg';
import img3 from './img2/rameshwaram3.jpeg';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Rameshwaran_2 = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <article className='part_3_1'>
        <div>
            <h4>02. Rameshwaram</h4>
        </div>
        <section className='Content_2'>
            <div className="card_2">
                <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title className='top'><p>More About Best Time To Travel To Rameshwaram</p></Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                                <div className="center">
                                        <figure>
                                            <img src={img1} alt="" style={{height:"160px", width:"120px" , padding:'10px'}} />
                                            <figcaption style={{textAlign:'center'}}>RailWay <br /> Bridge  <br />  source</figcaption>
                                        </figure>
                                        <figure>
                                            <img src={img2} alt="" style={{height:"160px", width:"120px"  , padding:'10px'}}/>
                                            <figcaption style={{textAlign:'center'}}>Lighthouse<br/> Source</figcaption>
                                        </figure>
                                        <figure>
                                            <img src={img3} alt="" style={{height:"160px", width:"120px"  , padding:'10px'}}/>
                                            <figcaption style={{textAlign:'center'}}>Pligrims <br /> Temple <br />  Source</figcaption>
                                        </figure>
                                </div>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" onClick={handleShow}>Save changes</Button>
                                <Offcanvas show={show} onHide={handleClose} placement='end'>
                                  <Offcanvas.Header closeButton>
                                  <Offcanvas.Title ><p className='slider_title'>Best Time To Visit In Rameshwaram</p></Offcanvas.Title>
                                  </Offcanvas.Header>
                                  <Offcanvas.Body>
                                      <p className='slide_cont_title'>Rameshwaram in Winter (December-February)
</p >
                                      <p className='slide_cont'>Winters in Rameshwaram, which last from October all the way to March, is said to be the peak season for visiting Rameshwaram if you are visiting the place as a tourist and not a pilgrim. The temperature during these months drops considerably than the other two seasons, with it ranging from 20 degree Celsius to 30 degree Celsius. The town is also blessed with chilly winds which make the atmosphere even more amicable. This season, therefore, makes for the best time for tourists to take part in a plethora of outdoor activities and enjoy their stay. During December, Rameshwaram also hosts the festival of Arudhra Darshanam which is essentially a festival that celebrates an aspect of Lord Shiva. This is said to be one of the most celebrated festivals amongst all the ones celebrated in Rameshwaram.</p><br/>

                                      <p className='slide_cont_title'>Rameshwaram in Monsoon (July - October)</p >
                                      <p className='slide_cont'>Monsoons in Rameshwaram is an The experience temperatures ranging from 28 degree D Celsius to 35 degree Celsius. These temperatures are similar to those during the summers, as is the e climate except the small relief of humidity fl received due to short but effective downpours. pi Though monsoons are humid, August-October offers a good climate to explore Rameswaram as temperatures drop down during this time Suns...</p><br/>

                                      <p className='slide_cont_title'>Rameshwaram in Winter (December-February)</p >
                                      <p className='slide_cont'>Winters in Rameshwaram, which last from October all the way to March, is said to be the peak season for visiting Rameshwaram if you are visiting the place as a tourist and not a ve pilgrim. The temperature during these months drops considerably than the other two seasons, ths with it ranging from 20 degree Celsius to 30 degree Celsius. The town is also blessed with chilly winds which make the atmosphere even more amicable. This season, therefore, makes for the best time for tourists to take part in a plethora of outdoor activities and enjoy their stay. During December, Rameshwaram also hosts the festival of Arudhra Darshanam which is essentially a festival that celebrates in Rameshwaram.</p>
                                  </Offcanvas.Body>
                              </Offcanvas>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            </div>
            <div>
            <p className="sub_title_1">
                  What is the best timr to visit:
            </p>            
            <div className="cont_2_1">
                
                  <p>
                  The best time to visit Rameshwaram is from October to April. However, as far as the weather goes, Rameshwaram experiences tropical climate which means the though the seasons greatly vary, the temperatures may not. This makes Rameshwaram a destination which can be visited all year round. Winters (November to February) are cool and temperature comes down to 17 degrees Celcius. This is the most pleasant season for sightseeing and visiting neighbourhoods. The Monsoons (July to September) are humid with average rainfalls, but, the scenic view of the coastal region during these months is enjoyable.
                  </p> <br />
                  <p>
                  Dotted with temples along the seashore and located on a beautiful island, rumour has it that this is where Lord Rama built the bridge across the ocean to reach Sri Lanka. One of the holiest places in the country, pilgrims flocks to this town to pay their respects and worship Lord Shiva. With a tropical climate throughout the year, this hamlet can pretty much be visited at any time.
                  </p>
              </div>

            </div>
        </section>
    </article>
  )
}

export default Rameshwaran_2