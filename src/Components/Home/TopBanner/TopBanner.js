import React from 'react';
import { Link } from 'react-router-dom';

import Booking from './Booking';

const TopBanner = () => {
    return (

<div className='hero '>
    <img className='w-full bg-opacity-30 h-screen' src={'https://i.ibb.co/SmVvCxr/Banner.png'} />
    <div class="absolute top-8 right-12">
      <button class=" btn-accent text-blue  btn "><Link to="/rooms&suits">Book Now</Link></button>
  </div>
 
  <div class="hero-content text-center text-accent">
  <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-semiBold">THE SUITES</h1>
    
    </div>
  
  </div>
  <div className='absolute inset-x-50 bottom-0  max-w-1/2'>
  <Booking></Booking>
  </div>
</div>


    );
};

export default TopBanner;