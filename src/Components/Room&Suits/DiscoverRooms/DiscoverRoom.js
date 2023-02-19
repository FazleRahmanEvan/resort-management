import React, { useEffect, useState } from 'react';
import './DiscoverRoom.css'
import ReactCardSlider from 'react-card-slider-component';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import DiscoverRoomSlide from './DiscoverRoomSlide';



const DiscoverRoom = () => {

    const [rooms, setRooms]=useState([]);

    useEffect ( () => {
        fetch('roomtype.json')
        .then(res => res.json())
        .then(data => setRooms(data));
    }, [])

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
          />
        );
      }
    
       function SampleNextArrow(props) {
          const { className, style, onClick } = props;
          return (
            <div
              className={className}
              style={{ ...style, display: "block", background:"gray"}}
              onClick={onClick}
            />
          );
        }

    const settings = {
        dots: false,
        infinite: true,
        // autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        pauseOnHover: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
       
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              gap:true,
              
            },
          },
        ],
      };

    
    return (
        <div className='bg-blue-50 '>
            <h1 className='text-4xl text-blue-900 font-medium text-center  pt-16'>Discover More Rooms</h1>
            <div className='cardslide'>
            <Slider {...settings}>

              {
                rooms.map(room =><DiscoverRoomSlide
                key={room.id}
                room={room}
                />)
               }

               </Slider>
            </div>
          
        </div>
    );
};

export default DiscoverRoom;