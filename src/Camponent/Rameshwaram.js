import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import rw1 from '../img/Rameshwaran.jpeg';
import rw2 from '../img/rameshwarem1.jpeg';
import rw3 from '../img/rameshwarem2.jpeg';
import rw4 from '../img/Rameshwaram3..jpeg';
import rw5 from '../img/rameshwarem4.jpeg';

const Rameshwaram = () => {
  return (
    <div className='con0' id='Rameshwaram'>
        <div className="con2">
            <h3>02.Rameshwaram</h3>
            <div className='con2-1'>
                <img src={rw1} alt="" />
                <div className='p'>
                    <h5 className='ptitle'>"The Bridge on the Indian Ocean"</h5><br />
                    <p className='def'>  Rameshwaram is located on a beautiful island in the South Indian state of Tamil Nadu. It is separated by a small Pamban channel from Sri Lanka. According to Hindu mythology, this is the place where Lord Rama created a bridge across the sea to Sri Lanka. </p>
                    
                    <p className='def'>
                    Renowned for its magnificent prakaras with massive sculptured pillars on either side, The Ramanathaswamy Temple houses the longest corridor in the world. Agniteertham is famous for its sacred waters and Pilgrims perform poojas in honour of their ancestors at this seashore. The five-faced Hanuman Temple holds the floating stone which was used to build the bridge between India and Sri Lanka. Rameshwaram has the first sea bridge connecting the town of Mandapam with Pamban Island, and Rameswaram.
                    </p>
                </div>
                
            </div>
            <div className="mvp">
                <p className='mvp'>Must Visited Place In Rameshwaram</p>
            </div>
            <div className='card-place'>
                    <Card  style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={rw2} />
                        <Card.Body>
                            <Card.Title>Dhanushkodi Temple</Card.Title>
                            <Card.Text>
                                Dhanushkodi was until a few years ago a wonderful temple on the southern tip of India. However, due to a ...
                            </Card.Text> <br />
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={rw3} />
                        <Card.Body className='c'>
                            <Card.Title>Lakshmana Temple</Card.Title>
                            <Card.Text>
                                Lakshmana Tirtham had been constructed in the loving memory of Lord Lakshman, brother of Lord Rama. In order ...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={rw4} />
                        <Card.Body>
                            <Card.Title>Rameshwaram Temple</Card.Title>
                            <Card.Text>
                                A perfect blend of mindboggling architecture and spiritual significance,
                                Rameshwaram Temple, also ...
                            </Card.Text> <br />
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={rw5} />
                        <Card.Body>
                            <Card.Title>Villoondi Tirtham</Card.Title>
                            <Card.Text>
                            Villoondi Tirtham is a beach
                            which is also considered a
                            Close sacred natural water body and a favourite amongst tourists ...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
            </div>
        </div>
    </div>
  )
}

export default Rameshwaram