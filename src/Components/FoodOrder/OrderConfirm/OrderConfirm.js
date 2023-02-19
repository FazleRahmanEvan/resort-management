import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";
import './OrderConfirm.css'

const OrderConfirm = () => {
    return (
        <div className='mt-16 mb-20 px-20'> 
            <div className='flex  gap-6'>
             <div className='w-52  mt-2 rounded '>
                <img  src="https://static.fanpage.it/wp-content/uploads/sites/22/2021/09/beef-burger.jpg" alt="" />
             </div>
            <div className='foodDetails'>
                <h1 className='text-xl font-medium text-secondary '>Burger</h1>
                <p className='text-gray-400 food text-justify-center mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, saepe? Fugit provident maiores voluptates ipsam esse.</p>
                <h3 className='text-gray-500 font-medium mt-3'>Add-ons: Bacon, Cheese</h3>
            </div>

            <div className='flex text-gray-500 border border-x h-11 rounded-lg mt-8 ml-20'>
                <h1 className=' ml-3 mt-4 text-sm'><FaMinus/></h1>
                <div class="divider lg:divider-horizontal"></div> 
                <h1 className='font-medium text-xl mt-2'>2</h1>
                <div class="divider lg:divider-horizontal h-4"></div>
                <h2 className=' font-bold mt-4 mr-4 text-sm'><FaPlus/></h2>
            </div>
             
             <div className='ml-36'>
                 <h1 className='text-secondary font-bold mt-9 ml-16 text-xl'>Tk.300</h1>
             </div>

             <div>
                <h1> <RiDeleteBin6Line className='text-red-500 mt-9 ml-6 text-2xl '/></h1>
               
             </div>

            </div>


            <div className='flex  gap-6 mt-16'>
             <div className='w-52  mt-2 rounded '>
                <img  src="https://www.countdown.co.nz/Content/Recipes/226015-images-large-quick_burgers-810x520.jpg" alt="" />
             </div>
            <div className='foodDetails'>
                <h1 className='text-xl font-medium text-secondary '>Burger</h1>
                <p className='text-gray-400 food text-justify-center mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, saepe? Fugit provident maiores voluptates ipsam esse.</p>
                <h3 className='text-gray-500 font-medium mt-3'>Add-ons: </h3>
            </div>

            <div className='flex text-gray-500 border border-x h-11 rounded-lg mt-8 ml-20'>
                <h1 className=' ml-3 mt-4 text-sm'><FaMinus/></h1>
                <div class="divider lg:divider-horizontal"></div> 
                <h1 className='font-medium text-xl mt-2'>2</h1>
                <div class="divider lg:divider-horizontal h-4"></div>
                <h2 className=' font-bold mt-4 mr-4 text-sm'><FaPlus/></h2>
            </div>
             
             <div className='ml-36'>
                 <h1 className='text-secondary font-bold mt-9 ml-16 text-xl'>Tk.300</h1>
             </div>

             <div>
                <h1> <RiDeleteBin6Line className='text-red-500 mt-9 ml-6 text-2xl '/></h1>
             </div>

            </div>

            <div className='total'>
            <div class="divider "></div>
            <div className='flex justify-between text-xl '>
            <h1 className='text-gray-500 font-semiBold ml-16'>Subtotal</h1>

            <h1 className='mr-14 text-gray-600 '>600TK</h1>
            </div>
            <div className='flex justify-between text-xl mt-8 '>
            <h1 className='text-gray-500 font-semiBold ml-16'>Discount</h1>

            <h1 className='mr-14 text-gray-600 '>0.00TK</h1>
            </div>

            <div class="divider "></div>

            <div className='flex justify-between text-xl mt-4 '>
            <h1 className='text-secondary font-bold ml-20'>Total</h1>

            <h1 className='mr-14 text-secondary font-bold '>600TK</h1>
            </div>
            </div>
          <div className='text-center mt-16'>
          <button class="btn btn-secondary justify-center text-white px-8 py-4 ">Confirm Order</button>
          </div>
            
        </div>
    );
};

export default OrderConfirm;