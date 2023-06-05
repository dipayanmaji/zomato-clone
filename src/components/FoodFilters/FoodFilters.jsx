import './FoodFilters.css';
import React, { useState } from "react";
import { RxCross2 } from 'react-icons/rx';

const FoodFilters = ({ filterType, setFilterType }) => {
    const [selectedFilter, setSelectedFilter] = useState(filterType);
    const filterHandler = (e) => {
        if (selectedFilter === e.target.id) {
            setSelectedFilter("");
            setFilterType("");
        }
        else {
            setSelectedFilter(e.target.id);
            setFilterType(e.target.id);
        }
    }
    return (
        <div className="food-filters-container">
            <div className="food-filters">
                {selectedFilter === "pureVeg" ?
                    <div className="filter-option selected" id={"pureVeg"} onClick={filterHandler}>
                        <span id='pureVeg'>Pure Veg</span>
                        <RxCross2 id='pureVeg' />
                    </div> :
                    <div className="filter-option" id={"pureVeg"} onClick={filterHandler}>Pure Veg</div>
                }

                {selectedFilter === "deliveryTime" ?
                    <div className="filter-option selected" id={"deliveryTime"} onClick={filterHandler}>
                        <span id='deliveryTime'>Delivery Time</span>
                        <RxCross2 id='deliveryTime' />
                    </div> :
                    <div className="filter-option" id={"deliveryTime"} onClick={filterHandler}>Delivery Time</div>
                }

                {selectedFilter === "rating" ?
                    <div className="filter-option selected" id={"rating"} onClick={filterHandler}>
                        <span id='rating'>Rating</span>
                        <RxCross2 id='rating' />
                    </div> :
                    <div className="filter-option" id={"rating"} onClick={filterHandler}>Rating</div>
                }

                {selectedFilter === "costLowToHigh" ?
                    <div className="filter-option selected" id={"costLowToHigh"} onClick={filterHandler}>
                        <span id='costLowToHigh'>Cost: Low To High</span>
                        <RxCross2 id='costLowToHigh' />
                    </div> :
                    <div className="filter-option" id={"costLowToHigh"} onClick={filterHandler}>Cost: Low To High</div>
                }

                {selectedFilter === "costHighToLow" ?
                    <div className="filter-option selected" id={"costHighToLow"} onClick={filterHandler}>
                        <span id='costHighToLow'>Cost: High To Low</span>
                        <RxCross2 id='costHighToLow' />
                    </div> :
                    <div className="filter-option" id={"costHighToLow"} onClick={filterHandler}>Cost: High To Low</div>
                }

            </div>
        </div>
    )
}

export default FoodFilters;