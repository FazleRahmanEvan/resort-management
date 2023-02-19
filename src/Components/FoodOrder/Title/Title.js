import React from 'react';

const Title = () => {
    return (
        <div>
               <div className='mt-14 mb-16'>
        <h1 className='text-3xl text-center text-neutral'>At A Glance</h1>
        <h1 className='text-5xl text-center text-secondary'>SHAHI DINE</h1>
        </div>

        <div className='justify-center flex gap-14'>
            <a href="#" class=" text-secondary text-2xl bg-white hover:text-3xl font-medium">BREAKFAST</a>
       
           <a href="#"  class="text-secondary text-2xl bg-white hover:text-3xl font-medium">LUNCH</a>

            <a href="#"  class="text-secondary text-2xl bg-white hover:text-3xl font-medium">DINNER</a>
            </div>
        </div>
    );
};

export default Title;