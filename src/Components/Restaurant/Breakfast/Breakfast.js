import React from 'react';
import './Breakfast.css'
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Breakfast = () => {
    return (
        <div className='mt-14 mb-24'>
          <div className=''>
          <div className='flex text-center justify-evenly lg:px-44 '>
               
               <h1 className='text-secondary text-xl '><span className='lg:pr-10'>1.</span>Warm Spinach Dip & Chips</h1>

               <h1 className='text-neutral text-xl'>TK.250</h1>
           </div>
           <p className='text-center sm:justify  mt-8 text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, quod  amet consectetur .</p>
          <hr />
          </div>
          <div className='mt-14'>
          <div className='flex text-center justify-evenly lg:px-44 '>
               
               <h1 className='text-secondary text-xl '><span className='lg:pr-10'>2.</span>Warm Spinach Dip & Chips</h1>

               <h1 className='text-neutral text-xl'>TK.250</h1>
           </div>
           <p className='text-center sm:justify  mt-8 text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, quod  amet consectetur .</p>
          <hr className='' />
          </div>
          <div className='mt-14'>
          <div className='flex text-center justify-evenly lg:px-44 '>
               
               <h1 className='text-secondary text-xl '><span className='lg:pr-10'>3.</span>Warm Spinach Dip & Chips</h1>

               <h1 className='text-neutral text-xl'>TK.250</h1>
           </div>
           <p className='text-center sm:justify  mt-8 text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, quod  amet consectetur .</p>
          <hr className='' />
          </div>
          <div className='mt-14'>
          <div className='flex text-center justify-evenly lg:px-44 '>
               
               <h1 className='text-secondary text-xl '><span className='lg:pr-10'>4.</span>Warm Spinach Dip & Chips</h1>

               <h1 className='text-neutral text-xl'>TK.250</h1>
           </div>
           <p className='text-center sm:justify  mt-8 text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, quod  amet consectetur .</p>
          <hr className='' />
          </div>
          <div className='mt-14'>
          <div className='flex text-center justify-evenly lg:px-44 '>
               
               <h1 className='text-secondary text-xl '><span className='lg:pr-10'>5.</span>Warm Spinach Dip & Chips</h1>

               <h1 className='text-neutral text-xl'>TK.250</h1>
           </div>
           <p className='text-center sm:justify  mt-8 text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, quod  amet consectetur .</p>
          <hr className='' />
          </div>
            
            <div className='lg:ztext-center mt-28 mb-36 flex sideline'>
                <h4 />
            <div class="dropdown text-secondary">
              <button class="btn btn-outline btn-primary btn-wide font-bold rounded-none">Select Restaurant <FaAngleDown className='ml-3 text-xl'/></button>
             <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60">
             <li><a><Link to ="/food">Item 1</Link></a></li>
            <li><a>Item 2</a></li>
            </ul>
            </div>
            <h4 />
            </div>
      
       
        </div>
    );
};

export default Breakfast;