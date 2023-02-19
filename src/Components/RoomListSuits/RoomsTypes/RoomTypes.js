import React from 'react';
import './RoomTypes.css'
import { SlSizeFullscreen } from "react-icons/sl";
import { IoIosBed } from "react-icons/io";
import { IoIosGlobe } from "react-icons/io";
import { Link } from 'react-router-dom';

const RoomTypes = () => {
    return (
        <div className='mt-10 ml-10 mr-14'>
            <div class="btn-group ">
  <button class="btn btn-wide btn-lg btn-outline btn-secondary  button ">Our Top Picks</button>
  <button class="btn btn-wide btn-lg btn-outline btn-secondary button ">Lowest Price First</button>
</div>
<div class="hero  mt-4  border broder-black bg-blue-50 room">
  <div class="hero-content flex-col lg:flex-row ">
    <img src="https://www.sarahresort.com/wp-content/uploads/2019/02/water-lodge-supirior-king.jpg" class="w-72 h-56 rounded-lg shadow-2xl" />
    <div className=''>
      <h1 class="text-4xl font-medium text-blue-900 mb-4">Deluxe Suit</h1>
      <div className='flex justify-around mb-4'>
        <div className=' '>
            <h1> <SlSizeFullscreen className='text-3xl gold mt-2 font-bold ml-6'/></h1>
        <h1 className='text-zinc-500 font-medium mt-2 text-sm'>28sqm(302sqft)</h1>
        </div>
        <div className=''>
        <IoIosBed className='text-3xl gold mt-2 font-bold ml-6'/>
        <h1 className=' text-zinc-500 font-medium mt-2 text-sm'>King-sized Bed</h1>
        </div>
        <div className='font-bold'>
        <IoIosGlobe className='text-3xl gold mt-2 ml-2'/>
        <h1 className=' text-zinc-500 font-medium mt-2 text-sm'>Internet</h1>
        </div>
        </div>
      <p class="pl-3 text-zinc-500 text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
    </div>
    <div class="divider lg:divider-horizontal "></div> 
    <div className=''>
            <h1 className=' font-bold '>Regular Price</h1>
      
            <h1 className='text-3xl font-medium mt-2 text-blue-900 text-justify'>BDT 27,000    <span className='text-blue-900 text-sm'>/night</span></h1>
            <h3 className='text-black'>Exluding Taxes</h3>
        
          
            <h1 className='text-end pl-5 mt-4 text-blue-900 font-semiBold'>Early Winter offer-Enjoy <span className='text-xl font-medium'> <br /> 50% Discount</span></h1>
             <button class="btn btn-wide btn-secondary text-white mt-4"><Link to="/rooms">Book Now</Link></button>
        </div>
  </div>
</div>


<div class="hero  mt-6 border broder-black bg-blue-50">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://www.bdbooking.com/upload/property/hotel/0608202201023924062a0498f58e89.jpg" class="w-72 h-56 rounded-lg shadow-2xl" />
    <div className=''>
      <h1 class="text-4xl font-medium text-blue-900 mb-4">Premium Room</h1>
      <div className='flex justify-around mb-4'>
        <div className=' '>
            <h1> <SlSizeFullscreen className='text-3xl gold mt-2 font-bold ml-6'/></h1>
        <h1 className='text-zinc-500 font-medium mt-2 text-sm'>28sqm(302sqft)</h1>
        </div>
        <div className=''>
        <IoIosBed className='text-3xl gold mt-2 font-bold ml-6'/>
        <h1 className=' text-zinc-500 font-medium mt-2 text-sm'>King-sized Bed</h1>
        </div>
        <div className='font-bold'>
        <IoIosGlobe className='text-3xl gold mt-2 ml-2'/>
        <h1 className=' text-zinc-500 font-medium mt-2 text-sm'>Internet</h1>
        </div>
        </div>
      <p class="pl-3 text-zinc-500 text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
    </div>
    <div class="divider lg:divider-horizontal "></div> 
    <div className=''>
            <h1 className=' font-bold '>Regular Price</h1>
      
            <h1 className='text-3xl font-medium mt-2 text-blue-900 text-justify'>BDT 27,000    <span className='text-blue-900 text-sm'>/night</span></h1>
            <h3 className='text-black'>Exluding Taxes</h3>
        
          
            <h1 className='text-end pl-5 mt-4 text-blue-900 font-semiBold'>Early Winter offer-Enjoy <span className='text-xl font-medium'> <br /> 50% Discount</span></h1>
            <button class="btn btn-wide btn-secondary text-white mt-4"><Link to="/rooms">Book Now</Link></button>
        </div>
  </div>
</div>


<div class="hero  mt-6 border broder-black bg-blue-50">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://r1imghtlak.mmtcdn.com/640c8702557811ebaba10242ac110002.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg" class="w-72 h-56 rounded-lg shadow-2xl" />
    <div className=''>
      <h1 class="text-4xl font-medium text-blue-900 mb-4">King Suits</h1>
      <div className='flex justify-around mb-4'>
        <div className=' '>
            <h1> <SlSizeFullscreen className='text-3xl gold mt-2 font-bold ml-6'/></h1>
        <h1 className='text-zinc-500 font-medium mt-2 text-sm'>28sqm(302sqft)</h1>
        </div>
        <div className=''>
        <IoIosBed className='text-3xl gold mt-2 font-bold ml-6'/>
        <h1 className=' text-zinc-500 font-medium mt-2 text-sm'>King-sized Bed</h1>
        </div>
        <div className='font-bold'>
        <IoIosGlobe className='text-3xl gold mt-2 ml-2'/>
        <h1 className=' text-zinc-500 font-medium mt-2 text-sm'>Internet</h1>
        </div>
        </div>
      <p class="pl-3 text-zinc-500 text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
    </div>
    <div class="divider lg:divider-horizontal "></div> 
    <div className=''>
            <h1 className=' font-bold '>Regular Price</h1>
      
            <h1 className='text-3xl font-medium mt-2 text-blue-900 text-justify'>BDT 27,000    <span className='text-blue-900 text-sm'>/night</span></h1>
            <h3 className='text-black'>Exluding Taxes</h3>
        
          
            <h1 className='text-end pl-5 mt-4 text-blue-900 font-semiBold'>Early Winter offer-Enjoy <span className='text-xl font-medium'> <br /> 50% Discount</span></h1>
            <button class="btn btn-wide btn-secondary text-white mt-4"><Link to="/rooms">Book Now</Link></button>
        </div>
  </div>
</div>


<div class="hero  mt-6 border broder-black bg-blue-50">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/15/90/c4/35/kushal-palli-resort.jpg"  class="w-72 h-56 rounded-lg shadow-2xl"/>
    <div className=''>
      <h1 class="text-4xl font-medium text-blue-900 mb-4">Deluxe Suit</h1>
      <div className='flex justify-around mb-4'>
        <div className=' '>
            <h1> <SlSizeFullscreen className='text-3xl gold mt-2 font-bold ml-6'/></h1>
        <h1 className='text-zinc-500 font-medium mt-2 text-sm'>28sqm(302sqft)</h1>
        </div>
        <div className=''>
        <IoIosBed className='text-3xl gold mt-2 font-bold ml-6'/>
        <h1 className=' text-zinc-500 font-medium mt-2 text-sm'>King-sized Bed</h1>
        </div>
        <div className='font-bold'>
        <IoIosGlobe className='text-3xl gold mt-2 ml-2'/>
        <h1 className=' text-zinc-500 font-medium mt-2 text-sm'>Internet</h1>
        </div>
        </div>
      <p class="pl-3 text-zinc-500 text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
    </div>
    <div class="divider lg:divider-horizontal "></div> 
    <div className=''>
            <h1 className=' font-bold '>Regular Price</h1>
      
            <h1 className='text-3xl font-medium mt-2 text-blue-900 text-justify'>BDT 27,000    <span className='text-blue-900 text-sm'>/night</span></h1>
            <h3 className='text-black'>Exluding Taxes</h3>
        
          
            <h1 className='text-end pl-5 mt-4 text-blue-900 font-semiBold'>Early Winter offer-Enjoy <span className='text-xl font-medium'> <br /> 50% Discount</span></h1>
            <button class="btn btn-wide btn-secondary text-white mt-4"><Link to="/rooms">Book Now</Link></button>
        </div>
  </div>
</div>

<div class="hero  mt-6 border broder-black bg-blue-50">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://www.tripleeresort.com/images/four-sharing/four-sharing.jpg"  class="w-72 h-56 rounded-lg shadow-2xl" />
    <div className=''>
      <h1 class="text-4xl font-medium text-blue-900 mb-4">King Suit</h1>
      <div className='flex justify-around mb-4'>
        <div className=' '>
            <h1> <SlSizeFullscreen className='text-3xl gold mt-2 font-bold ml-6'/></h1>
        <h1 className='text-zinc-500 font-medium mt-2 text-sm'>28sqm(302sqft)</h1>
        </div>
        <div className=''>
        <IoIosBed className='text-3xl gold mt-2 font-bold ml-6'/>
        <h1 className=' text-zinc-500 font-medium mt-2 text-sm'>King-sized Bed</h1>
        </div>
        <div className='font-bold'>
        <IoIosGlobe className='text-3xl gold mt-2 ml-2'/>
        <h1 className=' text-zinc-500 font-medium mt-2 text-sm'>Internet</h1>
        </div>
        </div>
      <p class="pl-3 text-zinc-500 text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
    </div>
    <div class="divider lg:divider-horizontal "></div> 
    <div className=''>
            <h1 className=' font-bold '>Regular Price</h1>
      
            <h1 className='text-3xl font-medium mt-2 text-blue-900 text-justify'>BDT 27,000    <span className='text-blue-900 text-sm'>/night</span></h1>
            <h3 className='text-black'>Exluding Taxes</h3>
        
          
            <h1 className='text-end pl-5 mt-4 text-blue-900 font-semiBold'>Early Winter offer-Enjoy <span className='text-xl font-medium'> <br /> 50% Discount</span></h1>
            <button class="btn btn-wide btn-secondary text-white mt-4"><Link to="/rooms">Book Now</Link></button>
        </div>
  </div>
</div>

<div class="hero  mt-6 border broder-black bg-blue-50 mb-10">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://www.coorgcliffsresort.com/images/rooms/coorg-cliffs-room-14.jpg" class="w-72 h-56 rounded-lg shadow-2xl" />
    <div className=''>
      <h1 class="text-4xl font-medium text-blue-900 mb-4">Premium Room</h1>
      <div className='flex justify-around mb-4'>
        <div className=' '>
            <h1> <SlSizeFullscreen className='text-3xl gold mt-2 font-bold ml-6'/></h1>
        <h1 className='text-zinc-500 font-medium mt-2 text-sm'>28sqm(302sqft)</h1>
        </div>
        <div className=''>
        <IoIosBed className='text-3xl gold mt-2 font-bold ml-6'/>
        <h1 className=' text-zinc-500 font-medium mt-2 text-sm'>King-sized Bed</h1>
        </div>
        <div className='font-bold'>
        <IoIosGlobe className='text-3xl gold mt-2 ml-2'/>
        <h1 className=' text-zinc-500 font-medium mt-2 text-sm'>Internet</h1>
        </div>
        </div>
      <p class="pl-3 text-zinc-500 text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
    </div>
    <div class="divider lg:divider-horizontal "></div> 
    <div className=''>
            <h1 className=' font-bold '>Regular Price</h1>
      
            <h1 className='text-3xl font-medium mt-2 text-blue-900 text-justify'>BDT 27,000    <span className='text-blue-900 text-sm'>/night</span></h1>
            <h3 className='text-black'>Exluding Taxes</h3>
        
          
            <h1 className='text-end pl-5 mt-4 text-blue-900 font-semiBold'>Early Winter offer-Enjoy <span className='text-xl font-medium'> <br /> 50% Discount</span></h1>
            <button class="btn btn-wide btn-secondary text-white mt-4"><Link to="/rooms">Book Now</Link></button>
        </div>
  </div>
</div>
        </div>
    );
};

export default RoomTypes;