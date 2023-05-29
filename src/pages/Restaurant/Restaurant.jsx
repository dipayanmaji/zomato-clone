import './Restaurant.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {restaurantDetails} from '../../utils/restaurantDetails/restaurantDetails';

const Restaurant = () => {
    const params = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
        const restaurantId = params.id;
        const lastDizitOfId = restaurantId.charAt(restaurantId.length - 1);
        console.log(restaurantDetails[lastDizitOfId]);
    }, [])

    return (
        <div className='restaurant-page'>
            Restaurant name: {params.restaurant}<br />
            Restaurant ID: {params.id}
        </div>
    )
}

export default Restaurant;