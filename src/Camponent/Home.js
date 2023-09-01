import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/banner.1.jpg';
import img2 from '../img/pic1.jpeg';
import img3 from '../img/pic2.jpeg';
import img4 from '../img/pic3.jpeg';
import img5 from '../img/pic4.jpeg';
import './Css/Home.css'
import { HashLink as Link } from 'react-router-hash-link';
import Chennai from './Chennai';
import Hogenakkal from './Hogenakkal';
import Kanyakumari from './Kanyakumari';
import Kodaikanal from './Kodaikanal';
import Kumbakonam from './Kumbakonam';
import Maduri from './Maduri';
import Ooty from './Ooty';
import Rameshwaram from './Rameshwaram';
import Theni from './Theni';
import Yarcaud from './Yarcaud';


const Home = () => {
  return (
    <main>
        <section className="slide">
            <div className="con1">
                <Carousel >
                    <Carousel.Item>
                        <img src={img1} alt="" className='img1' />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img2} alt="" className='img2' />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img3} alt="" className='img3' />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img4} alt="" className='img4'/>
                       
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img5} alt="" className='img5'/>
                        
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="t1">
                <p>Tourist Places To Tamil Nadu <br /> Here Are The Top Place To Visit In Tamil Nadu In 2023</p>
                
            </div>
            <div className="place">
                <div className="place1">
                    <Link to="#chennai" className="pname">Chennai</Link>
                    <Link to="#kodaikanal" className="pname">Kodaikanal</Link>
                    <Link to="#madurai" className="pname">Madurai</Link>
                    <Link to="#kumbakonam" className="pname">Kumbakonam</Link>
                    <Link to="#theni" className="pname">Theni</Link>
                </div>
                <div className="place2">
                    <Link to="#Rameshwaram" className="pname p6">Rameshwaram</Link>
                    <Link to="#Ooty" className="pname p7">Ooty</Link>
                    <Link to="#Kanyakumari" className="pname p8">Kanyakumari</Link>
                    <Link to="#Yarcaud" className="pname p9">Yarcaud</Link>
                    <Link to="#Hogenakkal" className="pname p10">Hogenakkal</Link>
                </div>
            </div>
        </section>
        <Chennai />
        <Rameshwaram />
        <Kodaikanal />
        <Ooty />
        <Kanyakumari />
        <Kumbakonam />
        <Maduri />
        <Yarcaud />
        <Theni />
        <Hogenakkal />
    </main>
  )
}

export default Home