import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './EventBanner.css'
const EventBanner = () => {
    return (
        <div>
        <div className="carousel-wrapper ">
         <Carousel className='' infiniteLoop thumbWidth={280}>
     
             <div>
                 <img src="https://wallpaperaccess.com/full/2489663.jpg" />
                 <div class="absolute top-8 right-12">
   <button class=" btn-accent text-blue  btn ">Book Now</button>
</div>
             </div>
             <div>
                 <img src="https://wallpapercave.com/wp/wp7488228.jpg"  />
                 <div class="absolute top-8 right-12">
   <button class=" btn-accent text-blue  btn ">Book Now</button>
</div>
             </div>
             <div>
                 <img src="https://d3gvulv26aro02.cloudfront.net/margaritavillehollywood.dev.cendynecommerce.com-3909797587/cms/cache/v2/632897c6a6410.jpg/1920x1080/fit;c:0,377,8688,5264/80/fbe1a8292b883b9433f0e2db187a4176.jpg"  />
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
                 <img src="https://www.redrockresort.com/wp-content/uploads/2020/04/WeddingHeader.jpg"  />
                 <div class="absolute top-8 right-12">
   <button class=" btn-accent text-blue  btn ">Book Now</button>
</div>
             </div>
             <div>
                 <img src="https://www.dubrovniksungardens.com/datastore/imagestore/1920x1080/1920x1080_1658316235Festa-velika-naslovna-1-3.jpg?v=1658316236"  />
                 <div class="absolute top-8 right-12">
   <button class=" btn-accent text-blue  btn ">Book Now</button>
</div>
             </div>
         </Carousel>
     </div>
     </div>
    );
};

export default EventBanner;