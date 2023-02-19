import React from 'react';
import { IoBedOutline } from "react-icons/io5";
import { GiPillow} from "react-icons/gi";
import { FaTv, FaGlassMartiniAlt, FaWifi  } from "react-icons/fa";
import { BsSafe } from "react-icons/bs";
import { Ri24HoursLine } from "react-icons/ri";
import { MdOutlineFreeBreakfast, MdPool, MdSportsHandball } from "react-icons/md";
import { GiFruitBowl, GiCoffeeCup, GiWaterBottle } from "react-icons/gi";
import { IoLibraryOutline } from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import { CiDumbbell } from "react-icons/ci";

const AmenitiesServices = () => {
    return (
        <div className='flex justify-around mb-16'>
            <div>
               <h1 className='text-3xl font-medium text-blue-900 '>In-Room Amenities</h1>
               <div className='mt-8'>
                <h1 className='text-xl font-medium flex gap-2'><IoBedOutline className='text-2xl mt-1 text-blue-900 font-bold'/> One 7×7 king size bed</h1>
               </div>
               <div className='mt-8'>
                <h1 className='text-xl font-medium flex gap-2'><GiPillow className='text-2xl mt-1 text-blue-900 font-bold'/>Heavenly duvet & pillows with duck down</h1>
               
               </div>
               <div className='mt-8'>
                <h1 className='text-xl font-medium flex gap-2'>< FaTv className='text-2xl mt-1 text-blue-900 font-bold'/>32" LCD TV with comprehensive selection of channels</h1>
               
               </div>
               <div className='mt-8'>
                <h1 className='text-xl font-medium flex gap-2'><FaGlassMartiniAlt className='text-2xl mt-1 text-blue-900 font-bold'/>Mini Bar</h1>
               
               </div>
               <div className='mt-8'>
                <h1 className='text-xl font-medium flex gap-2'><BsSafe className='text-2xl mt-1 text-blue-900 font-bold'/>Safety deposit box</h1>
               
               </div>
               <div className='mt-8'>
                <h1 className='text-xl font-medium flex gap-2'><Ri24HoursLine className='text-2xl mt-1 text-blue-900 font-bold'/>24 hours room service</h1>
               
               </div>
            </div>

            <div>
            <h1 className='text-3xl font-medium text-blue-900 '>Complimentary Services</h1>

             <div className='flex'>
             <div >
            <div className='mt-8'>
                <h1 className='text-xl font-medium flex gap-2'><MdOutlineFreeBreakfast className='text-2xl mt-1 text-blue-900 font-bold'/>Breakfast</h1>
               
               </div>
            <div className='mt-8'>
                <h1 className='text-xl font-medium flex gap-2'><GiFruitBowl className='text-2xl mt-1 text-blue-900 font-bold'/>Fruit Basket</h1>
               
               </div>
            <div className='mt-8'>
                <h1 className='text-xl font-medium flex gap-2'><IoLibraryOutline className='text-2xl mt-1 text-blue-900 font-bold'/>Library</h1>
               
               </div>
            <div className='mt-8'>
                <h1 className='text-xl font-medium flex gap-2'><FaWifi className='text-2xl mt-1 text-blue-900 font-bold'/>WiFi</h1>
               
               </div>
            <div className='mt-8'>
                <h1 className='text-xl font-medium flex gap-2'><GiCoffeeCup className='text-2xl mt-1 text-blue-900 font-bold'/>Tea & Coffee</h1>
               
               </div>
            <div className='mt-8'>
                <h1 className='text-xl font-medium flex gap-2'><MdPool className='text-2xl mt-1 text-blue-900 font-bold'/>Swimming Pool</h1>
               
               </div>
            <div className='mt-8'>
                <h1 className='text-xl font-medium flex gap-2'><BiBath className='text-2xl mt-1 text-blue-900 font-bold'/>Outdoor Jacuzzi</h1>
               
               </div>

            </div>

            <div>
            <div className='mt-8'>
                <h1 className='text-xl font-medium flex gap-2'><CiDumbbell className='text-2xl mt-1 text-blue-900 font-bold'/>Gym</h1>
               
               </div>
            <div className='mt-8'>
                <h1 className='text-xl font-medium flex gap-2'><MdSportsHandball className='text-2xl mt-1 text-blue-900 font-bold'/>Kids Play Zone</h1>
               
               </div>
            <div className='mt-8'>
                <h1 className='text-xl font-medium flex gap-2'><GiWaterBottle className='text-2xl mt-1 text-blue-900 font-bold'/>Mineral Water</h1>
               
               </div>
            </div>
             </div>
          
            
            </div>
        </div>
    );
};

export default AmenitiesServices;