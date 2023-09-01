import React from 'react';
import img1 from './img2/kanyakumari1.jpeg';
import img2 from './img2/kanyakumari2.jpeg';
import img3 from './img2/kanyakumari3.jpeg';
import './css/right.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Kanyakumari_5 = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <article className='part_3'>
          <div>
              <h4>05. Kanyakumari</h4>
              <p className="sub_title_1">
                  What is the best timr to visit:
              </p>
          </div>
          
          <section className='Content_1'>
              
              <div className="cont_1_1">
                  
                  <p>
                    The months from October until February are considered the best time to visit Kanyakumari, as the weather remains calm and pleasant. Although this coastal region is a bit humid, this is the best time to try out some adventurous water sports, going on sightseeing and outings, undertaking beach activities and savouring the spectacular sunset views. With the beginning of winters in November, Kanyakumari also hosts many festivals during this month, for instance the Cape Festival.
                  </p> <br />
                  <p>
                  Kanyakumari is the southernmost tip of India. As Kanyakumari is close to the seas, the expanse experiences a tropical coastal climate. There are not many variations in the seasons, as there is an overall humidity and seasonal rain during the year.
                  </p>
              </div>
  
              <div className="card_1" >
                      <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                          <Modal.Dialog >
                              <Modal.Header closeButton>
                              <Modal.Title className='top'><p>More About Best Time To Travel To Kanyakumari</p></Modal.Title>
                              </Modal.Header>
  
                              <Modal.Body>
                                  <div className="center">
                                      <figure>
                                          <img src={img1} alt="" style={{height:"160px", width:"120px" , padding:'10px'}} />
                                          <figcaption style={{textAlign:'center'}}>Landscape  <br />  source</figcaption>
                                      </figure>
                                      <figure>
                                          <img src={img2} alt="" style={{height:"160px", width:"120px"  , padding:'10px'}}/>
                                          <figcaption style={{textAlign:'center'}}>Sea<br/> Source</figcaption>
                                      </figure>
                                      <figure>
                                          <img src={img3} alt="" style={{height:"160px", width:"120px"  , padding:'10px'}}/>
                                          <figcaption style={{textAlign:'center'}}>Coast <br />  Source</figcaption>
                                      </figure>
                                  </div>
                              </Modal.Body>
  
                              <Modal.Footer>
                              <Button variant="secondary"onClick={handleClose}>Close</Button>
                              <Button variant="primary" onClick={handleShow}> Save changes </Button>
                                <Offcanvas show={show} onHide={handleClose} >
                                  <Offcanvas.Header closeButton>
                                  <Offcanvas.Title ><p className='slider_title'>Best Time To Visit In Kanyakumari</p></Offcanvas.Title>
                                  </Offcanvas.Header>
                                    <Offcanvas.Body>
                                      <p className='slide_cont_title'>Kanyakumari in Winters (October to March)</p >
                                      <p className='slide_cont'>Winters in Kanyakumari are the best time for sightseeing and travelling around the place. Attractions such as Vavathurai, Chitharal Hill Temple and Thiruvalluvar Statue are popular among the tourists. November is a very favourable month for visiting Kanyakumari as the weather is pleasant with clear skies and less humidity. Temperatures vary from 15 degree celcius to 35 degree celcius. It is also the perfect time for indulging in beach activities like sunbathing, swimming and surfing. December to February are the peak seasons; hence the tourism sector gets maximum revenue during this time.</p><br/>

                                      <p className='slide_cont_title'>Kanyakumari in Summers (April to June)</p >
                                      <p className='slide_cont'>Kanyakumari experiences moderate weather during summers, with temperatures ranging from 22 degrees to 35 degrees Celcius. During this period the weather is humid; however, the climatic conditions are apt for visiting the various attractions of the place including Vivekananda Rock, Vattakottai Fort and Gandhi Museum. Apart from this, the various beach activities are open throughout summer, so tourists can indulge in outdoor visits, sea bathing and surfing. Although early summers are an ideal time to visit Kanyakumari, the month of April gets considerably hot which is why this month is not preferred for travel. However, the place gets vacant with less crowd and cheaper accomodation - a perfect time for budget travellers.</p><br/>
                                      <p className='slide_cont_title'>Kanyakumari in Monsoons (July to September)</p >
                                      <p className='slide_cont'>Monsoons in Kanyakumari starts in June which helps in tremendously lowering the temperature. However, the level of humidity keeps rising making it difficult to travel around. If you're a pluviophile, then the month of August is best recommended as the atmosphere is pleasant with a slight drizzle that enhances the beauty of this coast. Apart from its humidity, this is a good time to visit during monsoons. The frequent showers put a hold on sightseeing which affects the footfall in Kanyakumari in September; however, the Cape Festival takes place in October, and by this time tourists from around India visit Kanyakumari.</p>
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

export default Kanyakumari_5