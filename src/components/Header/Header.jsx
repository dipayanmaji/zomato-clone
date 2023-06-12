import './Header.css';
import React, { useState } from 'react';
import zomato from '../../utils/images/zomato.png';
import { HiLocationMarker, HiShoppingCart } from 'react-icons/hi';
import { AiFillCaretDown } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';

const Header = () => {
    const [displayBarOptions, setDisplayBarOptions] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [logIn, setLogIn] = useState(false);
    const cartItems = useSelector((state) => state.cart_items.items);

    return (
        <div className='header-container'>
            <div className='header'>
                {/* bar open-close button */}
                <div onClick={() => setDisplayBarOptions(!displayBarOptions)} className='bar'>
                    <span style={{ transform: displayBarOptions && "rotate(45deg) translate(3px, 3px)" }}></span>
                    <span style={{ opacity: displayBarOptions && 0 }}></span>
                    <span style={{ transform: displayBarOptions && "rotate(-45deg) translate(5px, -6px)" }}></span>
                </div>

                <Link to='/' onClick={() => setDisplayBarOptions(false)}><img id='logo' src={zomato} alt="Zomato" /></Link>

                {/* search bar */}
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

                {/* cart-login-signup */}
                <div className='authentications'>
                    <Link className='link' to='/checkout'>
                        <span className='cartIcon-total'>
                            <HiShoppingCart style={{ color: Object.keys(cartItems).length && "green" }} />
                            <span className='cartItemTotal' style={{ color: Object.keys(cartItems).length && "white" }}>{Object.keys(cartItems).length}</span>
                        </span>Cart
                    </Link>
                    <span className='link' to='/login' onClick={() => setLogIn(true)}>Log in</span>
                    <span className='link' to='/signup' onClick={() => setSignUp(true)}>Sign up</span>
                </div>
            </div>

            {/* bar */}
            <div style={{ opacity: !displayBarOptions && 0, zIndex: !displayBarOptions && -1 }} className='bar-options'>
                <Link className='link' to='/checkout' onClick={() => setDisplayBarOptions(false)}>
                    <span className='cartIcon-total'>
                        <HiShoppingCart style={{ color: Object.keys(cartItems).length && "green" }} />
                        <span className='cartItemTotal' style={{ color: Object.keys(cartItems).length && "white" }}>{Object.keys(cartItems).length}</span>
                    </span>Cart
                </Link>
                <span className='link' to='/login' onClick={() => { setDisplayBarOptions(false); setLogIn(true); }}>Log in</span>
                <span className='link' to='/signup' onClick={() => { setDisplayBarOptions(false); setSignUp(true); }}>Sign up</span>

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

            {signUp && createPortal(<SignUp setSignUp={setSignUp} setLogIn={setLogIn} />, document.getElementById("portal"))}
            {logIn && createPortal(<LogIn setLogIn={setLogIn} setSignUp={setSignUp} />, document.getElementById("portal"))}
        </div>
    )
}

export default Header;