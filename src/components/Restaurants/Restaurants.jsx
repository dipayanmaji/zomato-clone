import './Restaurants.css';
import React, { useEffect, useState } from 'react';
import { restaurants } from '../../utils/restaurants/restaurants';
import GenerateRestaurant from '../GenerateRestaurant/GenerateRestaurant';

const Restaurants = ({ filterType }) => {
    const [allRestaurants, setAllRestaurants] = useState(restaurants);
    const [displayRestaurants, setDisplayRestaurants] = useState(restaurants.slice(0, 9));

    const filterTypeHandler = (type) => {
        if (type === "pureVeg") {
            const vegRestaurants = restaurants.filter((restaurant) => {
                return restaurant.isPureVeg;
            })
            setAllRestaurants(vegRestaurants);
            setDisplayRestaurants(vegRestaurants.slice(0, 9));
        }
        else if (type === "deliveryTime") {
            const deliveryTimeWiseRestaurants = new Array(...restaurants);
            deliveryTimeWiseRestaurants.sort((a, b) => (a.order.deliveryTime.split("").slice(0, 2).join("") - b.order.deliveryTime.split("").slice(0, 2).join("")));
            setAllRestaurants(deliveryTimeWiseRestaurants);
            setDisplayRestaurants(deliveryTimeWiseRestaurants.slice(0, 9));
        }
        else if (type === "rating") {
            const ratingWiseRestaurants = new Array(...restaurants);
            ratingWiseRestaurants.sort((a, b) => (b.info.rating.rating_text - a.info.rating.rating_text));
            setAllRestaurants(ratingWiseRestaurants);
            setDisplayRestaurants(ratingWiseRestaurants.slice(0, 9));
        }
        else if (type === "costLowToHigh") {
            const costHighToLowWiseRestaurants = new Array(...restaurants);
            costHighToLowWiseRestaurants.sort((a, b) => (a.info.cfo.text.split("").slice(1, 3).join("") - b.info.cfo.text.split("").slice(1, 3).join("")));
            setAllRestaurants(costHighToLowWiseRestaurants);
            setDisplayRestaurants(costHighToLowWiseRestaurants.slice(0, 9));
        }
        else if (type === "costHighToLow") {
            const costLowToHighWiseRestaurants = new Array(...restaurants);
            costLowToHighWiseRestaurants.sort((a, b) => (b.info.cfo.text.split("").slice(1, 3).join("") - a.info.cfo.text.split("").slice(1, 3).join("")));
            setAllRestaurants(costLowToHighWiseRestaurants);
            setDisplayRestaurants(costLowToHighWiseRestaurants.slice(0, 9));
        }
        else {
            setAllRestaurants(restaurants);
            setDisplayRestaurants(restaurants.slice(0, 9));
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        filterTypeHandler(filterType);
    }, [filterType])

    window.addEventListener("scroll", windowScroll);
    function windowScroll() {
        if (window.innerHeight + document.documentElement.scrollTop + 5 >= document.documentElement.scrollHeight) {
            setDisplayRestaurants(allRestaurants.slice(0, displayRestaurants.length + 3));
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
                <h3>Delivery Restaurants in Kolkata</h3>
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