import React from 'react';
import './PackageDetails.css'

const PackageDetails = () => {
    return (
        <div>
            <div className='mt-24 mb-24'>
                <h1 className='text-4xl text-center text-secondary font-medium'>Package Details</h1>
            </div>

            <div className='flex justify-center mt-16 mb-16 gap-16 '>
            <div class="card  background shadow-sm text-secondary">
            <div class="card-body">
            <h2 class="packagetext font-medium text-center">Light Package</h2>
            <p class=" text-center text-xl font-medium mt-4 ">Duration- Full Night</p>
            <p class=" text-center text-xl font-medium mt-4 ">Capacity- 2 person/tent</p>
            <p class=" text-center text-xl font-medium mt-4 ">Price- TK 600/person</p>
           
           </div>
           </div>
            
           <div class="card background shadow-sm text-secondary">
            <div class="card-body">
            <h2 class="packagetext font-medium text-center">Regular Package</h2>
            <p class=" text-center text-xl font-medium mt-4 ">Duration- Full Night</p>
            <p class=" text-center text-xl font-medium mt-4 ">Capacity- 2 person/tent</p>
            <p class=" text-center text-xl font-medium mt-4 ">Price- TK 600/person</p>
           
           </div>
           </div>

           <div class="card background shadow-sm text-secondary">
            <div class="card-body">
            <h2 class="packagetext font-medium text-center">Full Package</h2>
            <p class=" text-center text-xl font-medium mt-4 ">Duration- Full Night</p>
            <p class=" text-center text-xl font-medium mt-4 ">Capacity- 2 person/tent</p>
            <p class=" text-center text-xl font-medium mt-4 ">Price- TK 600/person</p>
           
           </div>
           </div>

            </div>

            <div className='text-center mb-16 mt-28'>
            <button class="btn btn-lg px-8 btn-secondary text-white text-md">Book Now</button>
            </div>
        </div>
    );
};

export default PackageDetails;