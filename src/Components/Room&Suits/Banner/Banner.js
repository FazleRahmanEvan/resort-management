import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css'
const Banner = () => {
    return (
        <div>
           <div className="carousel-wrapper ">
            <Carousel className='' infiniteLoop thumbWidth={280}>
        
                <div>
                    <img src="https://www.theresortmumbai.com/images/9d9072fda9705f95e51f93474ac52b90.jpg" />
                    <div class="absolute top-8 right-12">
      <button class=" btn-accent text-blue  btn ">Book Now</button>
  </div>
                </div>
                <div>
                    <img src="https://www.theresortmumbai.com/images/67164f4b26e6ff16744c8a486da9620d.jpg"  />
                    <div class="absolute top-8 right-12">
      <button class=" btn-accent text-blue  btn ">Book Now</button>
  </div>
                </div>
                <div>
                    <img src="https://grandsylhet.com/wp-content/themes/grandsylhet/assets/images/homeslides/introslider_02.jpg"  />
                    <div class="absolute top-8 right-12">
      <button class=" btn-accent text-blue  btn ">Book Now</button>
  </div>
                </div>
                <div>
                    <img src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/289837830.jpg?k=b678158ce526b793b28b63c8ccb457b03c45bf4267d1f0ec314dcc90915f62f0&o="  />
                    <div class="absolute top-8 right-12">
      <button class=" btn-accent text-blue  btn ">Book Now</button>
  </div>
                </div>
                <div>
                    <img src="https://www.hellocorbett.in/wp-content/uploads/2020/03/resort-with-private-pool.jpg"  />
                    <div class="absolute top-8 right-12">
      <button class=" btn-accent text-blue  btn ">Book Now</button>
  </div>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZYDizbCu3o8QL_Ifg2vXaXZ7hivH8wMbBJw&usqp=CAU"  />
                    <div class="absolute top-8 right-12">
      <button class=" btn-accent text-blue  btn ">Book Now</button>
  </div>
                </div>
            </Carousel>
        </div>
        </div>
    );
};

export default Banner;