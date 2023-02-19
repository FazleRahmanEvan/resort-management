import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css'
const Banner = () => {
    return (
        <div className=''>
                <div className="carousel-wrapper ">
            <Carousel className='' infiniteLoop thumbWidth={280}>
        
                <div>
                    <img src="https://d3gvulv26aro02.cloudfront.net/margaritavillehollywood.dev.cendynecommerce.com-3909797587/cms/cache/v2/632897c6a6410.jpg/1920x1080/fit;c:0,377,8688,5264/80/fbe1a8292b883b9433f0e2db187a4176.jpg" />
                    <div class="absolute top-8 right-12">
                    <button class=" btn-accent text-blue  btn ">Book Now</button>
                    </div>
                </div>
                <div>
                    <img src="https://www.champanerheritageresort.com/wp-content/uploads/2017/04/Corporate-Events-Champaner-Heritage-Resort-1920x1080-Main-1920x1080.jpg"  />
                    <div class="absolute top-8 right-12">
                    <button class=" btn-accent text-blue  btn ">Book Now</button>
                    </div>
                </div>
                <div>
                    <img src="https://www.berjayahotel.com/sites/default/files/hotel-event-offers/kualalumpur/offer-events.jpg"  />
                    <div class="absolute top-8 right-12">
      <button class=" btn-accent text-blue  btn ">Book Now</button>
  </div>
                </div>
                <div>
                    <img src="https://jeevaresorts.com/santai/wp-content/uploads/sites/3/2022/05/santai-event-1.jpg"  />
                    <div class="absolute top-8 right-12">
      <button class=" btn-accent text-blue  btn ">Book Now</button>
  </div>
                </div>
                <div>
                    <img src="https://dok4pfotcdst1.cloudfront.net/crystalgolfresort.com-4150340826/cms/cache/v2/6217db83d213a.jpg/1920x1080/fit/80/fdd950a2c81b1fbe3c3a375e41a192be.jpg"  />
                    <div class="absolute top-8 right-12">
      <button class=" btn-accent text-blue  btn ">Book Now</button>
  </div>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMVR2ltSBRmuXTuhCD148RQWYZZ4J8a6BiA&usqp=CAU"  />
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