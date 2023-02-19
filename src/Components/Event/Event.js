import React from 'react';
import Banner from '../Room&Suits/Banner/Banner';
import Details from './Details/Details';
import EventBanner from './EventBanner/EventBanner';
import EventButton from './EventButton/EventButton';
import ShahiMahal from './ShahiMahal/ShahiMahal';

const Event = () => {
    return (
        <div>
            <EventBanner></EventBanner>
            <ShahiMahal></ShahiMahal>
            <Details></Details>
            <EventButton></EventButton>
        </div>
    );
};

export default Event;