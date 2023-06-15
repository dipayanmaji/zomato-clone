import './NotFound.css';
import React from 'react';
import zomato404 from '../../utils/images/zomato404.avif';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    document.title = "404 | Zomato Clone";

    return (
        <div className='not-found-page'>
            <div className='not-found'>
                <div className='not-found-image'>
                    <img src={zomato404} alt='Not found' />
                </div>
                <div className="text-button">
                    <div className='not-found-text'>This is a 404 page and we think it's fairly clear
                        You aren't going to find what you're looking for here
                        But we know you're hungry, so don't fret or rage
                        Hit that big red button to go back to our homepage
                    </div>
                    <button className='back-to-home' onClick={() => navigate("/kolkata")}>Back to home</button>
                </div>
            </div>
        </div>
    )
}

export default NotFound;