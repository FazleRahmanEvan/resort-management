import React from 'react';
import './Details.css'
import {ImSpoonKnife } from "react-icons/im";
import { Ri24HoursFill } from "react-icons/ri";
import { MdLocationOn, MdRoomService } from "react-icons/md";
import { BsFillCloudFill } from "react-icons/bs";


const Details = () => {
    return (
        <div className='mt-20'>
           <div class="hero">
        <div class="hero-content mt-10 mb-7 flex-col lg:flex-row-reverse gap-20">
        <div class="carousel max-w-11/12 h-96 pt-4">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://wallpapercave.com/wp/wp7488228.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="text-accent text-2xl font-bold ">❮</a> 
      <a href="#slide2" class="text-accent text-2xl font-bold ">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://jeevaresorts.com/santai/wp-content/uploads/sites/3/2022/05/santai-event-1.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="text-accent text-2xl font-bold ">❮</a> 
      <a href="#slide3" class="text-accent text-2xl font-bold ">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://www.redrockresort.com/wp-content/uploads/2020/04/WeddingHeader.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="text-accent text-2xl font-bold ">❮</a> 
      <a href="#slide1" class="text-accent text-2xl font-bold ">❯</a>
    </div>
  </div> 
 
</div>
          <div className=''>
            <h1 class="text-4xl font-medium text-gold-600 text-secondary mb-10">Details</h1>
           
            <h1 class="flex justify text-xl font-semiBold mt-3 background px-10 py-6"> <ImSpoonKnife className='text-2xl text-secondary font-bold mt-1 mr-3 ml-2'/> <span className='font-bold mr-2 '>Cusine:</span> Continenetal,Thai,Chinese,Indian,Bangla</h1>
            
            <h1 class="flex justify text-xl font-semiBold mt-3 background px-12 py-6"><BsFillCloudFill className='text-2xl font-bold text-secondary mt-1 mr-4'/><span className='font-bold mr-2'> Atomsphere:</span> Contemporay & Sophistcated</h1>

            <h1 class="flex justify text-xl font-semiBold mt-3 background px-10 py-6"><Ri24HoursFill className='text-2xl font-bold text-secondary mt-1 mr-4 ml-2'/> <span className='font-bold mr-2'>Service Hours:</span> As Per Booking</h1>

            <h1 class="flex justify text-xl font-semiBold mt-3 background px-12 py-6"> <MdLocationOn className='text-2xl font-bold text-secondary font-bold mt-1 mr-3 '/><span className='font-bold mr-2 ml-1'>Location: </span> Ground Floor</h1>

            <h1 class="flex justify text-xl font-semiBold mt-3 background px-12 py-6"><MdRoomService className='text-2xl font-bold text-secondary font-bold mt-1 mr-3 '/><span className='font-bold mr-2 ml-1'>Service Style: </span> Buffet</h1>
         
          
          </div>
        </div>
      </div>

        </div>
    );
};

export default Details;



// 3=6, 2=5,1=4