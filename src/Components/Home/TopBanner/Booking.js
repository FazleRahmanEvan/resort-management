import React, { useState } from 'react';
import './Booking.css'
import { ImLocation} from "react-icons/im";
import { FaSearch} from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
    return (
      

        <div className='flex -mb-16  shadow-2xl rounded-lg'>
        <div className='justify-center  divide-x-2  px-9 flex check bg-base-100 text-black rounded-lg '>
            <div>
            <a   class="link link-hover flex font-bold w-52 text-lg mt-8 ml-2"> <ImLocation className='mr-2 mt-2 text-secondary'/>  The Suits Resort</a>
            </div>

       
            <div class=" w-42 pl-10 pr-10 mt-6">
               <h2 class=" flex gap-2 pl-1 font-bold text-gray-500"> <AiOutlineCalendar className='text-xl font-bold mt-1 text-secondary'/> Check In</h2>

             <DatePicker  className='pl-2 font-bold text-xl w-32' 
              dateFormat="dd/MM/yyyy" 
              selected={startDate}
              minDate={new Date()}
            //  maxDate={addMonths(new Date(), 5)}
              showDisabledMonthNavigation
              onChange={(date) => setStartDate(date)} />

          </div>
           
         {/* <div class="divider lg:divider-horizontal"></div> */}

            <div class=" w-42 pl-10 pr-10 mt-6">
               <h2 class=" flex gap-2 pl-1  font-bold text-gray-500"> <AiOutlineCalendar className='text-xl font-bold mt-1 text-secondary'/> Check Out</h2>

             <DatePicker  className='pl-2 font-bold text-xl w-32' dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />

          </div>

          {/* <div class="divider lg:divider-horizontal"></div>   */}

            <div class="dropdown dropdown-bottom dropdown-end w-44 pl-12 mt-5">
  <label tabindex="0" class="m-1 link link-hover font-bold text-lg text-gray-500">Room</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Adult</a></li>
    <li><a>Children</a></li>
  </ul>
</div>

        </div>
        <div className=''>
<button class="btn w-52 buttonheight btn-lg text-md btn-secondary text-white flex pl-6  "> <FaSearch className='mr-1'/> Find More</button>
</div>
        </div>
    );
};

export default Booking;