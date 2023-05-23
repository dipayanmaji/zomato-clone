import React, { useState } from 'react'
import './Home.css';
import delivery from '../../utils/images/delivery.png';
import deliveryBW from '../../utils/images/deliveryBW.webp';
import diningOut from '../../utils/images/diningOut.avif';
import diningOutBW from '../../utils/images/diningOutBW.png';
import nightlife from '../../utils/images/nightlife.webp';
import nightlifeBW from '../../utils/images/nightlifeBW.png';


function Home() {
    const [currOption, setCurrOption] = useState("delivery");

    return (
        <div className='home-container'>
            <div className='home'>
                <div className='options-container' onClick={() => setCurrOption("delivery")}>
                    <div className='options'>
                        <div className='img-div' style={{ backgroundColor: currOption == "delivery" && "rgb(252, 238, 192)" }}>
                            <img className='option-image' src={currOption == "delivery" ? delivery : deliveryBW} alt='Delivery' />
                        </div>
                        <h2 className='option-title' style={{ color: currOption == "delivery" && "rgb(239, 79, 95)" }}>Delivery</h2>
                    </div>
                    <hr className='option-urderline' style={{ transform: currOption == "delivery" && 'scaleX(1)' }}></hr>
                </div>

                <div className='options-container' onClick={() => setCurrOption("diningOut")}>
                    <div className='options'>
                        <div className='img-div' style={{ backgroundColor: currOption == "diningOut" && "rgb(229, 243, 243)" }}>
                            <img className='option-image' src={currOption == "diningOut" ? diningOut : diningOutBW} alt='Dining Out' />
                        </div>
                        <h2 className='option-title' style={{ color: currOption == "diningOut" && "rgb(239, 79, 95)" }}>Dining Out</h2>
                    </div>
                    <hr className='option-urderline' style={{ transform: currOption == "diningOut" && 'scaleX(1)' }}></hr>
                </div>

                <div className='options-container' onClick={() => setCurrOption("nightlife")}>
                    <div className='options'>
                        <div className='img-div' style={{ backgroundColor: currOption == "nightlife" && "rgb(237, 244, 255)" }}>
                            <img className='option-image' src={currOption == "nightlife" ? nightlife : nightlifeBW} alt='Nightlife' />
                        </div>
                        <h2 className='option-title' style={{ color: currOption == "nightlife" && "rgb(239, 79, 95)" }}>Nightlife</h2>
                    </div>
                    <hr className='option-urderline' style={{ transform: currOption == "nightlife" && 'scaleX(1)' }}></hr>
                </div>
            </div>
        </div>
    )
}

export default Home;