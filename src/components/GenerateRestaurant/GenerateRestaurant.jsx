import GenerateImage from '../GenerateImage/GenerateImage';
import './GenerateRestaurant.css';
import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

let interval;
const GenerateRestaurant = ({ restaurant }) => {
    let [rotation, setRotation] = useState(false);
    const startRotated = () => {
        if (!restaurant.bottomContainers[1]) return;
        console.log("mouse enter")
        interval = setInterval(() => {
            rotation = !rotation;
            setRotation(rotation);
            console.log("interval");
        }, 3500);
    }
    const stopRotated = () => {
        if (!restaurant.bottomContainers[1]) return;
        console.log("mouse leave")
        clearInterval(interval);
    }

    return (
        <div className='generate-restaurant' onMouseEnter={startRotated} onMouseLeave={stopRotated}>
            <div className='restaurant-image'>
                <div className='promoted'>Promoted</div>
                {restaurant.bulkOffers.length > 0 && <div className='offer'>{restaurant.bulkOffers[0]?.text}</div>}
                <div className='time'>{restaurant.order.deliveryTime}</div>
                <GenerateImage url={restaurant.info.image.url} alt={restaurant.info.name} />
            </div>

            <div className='restaurant-details'>
                <div className='title-rating'>
                    <h4 className='title'>{restaurant.info.name}</h4>
                    <div className='rating' style={{ backgroundColor: `#${restaurant.info.rating.rating_color}` }}>{restaurant.info.rating.rating_text}<AiFillStar /></div>
                </div>
                <div className='type-price'>
                    <p className='type'>
                        {
                            restaurant.info.cuisine.map((cuisine, index) => {
                                return restaurant.info.cuisine.length - 1 == index ? cuisine.name : `${cuisine.name}, `
                            })
                        }
                    </p>
                    <p className='price'>{restaurant.info.costText?.text}</p>
                </div>
            </div>

            <div className='divider'></div>

            <div className='bottom-containers'>
                <div className='left-side'>
                    <div className='rotation-text' style={{ transform: rotation && `translate(-16.5rem, 0)` }}>
                        <div className='rotation-image'>
                            <GenerateImage url={restaurant.bottomContainers[0]?.image.url} alt={""} />
                        </div>
                        <span>{restaurant.bottomContainers[0]?.text}</span>
                    </div>
                    <div className='rotation-text' style={{ transform: rotation && `translate(-16.5rem, 0)` }}>
                        <div className='rotation-image'>
                            <GenerateImage url={restaurant.bottomContainers[1]?.image.url} alt={""} />
                        </div>
                        <span>{restaurant.bottomContainers[1]?.text}</span>
                    </div>
                </div>

                <div className='right-side'>
                    <div className='rotation-image' style={{ transform: rotation && `translate(-3.5rem, 0)` }}>
                        <GenerateImage url={restaurant.bottomContainers[1]?.image.url} alt={""} />
                    </div>
                    <div className='rotation-image' style={{ transform: rotation && `translate(-3.5rem, 0)` }}>
                        <GenerateImage url={restaurant.bottomContainers[0]?.image.url} alt={""} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenerateRestaurant;