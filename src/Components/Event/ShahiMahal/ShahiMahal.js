import React from 'react';
import { FaUsers } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";
import { RxDimensions } from "react-icons/rx";
import { AiOutlineColumnHeight } from "react-icons/ai";
const ShahiMahal = () => {
    return (
        <div className='mt-14'>
        <h1 className='text-3xl text-center text-neutral'>At A Glance</h1>
        <h1 className='text-5xl text-center text-secondary'>SHAHI MAHAL</h1>
        <p className='text-center text-secondary text-justify p-10 px-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eum excepturi, ducimus iste hic et ipsa facere earum vel officia in placeat assumenda molestias praesentium tenetur alias ipsum consectetur! Aliquid.</p>

        <div className='justify-evenly flex gap- '>
       <div>
       <FaUsers className='text-7xl gold mt-3 mb-5 ml-20'></FaUsers>
       <p className='text-xl text-secondary font-medium'>Capacity- Up to 200 Guets</p>
       </div>
       <div>
       <SlSizeFullscreen  className='text-6xl font-semiBold gold mt-4 mb-7 ml-14'/>
       <p className='text-xl text-secondary font-medium'>Room Area -131sqm <br/> <span  className='pl-8'>(1660 sq ft)</span></p>
       </div>
       <div>
       <RxDimensions className='text-7xl gold mt-3 mb-6 ml-14'/>
       <p className='text-xl text-secondary font-medium'>Dimmensions -19x8 m <br/> <span  className='pl-8'>(62.34x26.52 ft)</span></p>
       </div>
       <div>
       <AiOutlineColumnHeight className='text-7xl gold mt-3 mb-6 ml-20 '/>
       <p className='text-xl text-secondary font-medium'>Celling Height -3m (9.84 ft)</p>
       </div>
        </div>
        
    </div>
    );
};

export default ShahiMahal;