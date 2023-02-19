import React from 'react';
import './FoodOrderBanner.css'

const FoodOrderBanner = () => {
    return (
        <div class="hero heights mb-28" style={{
            background:`url(https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000)`
        }}>
  <div class="hero-overlay bg-black bg-opacity-50"></div>
  <div class="hero-content text-center  text-white">
    <div class="">
      
      <p class="mb-5 text-5xl font-medium ">Enjoy The Elegant</p>
      <p class="mb-5 text-5xl font-medium">Dinning Restaurant and Stunning Atomsphere</p>
    
    </div>
    <div class="absolute top-8 right-12">
      <button class=" btn-accent text-secondary px-8 btn font-bold">Order Online</button>
  </div>
  </div>
</div>
    );
};

export default FoodOrderBanner;