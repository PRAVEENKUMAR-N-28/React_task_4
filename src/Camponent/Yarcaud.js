import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import yk1 from '../img/Yarcaud.jpeg';
import yk2 from '../img/yercaud1.jpeg';
import yk3 from '../img/yercaud2.jpeg';
import yk4 from '../img/yercaud3.jpeg';
import yk5 from '../img/yercaud4.jpeg';

const Yarcaud = () => {
  return (
    <div className='con0' id='Yarcaud'>
        <div className="con2">
            <h3>08.Yercadu</h3>
            <div className='con2-1'>
                <img src={yk1} alt="" />
                <div className='p'>
                    <h5 className='ptitle'>"The Land of Seven Forests."</h5><br />
                    <p className='def'> Yercaud Tourism Nestled in the Shivaroy Hills of Tamil Nadu, Yercaud is a hill station in the Eastern Ghats steeped in abundant greenery. Commonly called 'Ooty of the Poor, this region has a history dating back to the time of the British. Located at an altitude of 4970 feet. Yercaud is known for its vast expanses of coffee plantations and great weather. </p>
                    
                    <p className='def'>
                        Yercaud lake is the main point of attraction of the region. One of the many highlights is the summer festival that takes place in May. It is dedicated to Lord Servarayan, the supreme god of the ranges and gives visitors a glimpse into the rich heritage of this region.
                    </p>
                </div>
                
            </div>
            <div className="mvp">
                <p className='mvp'>Must Visited Place In Yercaud</p>
            </div>
            <div className='card-place' >
                    <Card  style={{ width: '16.5rem', height: "23rem" }}>
                        <Card.Img variant="top" src={yk2} />
                        <Card.Body>
                            <Card.Title>Pagoda Point</Card.Title>
                            <Card.Text>
                            Located in the eastern part of the Yercaud Hills, Pagoda point is a beautiful viewpoint where one is treated
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{ width: '16.5rem', height: "23rem" }}>
                        <Card.Img variant="top" src={yk3} />
                        <Card.Body>
                            <Card.Title>Botanical Garden</Card.Title>
                            <Card.Text>
                                Any tourist who is interested in gods gift to this planet, the wondrous flora, and in knowing about various...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{ width: '16.5rem', height: "23rem" }}>
                        <Card.Img variant="top" src={yk4} />
                        <Card.Body>
                            <Card.Title>Emerald Lake</Card.Title>
                            <Card.Text>
                                The most alluring aspect of Yercaud is its big yet natural lake very popularly known as the Emerald Lake...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{ width: '16.5rem', height: "23rem" }}>
                        <Card.Img variant="top" src={yk5} />
                        <Card.Body>
                            <Card.Title>Lady,s Seat</Card.Title>
                            <Card.Text>
                                Lady's Seat is a viewpoint that overlooks the winding ghat road and offers a spectacular view of Mettur Dam...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
  )
}

export default Yarcaud