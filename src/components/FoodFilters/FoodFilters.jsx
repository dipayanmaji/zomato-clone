import React from "react";
import './FoodFilters.css';

const FoodFilters = () => {
    return (
        <div className="food-filters-container">
            <div className="food-filters">
                <div className="filter-option">Pure Veg</div>
                <div className="filter-option">Delivery Time</div>
                <div className="filter-option">Rating</div>
                <div className="filter-option">Cost: Low To High</div>
                <div className="filter-option">Cost: High To Low</div>
            </div>
        </div>
    )
}

export default FoodFilters;