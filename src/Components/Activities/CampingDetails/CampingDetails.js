import React from 'react';
import ActivitiesButton from '../ActivitiesButton/ActivitiesButton';
import Camping from '../AllActivities/Camping/Camping';
import CampingBanner from './CampingBanner/CampingBanner';
import CampingCarousel from './CampingCarousel/CampingCarousel';
import CampTitle from './CampTitle/CampTitle';
import PackageDetails from './PackageDetails/PackageDetails';

const CampingDetails = () => {
    return (
        <div>
            <CampingBanner></CampingBanner>
            <CampTitle></CampTitle>
            <PackageDetails></PackageDetails>
            <CampingCarousel></CampingCarousel>
            <div className='px-4'>
            <ActivitiesButton ></ActivitiesButton>
            </div>
            
            
        </div>
    );
};

export default CampingDetails;