import React from 'react';
import { FaAngleDown } from "react-icons/fa";

const EventButton = () => {
    return (
        <div className='text-center mt-28 mb-36 flex sideline'>
        <h4 />
    <div class="dropdown text-secondary">
      <button class="btn btn-outline btn-primary btn-wide font-bold rounded-none">Select Venues <FaAngleDown className='ml-3 text-xl'/></button>
     <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60">
     <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    </ul>
    </div>
    <h4 />
    </div>
    );
};

export default EventButton;