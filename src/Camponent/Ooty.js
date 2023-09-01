import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ot1 from '../img/Ooty.jpeg';
import ot2 from '../img/ooty1.jpeg';
import ot3 from '../img/ooty2.jpeg';
import ot4 from '../img/ooty3.jpeg';
import ot5 from '../img/ooty4.jpeg';

const Ooty = () => {
  return (
    <div className='con0' id='Ooty'>
        <div className="con2">
            <h3>04.Ooty</h3>
            <div className='con2-1'>
                <img src={ot1} alt="" />
                <div className='p'>
                    <h5 className='ptitle'>"Queen of the Nilgiris"</h5><br />
                    <p className='def'>  Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is a hill station in Tamil Nadu which serves as a top-rated tourist destination. Once regarded as the summer headquarters of the East India Company, the Queen of the hills is a picturesque getaway. </p>
                    
                    <p className='def'>
                        The Nilgiri mountain railway is the steepest track in all of Asia. Remember the hit song 'Chaiyya Chaiyya' where Shahrukh Khan and Malaika Arora matching steps on top of a train? Remember the breathtaking locales as the train chugged its way across lush greenery? Yes, that was the Nilgiri Mountain Railways, and the Nilgiri Mountains all along Dotted with tea gardens, serene waterfalls, winding country lanes, and charming colonial architecture, Ooty is the perfect respite everyone.
                    </p>
                </div>
                
            </div>
            <div className="mvp">
                <p className='mvp'>Must Visited Place In Ooty</p>
            </div>
            <div className='card-place'>
                    <Card  style={{  width: '16.5rem', height: "24rem" }}>
                        <Card.Img variant="top" src={ot2} />
                        <Card.Body>
                            <Card.Title>Nilgiri Mountain Railway</Card.Title>
                            <Card.Text>
                                Nilgiri Mountain Railway, also known as Toy Train in Ooty, is one of the key attractions of the popular hill ...
                            </Card.Text> 
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{  width: '16.5rem', height: "24rem" }}>
                        <Card.Img variant="top" src={ot3} />
                        <Card.Body className='c'>
                            <Card.Title>Ooty Botanical Garde</Card.Title>
                            <Card.Text>
                                Ooty Botanical Gardens lie on the lower slopes of the Doddabetta peak, the Government Botanical ...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{  width: '16.5rem', height: "24rem" }}>
                        <Card.Img variant="top" src={ot4} style={{ height:'10.7rem' }} />
                        <Card.Body>
                            <Card.Title>Emerald Lake</Card.Title>
                            <Card.Text>
                            Emerald Lake is situated in Emerald Village, around 20-22 kilometres from the main city of Ooty and ...                            
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{  width: '16.5rem', height: "24rem" }}>
                        <Card.Img variant="top" src={ot5} style={{ height:'10.7rem' }} />
                        <Card.Body>
                            <Card.Title>Dolphin's Nose</Card.Title>
                            <Card.Text>
                                Located about 12 km away from Coonoor is the Dolphin's Nose about 1,500 meters above sea level. The tip ...                           
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
            </div>
        </div>
    </div>
  )
}

export default Ooty