import './Restaurant.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dummyRestaurantsDetails } from '../../utils/restaurantDetails/restaurantDetails';
import GenerateImage from '../../components/GenerateImage/GenerateImage';

const Restaurant = () => {
    const params = useParams();
    const [restaurantDetails, setRestaurantDetails] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
        const restaurantId = params.id;
        const lastDizitOfId = restaurantId.charAt(restaurantId.length - 1);
        setTimeout(() => {
            setRestaurantDetails(dummyRestaurantsDetails[lastDizitOfId]);
        }, 2000)
    }, [])

    return (
        <div className='restaurant-page'>
            {
                Object.keys(restaurantDetails).length > 0 ?
                    <div className='restaurant-details'>
                        <div className='restaurant-images'>
                            <div className='image1'>
                                <GenerateImage
                                    url={restaurantDetails.page_data.sections?.SECTION_BASIC_INFO.res_thumb}
                                    alt={"image1"}
                                />
                            </div>
                            <section className='middle-images'>
                                <div className='image2'>
                                    <GenerateImage
                                        url={restaurantDetails.entities.IMAGES[restaurantDetails.page_data.sections.SECTION_IMAGE_CAROUSEL.entities[0].entity_ids[0]].thumbUrl}
                                        alt={"image2"}
                                    />
                                </div>
                                <div className='image3'>
                                    <GenerateImage
                                        url={restaurantDetails.entities.IMAGES[restaurantDetails.page_data.sections.SECTION_IMAGE_CAROUSEL.entities[0].entity_ids[1]].thumbUrl}
                                        alt={"image3"}
                                    />
                                </div>
                            </section>
                            <div className='image4'>
                                <GenerateImage
                                    url={restaurantDetails.entities.IMAGES[restaurantDetails.page_data.sections.SECTION_IMAGE_CAROUSEL.entities[0].entity_ids[2]].thumbUrl}
                                    alt={"image4"}
                                />
                            </div>
                        </div>
                    </div>
                    :
                    <div>Loading...</div>
            }
        </div>
    )
}

export default Restaurant;