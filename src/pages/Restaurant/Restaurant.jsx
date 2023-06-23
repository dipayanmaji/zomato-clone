import './Restaurant.css';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dummyRestaurantsDetails } from '../../utils/restaurantDetails/restaurantDetails';
import GenerateImage from '../../components/GenerateImage/GenerateImage';
import { AiFillStar } from 'react-icons/ai';
import { GoInfo } from 'react-icons/go';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import RestaurantItems from '../../components/RestaurantItems/RestaurantItems';
import RestaurantLoading from '../../components/RestaurantLoading/RestaurantLoading';
import CartView from '../../components/CartView/CartView';

const Restaurant = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [restaurantDetails, setRestaurantDetails] = useState({});
    const [displayTimings, setDisplayTimings] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0);
        const restaurantId = params.id;
        const lastDizitOfId = restaurantId.charAt(restaurantId.length - 1);
        if (isNaN(lastDizitOfId)) {
            navigate('/notFound');
            return;
        }

        document.title = dummyRestaurantsDetails[lastDizitOfId].page_info?.pageTitle + " Clone";
        setTimeout(() => {
            setRestaurantDetails(dummyRestaurantsDetails[lastDizitOfId]);
            window.scrollTo(0, 0);
        }, 3000)
    }, [])

    return (
        <div className='restaurant-page'>
            {
                Object.keys(restaurantDetails).length > 0 ?
                    <div className='restaurant-details'>
                        <div className='restaurant-images'>
                            <div className='image1'>
                                <GenerateImage
                                    url={restaurantDetails.page_data.sections.SECTION_BASIC_INFO.res_thumb}
                                    alt={"image1"}
                                />
                            </div>
                            <section className='middle-images'>
                                {restaurantDetails.entities.IMAGES[restaurantDetails.page_data.sections.SECTION_IMAGE_CAROUSEL.entities[0].entity_ids[0]] && <div className='image2'>
                                    <GenerateImage
                                        url={restaurantDetails.entities.IMAGES[restaurantDetails.page_data.sections.SECTION_IMAGE_CAROUSEL.entities[0].entity_ids[0]]?.thumbUrl}
                                        alt={"image2"}
                                    />
                                </div>}
                                {restaurantDetails.entities.IMAGES[restaurantDetails.page_data.sections.SECTION_IMAGE_CAROUSEL.entities[0].entity_ids[1]] && <div className='image3'>
                                    <GenerateImage
                                        url={restaurantDetails.entities.IMAGES[restaurantDetails.page_data.sections.SECTION_IMAGE_CAROUSEL.entities[0].entity_ids[1]]?.thumbUrl}
                                        alt={"image3"}
                                    />
                                </div>}
                            </section>
                            {restaurantDetails.entities.IMAGES[restaurantDetails.page_data.sections.SECTION_IMAGE_CAROUSEL.entities[0].entity_ids[2]] && <div className='image4'>
                                <GenerateImage
                                    url={restaurantDetails.entities.IMAGES[restaurantDetails.page_data.sections.SECTION_IMAGE_CAROUSEL.entities[0].entity_ids[2]]?.thumbUrl}
                                    alt={"image4"}
                                />
                            </div>}
                        </div>

                        <div className='restaurant-info'>
                            <div className='name-rating'>
                                <h1 className='name' title={restaurantDetails.page_data.sections.SECTION_BASIC_INFO.name}>{restaurantDetails.page_data.sections.SECTION_BASIC_INFO.name}</h1>
                                <div className='rating'>
                                    <div className='dining-reviews'>
                                        <div className='star-rating' style={{ backgroundColor: restaurantDetails.page_data.sections.SECTION_BASIC_INFO.rating_new.ratings.DINING.bgColorV2.type }}>
                                            {restaurantDetails.page_data.sections.SECTION_BASIC_INFO.rating_new.ratings.DINING.rating}
                                            <AiFillStar />
                                        </div>
                                        <div className='subtitle'>
                                            <div className='reviewCount'>{restaurantDetails.page_data.sections.SECTION_BASIC_INFO.rating_new.ratings.DINING.reviewCount}</div>
                                            <div className='sideSubTitle'>{restaurantDetails.page_data.sections.SECTION_BASIC_INFO.rating_new.ratings.DINING.sideSubTitle}</div>
                                        </div>
                                    </div>

                                    <div className='delivery-reviews'>
                                        <div className='star-rating' style={{ backgroundColor: restaurantDetails.page_data.sections.SECTION_BASIC_INFO.rating_new.ratings.DELIVERY.bgColorV2.type }}>
                                            {restaurantDetails.page_data.sections.SECTION_BASIC_INFO.rating_new.ratings.DELIVERY.rating}
                                            <AiFillStar />
                                        </div>
                                        <div className='subtitle'>
                                            <div className='reviewCount'>{restaurantDetails.page_data.sections.SECTION_BASIC_INFO.rating_new.ratings.DELIVERY.reviewCount}</div>
                                            <div className='sideSubTitle'>{restaurantDetails.page_data.sections.SECTION_BASIC_INFO.rating_new.ratings.DELIVERY.sideSubTitle}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='cuisine-address'>
                                <div className='cuisine'>{restaurantDetails.page_data.sections.SECTION_BASIC_INFO.cuisine_string}</div>
                                <div className='address'>{restaurantDetails.page_data.sections.SECTION_RES_HEADER_DETAILS.LOCALITY.text}</div>
                            </div>

                            <div className='opening-hours'>Opening Hours
                                <GoInfo onMouseOver={() => setDisplayTimings(true)} onMouseLeave={() => setDisplayTimings(false)} />
                                <div className='timings' style={{ display: displayTimings && "flex" }}>
                                    <MdOutlineArrowBackIos />
                                    {
                                        restaurantDetails.page_data.sections.SECTION_BASIC_INFO.timing.customised_timings.opening_hours.map((everyTime, index) => {
                                            return <div key={index} className='every-timing'>{everyTime.days}: {everyTime.timing}</div>
                                        })
                                    }
                                </div>
                            </div>
                            <hr />
                        </div>

                        <RestaurantItems menuList={restaurantDetails.page_data.order.menuList} orderDetails={restaurantDetails.page_data.orderDetails} />

                        <hr className='last-divider' />
                    </div>
                    :
                    <RestaurantLoading />
            }

            {/* cart view */}
            <CartView />
        </div>
    )
}

export default Restaurant;