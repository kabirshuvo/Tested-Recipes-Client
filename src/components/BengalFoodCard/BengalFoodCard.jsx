import React from 'react';

const BengalFoodCard = ({bFood}) => {

    const {id} = bFood;

    return (
        <div>
            <h3>Bengal Food Card {id}</h3>
        </div>
    );
};

export default BengalFoodCard;