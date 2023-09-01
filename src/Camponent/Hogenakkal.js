import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ho1 from '../img/Hogenakkal.jpeg';
import ho2 from '../img/hogenakkal1.jpeg';
import ho3 from '../img/hogenakkal2.jpeg';
import ho4 from '../img/hogenakkal3.jpeg';
import ho5 from '../img/hokenakkal4.jpeg';


const Hogenakkal = () => {
  return (
    <div className='con0' id='Hogenakkal'>
    <div className="con2">
        <h3>10.Hogenakkal</h3>
        <div className='con2-1'>
            <img src={ho1} alt="" />
            <div className='p'>
                <h5 className='ptitle'>"The one that will take your breath away"</h5><br />
                <p className='def'>Hogenakkal Tourism Hogenakkal is a waterfall located in Dharmapuri district of Tamil Nadu where the Kaveri river splits into multiple streams of waterfalls. Located at a distance of 180 km from Bangalore, Hogenakkal has water throughout the year. The carbonite rocks, the coracle (basket boat) rides, freshwater fish, oil massages by locals make it a perfect one day trip or a weekend getaway from Bangalore.</p>
                
                <p className='def'>
                    Sometimes referred to as the "Niagara Falls of India," it is also known for the medicinal baths. Also known at Marikottayam, Hoge actually means smoke and Kal means rock. Recently, the place has been found to be littered with plastic bags and garbage and the fish market outside the waterfall might stink. Weekends can be crowded. Keep all these points in mind before visiting.
                </p>
            </div>
            
        </div>
        <div className="mvp">
            <p className='mvp'>Must Visited Place In Hogenakkal</p>
        </div>
        <div className='card-place'>
                <Card  style={{  width: '16.5rem', height: "22.5rem" }}>
                    <Card.Img variant="top" src={ho2} />
                    <Card.Body>
                        <Card.Title>Theerthamalai Temple</Card.Title>
                        <Card.Text>
                            Theerthamalai is a popular pilgrim centre close to Hogenakkal. One of its most popular destinations is the...

                        </Card.Text> 
                        <Button variant="primary">Read More</Button>
                    </Card.Body>
                </Card>

                <Card  style={{  width: '16.5rem', height: "22.5rem" }}>
                    <Card.Img variant="top" src={ho3} />
                    <Card.Body className='c'>
                        <Card.Title>Hogenakkal Falls</Card.Title>
                        <Card.Text>
                            Hogenakkal Falls is a scintillating waterfall that is located on river Kaveri in the Dharmapuri district of...
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                    </Card.Body>
                </Card>

                <Card  style={{  width: '16.5rem', height: "22.5rem" }}>
                    <Card.Img variant="top" src={ho4} />
                    <Card.Body>
                        <Card.Title>Pennagram Village</Card.Title>
                        <Card.Text>
                            The village is located about 20 km away from Hogenakkal and is famous for its weekly fair that it holds every...
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                    </Card.Body>
                </Card>

                <Card  style={{  width: '16.5rem', height: "22.5rem" }}>
                    <Card.Img variant="top" src={ho5} />
                    <Card.Body>
                        <Card.Title>Mettur Dam</Card.Title>
                        <Card.Text>
                            Mettur Dam, situated 30 miles from Salem in a small Mettur Village, is one of the largest dams in India. Built...
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
        </div>
    </div>
</div>
  )
}

export default Hogenakkal