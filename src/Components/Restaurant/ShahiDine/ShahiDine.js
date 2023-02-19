import React from 'react';

const ShahiDine = () => {
    return (
        <div className='mt-14'>
            <h1 className='text-3xl text-center text-neutral'>At A Glance</h1>
            <h1 className='text-5xl text-center text-secondary'>SHAHI DINE</h1>
            <p className='text-center text-secondary text-justify p-10 lg:px-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eum excepturi, ducimus iste hic et ipsa facere earum vel officia in placeat assumenda molestias praesentium tenetur alias ipsum consectetur! Aliquid.</p>

            <div className='text-center lg:px-96  grid grid-cols-1 lg:grid-cols-3  gap- mt-10 mb-16'>
            <a href="#" class=" text-secondary text-2xl bg-white hover:text-3xl font-medium">BREAKFAST</a>
       
           <a href="#"  class="text-secondary text-2xl bg-white hover:text-3xl font-medium">LUNCH</a>

            <a href="#"  class="text-secondary text-2xl bg-white hover:text-3xl font-medium">DINNER</a>
            </div>
            
        </div>
    );
};

export default ShahiDine;