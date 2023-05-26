import './Restaurants.css';
import React from 'react';
import { restaurants } from '../../utils/restaurants/restaurants';
import GenerateRestaurant from '../GenerateRestaurant/GenerateRestaurant';

const Restaurants = () => {
    return (
        <div className='restaurants-container'>
            <div className='restaurants'>
                <h3>Best Food in Kolkata</h3>
                <div className='all-restaurants'>
                    {
                        restaurants.map((restaurant, index) => {
                            return <GenerateRestaurant key={index} restaurant={restaurant} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Restaurants;