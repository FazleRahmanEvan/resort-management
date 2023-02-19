import React from 'react';
import Rooms from '../Room&Suits/Rooms/Rooms';
import Activities from './Activities/Activities';
import Events from './Events/Events';
import ResortDescripotion from './ResortDescription/ResortDescripotion';
import RestaurantDinning from './RestaurantDinning/RestaurantDinning';
import RoomSuits from './RoomSuits/RoomSuits';
import Booking from './TopBanner/Booking';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
       <TopBanner></TopBanner>
       <ResortDescripotion></ResortDescripotion>
       <RoomSuits></RoomSuits>
       <RestaurantDinning></RestaurantDinning>
       <Events></Events>
       <Activities></Activities>
       
  
        </div>

    );
};

export default Home;