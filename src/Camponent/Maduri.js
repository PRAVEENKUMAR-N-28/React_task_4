import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import md1 from '../img/Madurai.jpeg';
import md2 from '../img/madurai1..jpeg';
import md3 from '../img/madurai2.jpeg';
import md4 from '../img/madurai3..jpeg';
import md5 from '../img/madurai4..jpeg';


const Maduri = () => {
  return (
    <div className='con0' id='madurai'>
        <div className="con2">
            <h3>07.Madurai</h3>
            <div className='con2-1'>
                <img src={md1} alt="" />
                <div className='p'>
                    <h5 className='ptitle'>"The Lotus City"</h5><br />
                    <p className='def'>  Madurai Tourism Madural the cultural capital of Tamil Nadu is one of the oldest continuously inhabited cities of India. Ruled by Pandya kings for the longest time in its history, it is called as the Lotus City as it was planned and built in the shape of a lotus. Madurai is known for Meenakshi Amman Temple, dedicated to the goddess Meenakshi with a sanctum for her consort Sundareshwarar. </p>
                    
                    <p className='def'>
                        There are many other ancient temples in Madurai including Thiruparankundram. It is one of the important old temples dedicated to Lord Muruga(Karthikeya) and is located on a hillock approximately km from the city. Having trade ties with ancient Rome, the place holds great cultural heritage. With bustling bazaars and fantastic street food Madura fai heritage walks conducted throughout the day.
                    </p>
                </div>
                
            </div>
            <div className="mvp">
                <p className='mvp'>Must Visited Place In Madurai</p>
            </div>
            <div className='card-place'>
                    <Card  style={{ width: '16.5rem', height: "22.5rem" }}>
                        <Card.Img variant="top" src={md2} />
                        <Card.Body>
                            <Card.Title>Vaigai Dam</Card.Title>
                            <Card.Text>
                                Vaigai Dam, a magnificent human-made structure, is constructed over River Vaigai, near Andipatti, Theni...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{width: '16.5rem', height: "22.5rem" }}>
                        <Card.Img variant="top" src={md3} />
                        <Card.Body>
                            <Card.Title>Meghamalai</Card.Title>
                            <Card.Text>
                                Often known as the "High Wavy Mountains", Meghamalai is a petit yet beautiful place located in the...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{width: '16.5rem', height: "22.5rem" }}>
                        <Card.Img variant="top" src={md4} />
                        <Card.Body>
                            <Card.Title>Samanar Hills</Card.Title>
                            <Card.Text>
                                Located in Keelakuyilkudi village near Madurai, Samanar Hills or Šamanar Malai is a beautiful hill rock...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{width: '16.5rem', height: "22.5rem" }}>
                        <Card.Img variant="top" src={md5} />
                        <Card.Body>
                            <Card.Title>Thirumalai Nayakar</Card.Title>
                            <Card.Text>
                                Thirumalai Nayakar Palace was erected in 1636 AD in the city of Madurai, by King Thirumalai Nayak...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
  )
}

export default Maduri