import React from 'react';
import Banner from '../Room&Suits/Banner/Banner';

import Breakfast from './Breakfast/Breakfast';
import RestaurantBanner from './RestaurantBanner/RestaurantBanner';
import ShahiDine from './ShahiDine/ShahiDine';

const Restaurant = () => {
    return (
        <div>
            <RestaurantBanner></RestaurantBanner>
            <ShahiDine></ShahiDine>
            <Breakfast></Breakfast>
        </div>
    );
};

export default Restaurant;