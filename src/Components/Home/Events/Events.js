import React from 'react';

const Events = () => {
    return (
        <div class="hero bg-blue-50 ">
        <div class="hero-content mt-10 mb-7 flex-col lg:flex-row-reverse">
        <div class="carousel max-w-lg h-96">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/CMtGpdv/E3.png" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="text-accent text-2xl font-bold ">❮</a> 
      <a href="#slide2" class="text-accent text-2xl font-bold ">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/ZHB6pmJ/E1.png" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="text-accent text-2xl font-bold ">❮</a> 
      <a href="#slide3" class="text-accent text-2xl font-bold ">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/gmxfcgb/E2.png" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="text-accent text-2xl font-bold ">❮</a> 
      <a href="#slide1" class="text-accent text-2xl font-bold ">❯</a>
    </div>
  </div> 
 
</div>
          <div className='justify-center'>
            <h1 class="text-3xl font-italic text-gold-600">Unforgettable Moments</h1>
            <h1 class="text-6xl font-semiBold decoration-wavy text-blue-900 mt-3">WEDDING & EVENTS</h1>
            <h1 class=" underline decoration-wavy"></h1>
            <p class="mt-8 text-lg text-justify-center lg:w-2/3 text-blue-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officia fugiat velit iste ipsum debitis nulla doloribus voluptatum, aliquam reprehenderit aperiam eveniet. Dolor non, delectus, eaque earum eveniet, id quisquam minima aliquam amet consectetur ex dicta velit praesentium?.</p>
            <button class=" btn btn-active btn-secondary text-white mt-14 mb-8">Book Now</button>
          </div>
        </div>
      </div>
    );
};

export default Events;