import React from 'react';
import './Css/Chennai.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ch1 from '../img/Chennai.jpeg';
import ch2 from '../img/chennai1.jpeg';
import ch3 from '../img/chennai2.jpeg';
import ch4 from '../img/chennai3...jpeg';
import ch5 from '../img/chennai4.jpeg';

const Chennai = () => {
  return (
    <div className='con0' id='chennai'>
        <div className="con2">
            <h3>01.Chennai</h3>
            <div className='con2-1'>
                <img src={ch1} alt="" />
                <div className='p'>
                    <h5 className='ptitle'>"The Detroit Of India"</h5><br />
                    <p className='def'>  Formerly known as Madras, Chennai is the capital city of the state of Tamil Nadu, in the southern part of India. Located on the Coromandel coast of Bay of Bengal, Chennai is as dynamic as it is immersed in tradition. This capital of the south', is one among the four metropolitan siblings of India, having a rich cultural history which it perfectly balances with its metropolis lifestyle. </p>
                    
                    <p className='def'>
                    Amid its chaos of traffic and sweltering humid climate, Chennai is worth visiting for its temples steeped in south-Indian culture, British-era museums and monuments, culinary delights and Marina Beach (Second largest urban beach in the world). Chennai's skyline is famous for its towering skyscrapers, but the heart of Chennai has an old-world charm to it that refuses to be overshadowed.
                    </p>
                </div>
                
            </div>
            <div className="mvp">
                <p className='mvp'>Must Visited Place In Chennai</p>
            </div>
            <div className='card-place'>
                    <Card  style={{ width: '16rem', height: "25.5rem" }}>
                        <Card.Img variant="top" src={ch2} />
                        <Card.Body>
                            <Card.Title>Marina Beach</Card.Title>
                            <Card.Text>
                                Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the Bay of Bengal ...
                            </Card.Text> <br />
                            <Button variant="primary">Read More</Button> 
                        </Card.Body>
                    </Card>

                    <Card  style={{ width: '16rem', height: "25.5rem" }}>
                        <Card.Img variant="top" src={ch3} />
                        <Card.Body>
                            <Card.Title>MGR Flim City</Card.Title>
                            <Card.Text>
                                Having been established in the year 1994, a considerably new structure, the MGR Film city is managed ...
                            </Card.Text> <br />
                            <Button variant="primary">Read More</Button> 
                        </Card.Body>
                    </Card>

                    <Card  style={{ width: '16rem', height: "25.5rem" }}>
                        <Card.Img variant="top" src={ch4} />
                        <Card.Body>
                            <Card.Title>Marundeeswarar Temple</Card.Title>
                            <Card.Text>
                                    The magnificent
                                    Marundeeswarar Temple, in Tiruvanmiyur, near Chennai has the temple deity Shiva ...
                            </Card.Text> <br />
                            <Button variant="primary">Read More</Button> 
                        </Card.Body>
                    </Card>

                    <Card  style={{ width: '16rem', height: "25.5rem" }}>
                        <Card.Img variant="top" src={ch5} />
                        <Card.Body>
                            <Card.Title>Breezy Beach</Card.Title>
                            <Card.Text>
                                Breezy Beach lays in the remote and serene neighbourhood of Valmiki Nagar in Chennai. Being smaller and less polluted ...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
            </div>
        </div>
    </div>
  )
}

export default Chennai