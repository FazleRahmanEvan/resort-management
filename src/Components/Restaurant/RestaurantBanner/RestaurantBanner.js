import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import './RestaurantBanner.css'
const RestaurantBanner = () => {
    return (
        <div>
                <div className="carousel-wrapper ">
            <Carousel className='' infiniteLoop thumbWidth={280}>
        
                <div>
                    <img src="https://i.pinimg.com/originals/3d/a3/7d/3da37dc6421f978a50e165466f221d72.jpg" />
                    <div class="absolute top-8 right-12">
                    <button class="btn-accent text-secondary px-8 btn font-bold"><Link to="/food">Order Online</Link></button>
                    </div>
                </div>
                <div>
                    <img src="https://wallpaperaccess.com/full/3014601.jpg"  />
                    <div class="absolute top-8 right-12">
                    <button class="btn-accent text-secondary px-8 btn font-bold "><Link to="/food">Order Online</Link></button>
                    </div>
                </div>
                <div>
                    <img src="https://wallpaperaccess.com/full/3014596.jpg"  />
                    <div class="absolute top-8 right-12">
                    <button class=" btn-accent text-secondary px-8 btn font-bold"><Link to="/food">Order Online</Link></button>
                    </div>
                </div>
                <div>
                    <img src="https://wallpapercave.com/wp/wp7846006.jpg"/>
                    <div class="absolute top-8 right-12">
                     <button class=" btn-accent text-secondary px-8 btn font-bold"><Link to="/food">Order Online</Link></button>
                </div>
                </div>
                <div>
                    <img src="https://wallpaperaccess.com/full/462860.jpg" />
                    <div class="absolute top-8 right-12">
                    <button class=" btn-accent text-secondary px-8 btn font-bold"><Link to="/food">Order Online</Link></button>
                    </div>
                </div>
                <div>
                    <img src="https://wallpaperaccess.com/full/165263.jpg" />
                    <div class="absolute top-8 right-12">
                    <button class=" btn-accent text-secondary px-8 btn font-bold"><Link to="/food">Order Online</Link></button>
                    </div>
                </div>
            </Carousel>
        </div>
        </div>
    );
};

export default RestaurantBanner;