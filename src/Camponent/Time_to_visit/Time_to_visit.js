import React from 'react';
import './css/Time_to_visit.css';
import img1 from './img2/coonoor.jpg';
import Accordion from 'react-bootstrap/Accordion';
import img2 from './img2/Pillar_Rocks.jpg';
import img4 from './img2/Pechiparai_Reservoir.jpg';
import img3 from './img2/Chennai-Weather.png'
import Chennai_1 from './Chennai_1';
import Kodikanal_3 from './Kodikanal_3';
import Kanyakumari_5 from './Kanyakumari_5';
import Madurai_7 from './Madurai_7';
import Theni_9 from './Theni_9';
import Rameshwaran_2 from './Rameshwaran_2';
import Ooty_4 from './Ooty_4';
import Kumbakonam_6 from './Kumbakonam_6';
import Yercaud_8 from './Yercaud_8';
import Hogenakkal_10 from './Hogenakkal_10';
const Time_to_visit = () => {
  return (
    <article className='part_0'>
        <section className="part_1">
            <h3>TANILNADU TOURISM</h3>
            <h2>Best Time To Visit</h2>
            <div className="part1_1">
                <figure >
                  <img src={img1} alt="" style={{ height:'280px' , width:"450px"}} />
                  <figcaption className='caption_1'>Best Time To Visit</figcaption>
                </figure>
                <div className="part1_2">
                <p className="subTitle">
                  More about Best Time To Travel tamil Nadu
                </p>
                <section className='drop_down'>
                <Accordion>
                  <Accordion.Item eventKey="0">
                      <Accordion.Header>Tamil Nadu in Summer (March-May)</Accordion.Header>
                      <Accordion.Body>
                        This season begins in March and lasts until May. The temperatures are high, ranging between 35°C and 40°C and so is the humidity especially in the coastal regions. Sightseeing during this time is not very convenient because of the improper temperature. The season, however, is visited to witness the festival of Chithirai held in the Madurai temple in the month of March-April. Puthandu, another important festival that marks the Tamil New year falls in mid-April and Mahamahan Festival is celebrated in March (celebrated once in 12 years). If visiting during summer, it is a good idea to visit the attractions on higher attitudes. Hill stations like Ooty, Kodaikanal and Yelagiri hills are the best where the temperature is pleasant and has scenic views that tourists can witness.
                        <div className="im_1">
                        <figure classsName='image' >
                          <img src={img2} alt="" classsName='image' style={{ height:'280px' , width:"550px"}}/>
                          <figcaption className='caption_1'>Pillar Rock of Kodaikanal Source</figcaption>
                        </figure>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Tamil Nadu in Monsoon (June - September)</Accordion.Header>
                      <Accordion.Body>
                        This southern state sees monsoon two times a year - once between June to September and the retreating monsoon in November and December. The temperature is slightly less than what it is in the summer season. It ranges between 25°C and 30°C. The rains often occur in long spells and the humidity during this time is high especially in coastal regions. Some of the hilly areas see massive rainfall and venturing out during this time around is not a great idea. The Eastern seaboard of Tamil Nadu sometimes experiences cyclones during the late monsoon, making it an unsafe place to visit.
                        <div className="im_1">
                        <figure classsName='image' >
                          <img src={img3} alt="" classsName='image' style={{ height:'400px' , width:"550px"}}/>
                          <figcaption className='caption_1'>Pillar Rock of Kodaikanal Source</figcaption>
                        </figure>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Tamil Nadu in Winter (October - February)</Accordion.Header>
                      <Accordion.Body>
                          Winter in Tamil Nadu begins in October and lasts until February. November and December have intermittent rainfall because of the retreating monsoon, but otherwise, the temperature remains between 10°C and 15°C. The humidity is low, and it is the best climate for sightseeing and touring the cities. Most of the tourist attractions are bustling with activities during this season. The beaches call the beach lovers, and adventure seekers for bathing in the sun, swimming and water sports as the temperature remains moderate all through the day.
                        <div className="im_1">
                        <figure classsName='image' >
                          <img src={img4} alt="" classsName='image' style={{ height:'280px' , width:"550px"}}/>
                          <figcaption className='caption_1'>Pillar Rock of Kodaikanal Source</figcaption>
                        </figure>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </section>
                </div>
            </div>
            <p>The best time to visit Tamil Nadu is during the winter season, i.e. from November to February when the temperature is relatively low, and pleasant to explore the attractions in the state. Monsoons bring torrential downpour which makes it an inappropriate time to travel through Tamil Nadu. Summer, however, is perfect for exploring the hills stations. Tourists can pick the region they wish to see according to the season because offseason visits could be extremely inconvenient for some.</p>
          </section>

          <section className="states">
            <div className="t_v_Title">
              <h3>TAMILNADU TOURISM</h3>
              <h5>Best Time To visit</h5>
            </div>
          </section>
          <Chennai_1 />
          <Rameshwaran_2 />
          <Kodikanal_3 />
          <Ooty_4 />
          <Kanyakumari_5 />
          <Kumbakonam_6 />
          <Madurai_7 />
          <Yercaud_8 />
          <Theni_9 />
          <Hogenakkal_10 />
    </article>
  )
}

export default Time_to_visit