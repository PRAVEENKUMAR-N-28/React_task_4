import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import th1 from '../img/Theni.jpeg';
import th2 from '../img/theni1.jpeg';
import th3 from '../img/theni2.jpeg';
import th4 from '../img/theni3.jpeg';
import th5 from '../img/theni4.jpeg';

const Theni = () => {
  return (
    <div className='con0' id='theni'>
        <div className="con2">
            <h3>09.Theni</h3>
            <div className='con2-1'>
                <img src={th1} alt="" />
                <div className='p'>
                    <h5 className='ptitle'>"A little hamlet in Tamil Nadu"</h5><br />
                    <p className='def'>  Theni Tourism Dotted by luscious patches of greenery and beautiful waterfalls, Theni is a little hamlet on the Western Ghats. The topography of Theni mainly consists of hills and ranges. It has plenty of rivers and dams and is an abode to 27 forests hence filled with unparalleled greenery. </p>
                    
                    <p className='def'>
                        There temples like Kamatchi Amman Temple, Vellappar Temple, and Balasubramanya Temple which are brimming with devotees from all around the country throughout the year. The vibrant local markets of Theni are shoppers' paradise. The local handloom products and agricultural products are the best buys at these markets. The aroma filled tea estates in Theni are a paradise. The Kolukkamalai Tea estate is often deemed to be the world's highest organic tea estate. The Suruli Falls and the Kumbakarai Falls are the crown jewels of Theni.
                    </p>
                </div>
                
            </div>
            <div className="mvp">
                <p className='mvp'>Must Visited Place In Theni</p>
            </div>
            <div className='card-place'>
                    <Card  style={{  width: '16.5rem', height: "23.5rem" }}>
                        <Card.Img variant="top" src={th2} />
                        <Card.Body>
                            <Card.Title>Chinna Suruli Falls</Card.Title>
                            <Card.Text>
                                Located in the lap of wild, green. forests, Chinna Suruli Falls is a picturesque destination to visit from Theni...
                            </Card.Text> 
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{  width: '16.5rem', height: "23.5rem" }}>
                        <Card.Img variant="top" src={th3} />
                        <Card.Body className='c'>
                            <Card.Title>Kumbakkarai Falls</Card.Title>
                            <Card.Text>
                                Kumbakkarai Falls is a Located in Theni in Tamil Nadu, Dindigul district near mesmerising waterfall that... 

                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{  width: '16.5rem', height: "23.5rem" }}>
                        <Card.Img variant="top" src={th4} />
                        <Card.Body>
                            <Card.Title>Meghamalai</Card.Title>
                            <Card.Text>
                            Tucked within the Western Ghats of Tamil Nadu, Meghamalai in Theni district is the kind of hidden paradise...

                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{  width: '16.5rem', height: "23.5rem" }}>
                        <Card.Img variant="top" src={th5} />
                        <Card.Body>
                            <Card.Title>Suruli Falls</Card.Title>
                            <Card.Text>
                            Suruli Falls is a beautiful waterfall in the Theni district of Tamil Nadu and one of the major tourist attractions of...

                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
            </div>
        </div>
    </div>
  )
}

export default Theni