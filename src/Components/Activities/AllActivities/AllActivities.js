import React from 'react';
import Boating from './Boating/Boating';
import Camping from './Camping/Camping';
import Fishing from './Fishing/Fishing';
import SkyDiving from './SkyDiving/SkyDiving';

const AllActivities = () => {
    return (
        <div>
            <SkyDiving></SkyDiving>
            <Camping></Camping>
            <Boating></Boating>
            <Fishing></Fishing>
        </div>

      
    );
};

export default AllActivities