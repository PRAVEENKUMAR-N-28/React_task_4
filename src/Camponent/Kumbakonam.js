import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import kum1 from '../img/Kumbakonam.jpeg';
import kum2 from '../img/kumbakonam1.jpeg';
import kum3 from '../img/kumbakonam2.jpeg';
import kum4 from '../img/kumbakonam3.jpeg';
import kum5 from '../img/kumbakonam4.jpeg';

const Kumbakonam = () => {
  return (
    <div className='con0' id='kumbakonam'>
        <div className="con2">
            <h3>06.Kumbakonam</h3>
            <div className='con2-1'>
                <img src={kum1} alt="" />
                <div className='p'>
                    <h5 className='ptitle'>"The Cambridge of India"</h5><br />
                    <p className='def'>  Kumbakonam Tourism Sandwiched between two great rivers of southern India. Cauvery and Arsala, Kumbakonam is a gorgeous temple town In the heart of the Thanjavur district of Tamil Nadu The town is a place for the lovers of history and those seeking to understand India's cultural roots and Hinduism. </p>
                    
                    <p className='def'>
                        The town is also known for its grand festival called Mahamaham festival which is celebrated every twelve years at the Mahamaham Tank. The town is one of the oldest in Indian history, and known for its famed temples Chola heritage and also for its marvelous educational institutes. The town is one of the oldest in Indian history, and known for its famed temples Chola heritage and also for its marvelous educational institutes.
                    </p>
                </div>
                
            </div>
            <div className="mvp">
                <p className='mvp'>Must Visited Place In Kumbakonam</p>
            </div>
            <div className='card-place'>
                    <Card  style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={kum2} />
                        <Card.Body>
                            <Card.Title>Sarangapani Temple</Card.Title>
                            <Card.Text>
                                Sarangapani Temple, an ancient temple dedicated to Lord Vishnu, is located in the town of Kumbakonam...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={kum3} />
                        <Card.Body>
                            <Card.Title>Nageswaran Temple</Card.Title>
                            <Card.Text>
                                Constructed as a chariot, the Nageswaran temple is an important Shaivite temple. A piece of genius Chola...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={kum4} style={{ height:'12rem' }} />
                        <Card.Body>
                            <Card.Title>Adi Kumbeshwara Temple</Card.Title>
                            <Card.Text>
                                Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={kum5} style={{ height:'12rem' }} />
                        <Card.Body>
                            <Card.Title>Airavatesvara Temple</Card.Title>
                            <Card.Text>
                            Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara    Temple is a revered...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
  )
}

export default Kumbakonam