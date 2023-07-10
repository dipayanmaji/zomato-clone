import React from 'react'
import './GenerateSearchBarItem.scss';
import { Link, useNavigate } from 'react-router-dom';
import GenerateImage from '../GenerateImage/GenerateImage';

const GenerateSearchBarItem = ({ restaurant, setSearchValue, setDisplayBarOptions }) => {
    const navigate = useNavigate();

    const itemHandler = () => {
        setSearchValue("");
        setDisplayBarOptions(false);

        setTimeout(() => {
            navigate(`${restaurant.order.actionInfo.clickUrl}/${restaurant.info.resId}`);
        }, 0);
    }

    return (
        <Link to={''} className='search-bar-item' onClick={itemHandler}>
            <div className='image-container'>
                <GenerateImage url={restaurant.info.image.url} alt={restaurant.info.name} />
            </div>
            <p className='title'>{restaurant.info.name}
                <br />
                <span className='text'>Restaurant</span>
            </p>
        </Link>
    )
}

export default GenerateSearchBarItem;