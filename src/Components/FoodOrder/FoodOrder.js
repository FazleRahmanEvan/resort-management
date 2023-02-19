import React from 'react';
import BreakFastItems from './BreakfastItems/BreakFastItems';
import FoodOrderBanner from './FoodOrderBanner/FoodOrderBanner';
import Title from './Title/Title';
import ViewOrderButton from './ViewOrderButton/ViewOrderButton';

const FoodOrder = () => {
    return (
        <div>
            <FoodOrderBanner></FoodOrderBanner>
            <Title></Title>
            <ViewOrderButton></ViewOrderButton>
            <BreakFastItems></BreakFastItems>
        </div>
    );
};

export default FoodOrder;