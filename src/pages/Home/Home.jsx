import React from 'react'
import './Home.css';
import delivery from '../../utils/images/delivery.png';
import deliveryBW from '../../utils/images/deliveryBW.webp';
import diningOut from '../../utils/images/diningOut.avif';
import diningOutBW from '../../utils/images/diningOutBW.png';
import nightlife from '../../utils/images/nightlife.webp';
import nightlifeBW from '../../utils/images/nightlifeBW.png';


function Home() {
    return (
        <div className='home-container'>
            <div className='home'>
                <div className='options'>
                    <div className='img-div'>
                        <img src={delivery} alt='Delivery' />
                    </div>
                    <h2 className=''></h2>
                </div>
            </div>
        </div>
    )
}

export default Home;