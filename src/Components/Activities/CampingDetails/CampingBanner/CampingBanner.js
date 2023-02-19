import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const CampingBanner = () => {
    return (
        <div>
                <div className="carousel-wrapper ">
         <Carousel className='' infiniteLoop thumbWidth={280}>
     
             <div>
                 <img src="https://wallpaperaccess.com/full/4936309.jpg" />
                 <div class="absolute top-8 right-12">
   <button class=" btn-accent text-blue  btn ">Book Now</button>
</div>
             </div>
             <div>
                 <img src="http://www.tourismsaskatchewan.com/-/media/saskparks/headers2021/header_seasonal.ashx"  />
                 <div class="absolute top-8 right-12">
   <button class=" btn-accent text-blue  btn ">Book Now</button>
</div>
             </div>
             <div>
                 <img src="https://raftinginfo.com/wp-content/uploads/2019/07/page19-2-1920x1080.jpg"  />
                 <div class="absolute top-8 right-12">
   <button class=" btn-accent text-blue  btn ">Book Now</button>
</div>
             </div>
             <div>
                 <img src="https://www.teahub.io/photos/full/38-389205_wiki-camping-backgrounds-desktop-pic-wpc008079-data-tent.jpg"  />
                 <div class="absolute top-8 right-12">
   <button class=" btn-accent text-blue  btn ">Book Now</button>
</div>
             </div>
             <div>
                 <img src="https://raftinginfo.com/wp-content/uploads/2019/07/page19-2-1920x1080.jpg"  />
                 <div class="absolute top-8 right-12">
   <button class=" btn-accent text-blue  btn ">Book Now</button>
</div>
             </div>
             <div>
                 <img src="https://images.wallpaperscraft.com/image/single/tent_starry_sky_bonfire_134960_1920x1080.jpg"  />
                 <div class="absolute top-8 right-12">
   <button class=" btn-accent text-blue  btn ">Book Now</button>
</div>
             </div>
         </Carousel>
     </div>
        </div>
    );
};

export default CampingBanner;