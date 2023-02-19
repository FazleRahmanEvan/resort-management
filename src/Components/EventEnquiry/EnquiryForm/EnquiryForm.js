import React from 'react';
import './EnquiryForm.css'


const EnquiryForm = () => {
    return (
        <div>
            <div>
                <h1 className='text-5xl text-secondary text-center font-medium'>MEETINGS & EVENTS ENQUIRY</h1>
            </div>
              
              <div className='grid justify-center'>
              <div className='mt-16 mb-8 eventwidth '>
            <div class="form-control w-full">
         <label class="label ">
        <span class="label-text text-xl font-medium text-secondary mb-2">Type of Event</span>
       </label>
         <input type="text" placeholder="Enter Your Event Type" class="input input-slate-900 input-bordered eventheight text-gray-700 rounded-none" />
          </div>
            </div>
            
            <div className='flex gap-5 mb-8'>
            <div class="form-control w-full ">
         <label class="label ">
        <span class="label-text text-xl font-medium text-secondary mb-2">Event Date</span>
       </label>
         <input type="text" placeholder="Enter Your Event Date" class="input input-bordered h-20 text-gray-700 rounded-none eventheight" />
          </div>
            <div class="form-control w-full">
         <label class="label ">
        <span class="label-text text-xl font-medium text-secondary mb-2">Number Of Guests</span>
       </label>
         <input type="text" placeholder="Enter Number Of Guests" class="input input-bordered h-20 text-gray-700 rounded-none eventheight" />
          </div>
            </div>


            <div className='mb-8 eventwidth '>
            <div class="form-control w-full">
         <label class="label ">
        <span class="label-text text-xl font-medium text-secondary mb-2">Your Name</span>
       </label>
         <input type="text" placeholder="Enter Your Full Name" class="input input-bordered h-20 text-gray-700 rounded-none eventheight" />
          </div>
            </div>

            <div className='flex gap-5 mb-8'>
            <div class="form-control w-full ">
         <label class="label ">
        <span class="label-text text-xl font-medium text-secondary mb-2">Contact Number</span>
       </label>
         <input type="text" placeholder="Enter Your Contact Number" class="input input-bordered h-20 text-gray-700 rounded-none eventheight" />
          </div>
            <div class="form-control w-full">
         <label class="label ">
        <span class="label-text text-xl font-medium text-secondary mb-2">E-mail</span>
       </label>
         <input type="text" placeholder="Enter Your E-mail" class="input input-bordered h-20 text-gray-700 rounded-none eventheight" />
          </div>
            </div>

            
            <div className='mb-8 eventwidth '>
            <div class="form-control w-full">
         <label class="label ">
        <span class="label-text text-xl font-medium text-secondary mb-2">Address</span>
       </label>
         <input type="text" placeholder="Enter Your Address" class="input input-bordered h-20 text-gray-700 rounded-none eventheight" />
          </div>
            </div>

            <div class=" flex gap-5 mb-16">
            
            <button class="btn submitbutton btn-secondary text-white">Submit</button>
           <button class="hover:bg-red-700 rounded-lg  cancelbutton text-white ">Cancel</button>
            </div>

              </div>
              
        </div>
    );
};

export default EnquiryForm;