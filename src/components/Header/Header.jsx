import './Header.css';
import React, { useState } from 'react';
import zomato from '../../utils/images/zomato.png';
import { HiLocationMarker } from 'react-icons/hi';
import { AiFillCaretDown } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';

const Header = () => {
    const [displayBarOptions, setDisplayBarOptions] = useState(true);
    return (
        <div className='header-container'>
            <div className='header'>
                <div onClick={() => setDisplayBarOptions(!displayBarOptions)} className='bar'>
                    <span style={{ transform: displayBarOptions && "rotate(45deg) translate(3px, 3px)" }}></span>
                    <span style={{ opacity: displayBarOptions && 0 }}></span>
                    <span style={{ transform: displayBarOptions && "rotate(-45deg) translate(5px, -6px)" }}></span>
                </div>

                <img id='logo' src={zomato} alt="Zomato" />

                <div className='search-container'>
                    <div className='location'>
                        <span id='location-icon'><HiLocationMarker /></span>
                        <input placeholder='Kolkata' readOnly />
                        <span id='down-arrow-icon'><AiFillCaretDown /></span>
                    </div>

                    <div className='divider'></div>

                    <div className='search'>
                        <span id='search-icon'><CiSearch /></span>
                        <input placeholder='Search for restaurant, cuisine or a dish' />
                    </div>
                </div>

                <div className='authentications'>
                    <a href='/login'>Log in</a>
                    <a href='/signup'>Sign up</a>
                </div>
            </div>

            <div style={{ opacity: !displayBarOptions && 0 }} className='bar-options'>
                <a href='/login'>Log in</a>
                <a href='/signup'>Sign up</a>

                <div className='search-container'>
                    <div className='location'>
                        <span id='location-icon'><HiLocationMarker /></span>
                        <input placeholder='Kolkata' readOnly />
                        <span id='down-arrow-icon'><AiFillCaretDown /></span>
                    </div>

                    <div className='divider'></div>

                    <div className='search'>
                        <span id='search-icon'><CiSearch /></span>
                        <input placeholder='Search for restaurant, cuisine or a dish' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;