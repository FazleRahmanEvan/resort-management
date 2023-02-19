import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import {MdArrowDropDown} from 'react-icons/md';
import { SlSizeFullscreen } from "react-icons/sl";
import { IoIosBed } from "react-icons/io";
import { IoIosGlobe } from "react-icons/io";
import './RoomDetails.css'
import AmenitiesServices from './AmenitiesServices';
import { AiOutlineCalendar } from "react-icons/ai";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const RoomDetails = () => {

  const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <p className='text-4xl gold text-center'>At A Glance</p>
             <h1 className='text-6xl font-semiBold text-center'>PREMIUM SUIT</h1>
            <div class="hero min-h-screen">
               
  <div class="hero-content flex-col lg:flex-row-reverse  mt-10">
    <div class="text-center lg:text-left lg:pl-14">
        <div className='flex justify-around mb-8 mt-8'>
        <div className='mb-10 '>
            <h1> <SlSizeFullscreen className='text-7xl gold mt-3 mb-6'/></h1>
        <h1 className='text-xl text-blue-900 font-medium'>28sqm(302sqft)</h1>
        </div>
        <div className='mb-10'>
        <IoIosBed className='text-7xl gold mt-3 mb-6'/>
        <h1 className='text-xl text-blue-900 font-medium  '>King-sized Bed</h1>
        </div>
        <div className='mb-10'>
        <IoIosGlobe className='text-7xl gold mt-3 mb-6'/>
        <h1 className='text-xl text-blue-900 font-medium '>Internet</h1>
        </div>
        </div>
       
      
      <h1 class="text-5xl font-medium text-blue-900 lg:ml-10">Room Details</h1>
      <p class="py-6  text-justify-center lg:w-11/12 lg:ml-10 text-blue-900 text-xl font-semiBold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iste asperiores repellat, quaerat sit vero fugit quidem fuga quis reprehenderit iure, obcaecati veniam dolor natus soluta. Dolore debitis tempora expedita et similique, vel atque reprehenderit accusamus numquam consequatur iusto fuga sed, voluptatibus ipsum! Quos atque obcaecati natus, nesciunt repudiandae itaque!</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl rounded">

      <div class="">
        <div className='bggold p-8 mt-4'>
            <h1 className='text-xl font-bold text-white'>Premium Suit</h1>
            <h1 className='text-3xl font-medium text-white mt-2'>BDT 27,000</h1>
            <h1 className=' text-white text-end mt-3 '>Early Winter offer- Enjoy 50% Discount</h1>
        </div>
        <div className='mt-5 mb-2'>
            <h1 className='text-md font-medium text-blue-900 pl-4'>Select Staying Date</h1>
            <div className='flex justify-center gap-10'>
             <div className='card  shadow-gray-2xl'>

             <h2 class=" text-gray-400 m-1 flex mt-2"><FaCalendarAlt className='text-blue-900 pr-1 mt-1'/>Check In</h2>

             <DatePicker  className='font-bold w-24' 
              dateFormat="dd/MM/yyyy" 
              selected={startDate}
              minDate={new Date()}
            //  maxDate={addMonths(new Date(), 5)}
              showDisabledMonthNavigation
              onChange={(date) => setStartDate(date)} />

             </div>
             <div className='card  bg-white-400 shadow-5xl  rounded-none'>
             <h2 class=" text-gray-400 m-1  flex mt-2"><FaCalendarAlt className='text-blue-900 pr-1 mt-1'/>Check Out </h2>
            
              <DatePicker  className=' font-bold w-24' 
              dateFormat="dd/MM/yyyy" 
              selected={startDate}
              minDate={new Date()}
            //  maxDate={addMonths(new Date(), 5)}
              showDisabledMonthNavigation
              onChange={(date) => setStartDate(date)} />

             </div>
            </div>

        </div>

        <div className='mt-4 mb-4 '>
            <h1 className='text-md font-medium text-blue-900 pl-4 mt-4'>Rooms & Guests Preferences</h1>
            <div className=' justify-center p-5 flex check bg-base-100 text-black rounded '>

            <div class="dropdown dropdown-bottom dropdown-end mt-3">
  <label tabindex="0" class="m-1 link link-hover text-gray-400">Room</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
            <div class="divider lg:divider-horizontal"></div> 

            <div class="dropdown dropdown-bottom dropdown-end mt-3">
  <label tabindex="0" class="m-1 link link-hover text-gray-400">Adult</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
            <div class="divider lg:divider-horizontal"></div> 

            <div class="dropdown dropdown-bottom dropdown-end mt-3">
  <label tabindex="0" class="m-1 link link-hover text-gray-400">Children</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

        </div>

        </div>
        
      </div>
      <div className='text-center mt-4 mb-4 '>
      <button class="btn btn-secondary btn-wide text-white">Book Now</button>
      </div>
    </div>
  </div>
</div>
<AmenitiesServices></AmenitiesServices>
        </div>
    );
};

export default RoomDetails;