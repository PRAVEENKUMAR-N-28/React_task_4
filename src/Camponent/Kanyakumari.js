import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import km1 from '../img/Kanyakumari.jpeg';
import km2 from '../img/kanyakumari1.jpeg';
import km3 from '../img/kanyakumari2.jpeg';
import km4 from '../img/kanyakumari3.jpeg';
import km5 from '../img/kanyakumari4.jpeg';
const Kanyakumari = () => {
  return (
    <div className='con0' id='Kanyakumari'>
        <div className="con2">
            <h3>05.Kanyakumari</h3>
            <div className='con2-1'>
                <img src={km1} alt="" />
                <div className='p'>
                    <h5 className='ptitle'>"Cape Comorin or The Land's End"</h5><br />
                    <p className='def'> Kanyakumari Tourism Bordered by the three seas - Arabian, Indian and the Bay of Bengal, Kanyakumari is the southernmost tip of the Indian Peninsula. A small coastal town in the state of Tamil Nadu, Kanyakumari was earlier known as Cape Comorin. </p>
                    
                    <p className='def'>
                    Kanyakumari offers the marvellous confluence of the Bay of Bengal, the Arabian Sea and the Indian ocean meeting together at a point. But, this is not a miracle, the miracle lies in the beauty that the water of three seas does not mix, you can clearly distinguish between the turquoise blue, deep blue and sea green waters of the three seas. To enjoy the best view of sunset and sunrise, you can visit the Triveni Sangam point and the famous View tower. The town has a mountainous terrain with elevated patches of hills, coconut trees and lined with paddy fields.
                    </p>
                </div>
                
            </div>
            <div className="mvp">
                <p className='mvp'>Must Visited Place In Kanyakumari</p>
            </div>
            <div className='card-place'>
                    <Card  style={{ width: '16.5rem', height: "24rem" }}>
                        <Card.Img variant="top" src={km2} />
                        <Card.Body>
                            <Card.Title>Kanyakumari Beach</Card.Title>
                            <Card.Text>
                                Located in the southernmost part of India, Kanyakumari beach with its beautiful huechanging beaches ...

                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{ width: '16.5rem', height: "24rem" }}>
                        <Card.Img variant="top" src={km3} />
                        <Card.Body>
                            <Card.Title>Vivekananda Memorial</Card.Title>
                            <Card.Text>
                                The magnificent Vivekananda Rock Memorial is located on a small island off Kanyakumari. It has the picturesque ...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{ width: '16.5rem', height: "24rem" }}>
                        <Card.Img variant="top" src={km4} style={{ height:'10.8rem' }}/>
                        <Card.Body>
                            <Card.Title>Thiruvalluvar Status</Card.Title>
                            <Card.Text>
                            Dedicated to the accomplished philosopher and poet Thiruvalluvar, this beautiful statue finds itself...                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{ width: '16.5rem', height: "24rem" }}>
                        <Card.Img variant="top" src={km5} />
                        <Card.Body>
                            <Card.Title>Thirparappu Falls</Card.Title>
                            <Card.Text>
                                Located at a distance of about 55 kilometers from Kanyakumari, the cascading waters of the Thirparappu...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
            </div>
              
        </div>
    </div>
  )
}

export default Kanyakumari