import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = () => {
    return (
        <div className='flex justify-between mt-2 px-6 pb-2'>
        <h3 className='text-2xl text-secondary font-medium mt-2'>Tk. 400</h3>
        {/* <button class="btn btn-sm mt-4 px-4 my-4 btn-secondary text-white">Add</button> */}
    
<label for="my-modal-6" class="btn btn-sm mt-4 px-4 my-4 btn-secondary text-white">Add</label>


<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal  modal-bottom sm:modal-middle">
<div class="modal-box ">
<label for="my-modal-6" class=" font-bold text-xl text-gray-400 absolute right-6 top-6">✕</label>
<h3 class="font-medium text-3xl text-secondary">Double Patty Special</h3>
<p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>

<div class="card w-96 bg-base-100 shadow-xl ml-6">
<div class="card-body">
<h2 class="card-title">Add-Ons</h2>

<div class="divider"></div>

<div class="flex items-center mb-4">
<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-blue-900 focus:ring-blue-900 dark:focus:ring-blue-900 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
<p class="ml-6 text-sm font-medium text-gray-500 dark:text-gray-300">Chicken Patty</p>
<span className='text-end text-sm font-bold text-secondary'>Tk. 80</span>
</div>
<div class="flex items-center mb-4">
<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-blue-900 focus:ring-blue-900 dark:focus:ring-blue-900 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
<p class="ml-6 text-sm font-medium text-gray-500 dark:text-gray-300">Beef Patty</p>
<span className='text-end text-sm font-bold text-secondary'>Tk. 80</span>
</div>
<div class="flex items-center mb-4">
<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-blue-900 focus:ring-blue-900 dark:focus:ring-blue-900 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
<p class="ml-6 text-sm font-medium text-gray-500 dark:text-gray-300">Sausage</p>
<span className='text-end text-sm font-bold text-secondary'>Tk. 80</span>
</div>
<div class="flex items-center mb-4">
<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-blue-900 focus:ring-blue-900 dark:focus:ring-blue-900 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
<p class="ml-6 text-sm font-medium text-gray-500 dark:text-gray-300">Permesan Cheese</p>
<span className='text-end text-sm font-bold text-secondary'>Tk. 80</span>
</div>
<div class="flex items-center mb-4">
<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-blue-900 focus:ring-blue-900 dark:focus:ring-blue-900 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
<p class="ml-6 text-sm font-medium text-gray-500 dark:text-gray-300">Sausage</p>
<span className='text-end text-sm font-bold text-secondary'>Tk. 80</span>
</div>

<div class="divider"></div>

<div class="modal-action">
  <label for="my-modal-5" class="btn px-6 btn-sm btn-secondary text-white"><Link to="/confirmOrder">Add To Cart</Link></label>
</div>
</div>
</div>

</div>
</div>

        </div>
    );
};

export default AddButton;