import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import OrderConfirm from '../OrderConfirm/OrderConfirm';

const OrderDetails = () => {
    return (
        <div>

            <div className='flex justify-between mt-10 mb-10'>
                <div>
                <h1 className='flex gap-2 ml-20'> <FaArrowLeft className='mt-2'/> <span className='text-xl text-secondary font-bold'><Link to="/food">Back</Link></span></h1>
                </div>

                <div>
                <button class="btn btn-warning text-white mr-20">Place Another Order</button>  
               </div>

            </div>
            <div class="divider w-11/12 ml-14"></div>

              <OrderConfirm></OrderConfirm>

          
   
          
        </div>
    );
};

export default OrderDetails;