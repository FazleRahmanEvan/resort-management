import React from 'react';

const DiscoverRoomSlide = ({room}) => {
    const { image, roomquality,roomsize,roomprice,offer} = room;
    return (
        <div className='px-16'>
            <div  class="card  w-96  bg-white shadow-xl mb-8">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="text-start text-blue-900 text-2xl font-semibold ">{roomquality}</h2>
        <h2 class="text-start text-blue-900 text-xl font-semibold ">Room size:{roomsize}</h2>
        <h2 class="text-start text-blue-900 text-3xl font-semibold ">BDT {roomprice}</h2>
        <h2 class="text-end text-blue-900 text-sm font-semibold mt-3 mb-5">{offer}</h2>
        {/* <p></p> */}
        <div class="card-actions justify-center mt-3">
          <button class="btn  btn-secondary text-white btn-rounded">Book Now</button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default DiscoverRoomSlide;