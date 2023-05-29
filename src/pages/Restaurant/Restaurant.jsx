import axios from 'axios';
import './Restaurant.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Restaurant = () => {
    const params = useParams();
    const getRestaurantDetails = async () => {
        try {
            const result = await axios.get("https://www.zomato.com/webroutes/getPage?page_url=/kolkata/hatari-dhakuria")
            console.log("result", result);
        }
        catch (err) {
            console.log("error", err);
        }
    }
    useEffect(() => {
        getRestaurantDetails();
    }, [])

    return (
        <div className='restaurant-page'>
            Restaurant page: {params.restaurant}
        </div>
    )
}

export default Restaurant;