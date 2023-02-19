import React from 'react';

const Activities = () => {
    return (
        <div class="hero mt-5 mb-6">
        <div class="hero-content mt-10 mb-7 flex-col  lg:flex-row">
        <div class="carousel max-w-lg h-96">
  <div id="slideA" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/zs8Y4XD/A1.png" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slideC" class="text-accent text-2xl font-bold ">❮</a> 
      <a href="#slideB" class="text-accent text-2xl font-bold ">❯</a>
    </div>
  </div> 
  <div id="slideB" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/pWP3pxB/A2.png" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slideA" class="text-accent text-2xl font-bold ">❮</a> 
      <a href="#slideC" class="text-accent text-2xl font-bold ">❯</a>
    </div>
  </div> 
  <div id="slideC" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/6syJzv4/A3.png" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slideB" class="text-accent text-2xl font-bold ">❮</a> 
      <a href="#slideA" class="text-accent text-2xl font-bold ">❯</a>
    </div>
  </div> 
 
</div>
       <div >
       <div className='lg:text-center' >
            <h1 class=" text-3xl font-italic text-yellow-600">RECREATIONS</h1>
            <h1 class="text-6xl font-semiBold decoration-wavy text-blue-900 mt-3">ACTIVITIES</h1>
          <div className='lg:pl-60 lg:pb-5'>
          <p class="text-justify  mt-8 text-lg  text-blue-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officia fugiat velit iste ipsum debitis nulla doloribus voluptatum, aliquam reprehenderit aperiam eveniet. Dolor non, delectus, eaque earum eveniet, id quisquam minima aliquam amet consectetur ex dicta velit praesentium?.</p>
          </div>
      
          </div>
          <div className='lg:pl-60'>
          <button class=" btn btn-active btn-secondary text-white mt-14 mb-8">Book Now</button>
          </div>
         
       </div>
        </div>
      </div>
    );
};

export default Activities;