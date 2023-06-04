import './Restaurants.css';
import React, { useEffect, useState } from 'react';
import { restaurants } from '../../utils/restaurants/restaurants';
import GenerateRestaurant from '../GenerateRestaurant/GenerateRestaurant';

const Restaurants = () => {
    const [displayRestaurants, setDisplayRestaurants] = useState(restaurants.slice(0, 9));

    window.addEventListener("scroll", windowScroll);
    function windowScroll() {
        if (displayRestaurants.length + 3 <= 132) {
            if (window.innerHeight + document.documentElement.scrollTop + 5 >= document.documentElement.scrollHeight) {
                setDisplayRestaurants(restaurants.slice(0, displayRestaurants.length + 3));
            }
        }
    }

    useEffect(() => {
        return () => {
            window.removeEventListener("scroll", windowScroll);
        }
    }, [])

    return (
        <div className='restaurants-container'>
            <div className='restaurants'>
                <h3>Best Food in Kolkata</h3>
                <div className='all-restaurants'>
                    {
                        displayRestaurants.map((restaurant, index) => {
                            return <GenerateRestaurant key={index} restaurant={restaurant} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Restaurants;