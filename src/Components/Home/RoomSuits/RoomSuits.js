import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import "./RoomSuits.css"
import { Link } from 'react-router-dom';
const RoomSuits = () => {
   
    return (
        <div className='mt-16 mb-16 text-center'>
          <h1 className='text-3xl text-primary text-center mb-2'>Find Your Comfort</h1>
          <h1 className='text-6xl text-secondary text-center  mb-10 font-semiBold'>Rooms & Suits</h1>
         <Swiper
                navigation={true}
                infinite={true} 
                autoPlay= {true }
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="object-fill w-full carouselHeight"
                        src="https://www.theresortmumbai.com/images/67164f4b26e6ff16744c8a486da9620d.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full carouselHeight"
                        src="https://grandsylhet.com/wp-content/themes/grandsylhet/assets/images/homeslides/introslider_02.jpg"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full carouselHeight"
                        src="https://www.hellocorbett.in/wp-content/uploads/2020/03/resort-with-private-pool.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full carouselHeight"
                        src="https://r1imghtlak.mmtcdn.com/640c8702557811ebaba10242ac110002.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full carouselHeight"
                        src="https://media-cdn.tripadvisor.com/media/photo-m/1280/15/90/c4/35/kushal-palli-resort.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
            <button class=" btn w-36  btn-active btn-secondary text-white mt-16 mb-2"><Link to="/rooms&suits">Book Now</Link></button>
        </div>
    );
};

export default RoomSuits;