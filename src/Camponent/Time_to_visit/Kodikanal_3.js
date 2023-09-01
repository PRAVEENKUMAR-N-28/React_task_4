import React from 'react';
import img1 from './img2/kodaikanal1.jpeg'
import img2 from './img2/kodaikanal2.jpeg';
import img3 from './img2/kodaikanal3.jpeg';
import './css/right.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Kodikanal_3 = () => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <article className='part_3'>
        <div>
            <h4>03. Kodaikanal</h4>
            <p className="sub_title_1">
                What is the best timr to visit:
            </p>
        </div>
        
        <section className='Content_1'>
            
            <div className="cont_1_1">
                
                <p>
                  The best time to visit Kodaikanal is from October to June, however, the weather remains a bit chilly during December and January. Ideal for a vacation in each season, Kodaikanal is the most colourful in summers and most picturesque in monsoons. If your trip consists of an itinerary that includes a lot of sights to see, then summer is the best time to visit this place and those who wish to go for trekking, plan your trip to Kodaikanal between October and February.
                </p> <br />
                <p>
                  Kodaikanal is lovingly referred to as The Princess of Hill stations. And boy, does it take this title seriously! Built around an exotic star shaped lake, the region exudes ethereal charm like that of fairy-tales. The best time to visit Kodaikanal is from October - June, however, the weather remains a bit chilly during December and January.
                </p>
            </div>

            <div className="card_1" >
                    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                        <Modal.Dialog >
                            <Modal.Header closeButton>
                            <Modal.Title className='top'><p>More About Best Time To Travel To Kodaikanal</p></Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <div className="center">
                                    <figure>
                                        <img src={img1} alt="" style={{height:"160px", width:"120px" , padding:'10px'}} />
                                        <figcaption style={{textAlign:'center'}}>Upper Lake  <br />  source</figcaption>
                                    </figure>
                                    <figure>
                                        <img src={img2} alt="" style={{height:"160px", width:"120px"  , padding:'10px'}}/>
                                        <figcaption style={{textAlign:'center'}}>Kodikanal,  <br/> Lake <br/> Source</figcaption>
                                    </figure>
                                    <figure>
                                        <img src={img3} alt="" style={{height:"160px", width:"120px"  , padding:'10px'}}/>
                                        <figcaption style={{textAlign:'center'}}>Pillar Rocks  <br />  Source</figcaption>
                                    </figure>
                                </div>
                            </Modal.Body>

                            <Modal.Footer>
                            <Button variant="secondary"onClick={handleClose}>Close</Button>
                            <Button variant="primary" onClick={handleShow}> Save changes </Button>
                            <Offcanvas show={show} onHide={handleClose} >
                                <Offcanvas.Header closeButton>
                                <Offcanvas.Title ><p className='slider_title'>Best Time To Visit In Kodaikanal</p></Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <p className='slide_cont_title'>Kodaikanal in Summer (March-June)</p >
                                    <p className='slide_cont'>Summers (March to June) in Kodaikanal is ideal with comfortable 20 degree Celsius to 32 degree Celsius temperature and flowers in full bloom.The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art- works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May.</p><br/>
                                    <p className='slide_cont_title'>Kodaikanal in Winter (December-February)</p >
                                    <p className='slide_cont'>Summers (March to June) in Kodaikanal is ideal with comfortable 20 degree Celsius to 32 degree Celsius temperature and flowers in full bloom. The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art- works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May.</p><br/>
                                    <p className='slide_cont_title'>Kodaikanal in Monsoon (June-September)</p >
                                    <p className='slide_cont'>With a temperature that rarely falls below 8 degree Celsius, winter in Kodaikanal (between December and February) is the best time to enjoy various treks, and attend the famous Pongal festival celebrated during January.</p>
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

export default Kodikanal_3