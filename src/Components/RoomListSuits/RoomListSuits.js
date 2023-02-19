import React from 'react';
import TopBanner from '../Home/TopBanner/TopBanner';
import RoomTypes from './RoomsTypes/RoomTypes';
import TypesPrice from './SuitTypes&Price/TypesPrice';

const RoomListSuits = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <div className='flex mt-24'>
            <TypesPrice></TypesPrice>
            <RoomTypes></RoomTypes>
            </div>
           
        </div>
    );
};

export default RoomListSuits;