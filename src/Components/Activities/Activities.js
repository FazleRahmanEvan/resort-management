import React from 'react';
import ActivitiesBanner from './ActivitiesBanner/ActivitiesBanner';
import AllActivities from './AllActivities/AllActivities';
import Title from './Title/Title';

const Activities = () => {
    return (
        <div>
         <ActivitiesBanner></ActivitiesBanner>
         <Title></Title>
         <AllActivities></AllActivities>
        
        </div>
    );
};

export default Activities;