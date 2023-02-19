import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import "./RestaurantDinning.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4

  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1
  }
};
const RestaurantDinning = () => {
    return (
        <div className='mb-10 text-center lg:p-10 sm:p-4'>
            <h1 className='text-center text-6xl font-semiBold decoration-wavy text-blue-900  mb-12'>RESTAURANT & DINNING</h1>
            <Carousel className='' responsive={responsive} infinite={true}  autoPlay= {true }
  autoPlaySpeed={2000}
  >
  <div className='h-80'><img src="https://i.ibb.co/FbJgDCd/3.png" alt="" /></div>
  <div ><img src="https://i.ibb.co/zZSjrt9/2.png" alt="" /></div>
  <div><img src="https://i.ibb.co/M1tYFR0/1.png" alt="" /></div>
  <div><img src="https://i.ibb.co/3NCX6SN/4.png" alt="" /></div>
  <div><img src="https://i.ibb.co/FbJgDCd/3.png" alt="" /></div>
  <div><img src="https://i.ibb.co/zZSjrt9/2.png" alt="" /></div>
  <div><img src="https://i.ibb.co/M1tYFR0/1.png" alt="" /></div>
  <div><img src="https://i.ibb.co/3NCX6SN/4.png" alt="" /></div>
 
</Carousel>
<button class=" btn btn-active btn-secondary text-white mt-14 mb-8"><Link to="/restaurant">Find More</Link></button>

        </div>
    );
};

export default RestaurantDinning;