import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import kk1 from '../img/Kodaikanal.jpeg'
import kk2 from '../img/kodaikanal1....jpeg'
import kk3 from '../img/kodaikanal2.jpeg'
import kk4 from '../img/kodaikanal3..jpeg'
import kk5 from '../img/kodaikanal4.jpeg'
const Kodaikanal = () => {
  return (
    <div className='con0' id='kodaikanal'>
        <div className="con2">
            <h3>03.Kodaikanal</h3>
            <div className='con2-1'>
                <img src={kk1} alt="" />
                <div className='p'>
                    <h5 className='ptitle'>"The Princess of Hill Stations"</h5><br />
                    <p className='def'>  Kodaikanal Tourism Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon destinations in India. A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall that come together to create the ideal setting for a perfect getaway. Kodaikanal means 'the gift of the forests'. </p>
                    
                    <p className='def'>
                        Nestled amidst the rolling slopes of the Palani Hills, Kodaikanal stands at an altitude of 7200 feet above sea level, and once you visit this hill station, you will find that every bit of what you have imagined it to be is real. Kodaikanal is a place you can go to take a break from the rigours of daily city Close life, and this hill station lets you sit back and connect with nature as you head out on biking or trekking trails or take a stroll through the vast forests surrounding the town.
                    </p>
                </div>
                
            </div>
            <div className="mvp">
                <p className='mvp'>Must Visited Place In Kodaikanal</p>
            </div>
            <div className='card-place'>
                    <Card  style={{ width: '16.5rem', height: "24rem" }}>
                        <Card.Img variant="top" src={kk2} />
                        <Card.Body>
                            <Card.Title>Green Valley View</Card.Title>
                            <Card.Text>
                                Formerly known as Suicide point, the Green Valley View offers a breathtaking view of the plains, deep ...
                            </Card.Text> 
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{ width: '16.5rem', height: "24rem" }}>
                        <Card.Img variant="top" src={kk3} />
                        <Card.Body className='c'>
                            <Card.Title>Kodai Lake</Card.Title>
                            <Card.Text>
                            Kodaikanal Lake is a manmade lake in the Kodaikanal city which is also known as Kodai
                            Lake. Vera ..
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{ width: '16.5rem', height: "24rem" }}>
                        <Card.Img variant="top" src={kk4} />
                        <Card.Body>
                            <Card.Title>Bear Shola Falls</Card.Title>
                            <Card.Text>
                                Located at a mere distance of 2 kilometres from the Kodaikanal Lake, the Bear Shola Falls is a popular...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                    <Card  style={{ width: '16.5rem', height: "24rem" }}>
                        <Card.Img variant="top" src={kk5} />
                        <Card.Body>
                            <Card.Title>Pillar Rocks</Card.Title>
                            <Card.Text>
                            ce of 2 aikanal s is a Situated in the 'Princess of Hill stations, Kodaikanal, the Pillar Rocks have become a lovely picnic... 
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
            </div>
        </div>
    </div>
  )
}

export default Kodaikanal