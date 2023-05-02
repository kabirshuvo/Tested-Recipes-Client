import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeCard = () => {
    const {id} = useParams();
    return (
        <div>
            Recipe Card...id No: {id}
        </div>
    );
};

export default RecipeCard;