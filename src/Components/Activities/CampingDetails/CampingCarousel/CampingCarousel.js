import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './CampingCarousel.css'

const CampingCarousel = () => {
    return (
        <div className='px-36 mt-36 mb-32'>

<Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="object-fill w-full carouselHeight"
                        src="https://wallpaperaccess.com/full/8478984.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full carouselHeight"
                        src="https://wallpapers.com/images/featured/4v2m8t4bwt8817dv.jpg"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full carouselHeight"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz-EWGuW1AMR3J5oqm7tVzri5B9tUJIzqoWg&usqp=CAU"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
         
        </div>
    );
};

export default CampingCarousel;