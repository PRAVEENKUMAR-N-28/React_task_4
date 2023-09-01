import React from 'react';
import './Css/Package.css';

import One_day_trip from './one_Day/One_day_trip';
import Three_day_trip from './one_Day/Three_day_trip';


const Package = () => {
  return (
       <article className='Package'>
                    <One_day_trip />
                    <Three_day_trip />
                    <h3 style={{fontWeight:"600" , textAlign:"center" , marginBottom:"40px" , marginTop:"40px"}}> Custom Package</h3>
                    <a href="#" className='book' style={{width:"150px" , position:"relative" , left:"45%"}} >Contect As !</a>
                    
       </article>
  )
}

export default Package