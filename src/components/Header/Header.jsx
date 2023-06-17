import './Header.css';
import React, { useState } from 'react';
import zomato from '../../utils/images/zomato.png';
import { HiLocationMarker, HiShoppingCart } from 'react-icons/hi';
import { AiFillCaretDown } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import { FaUserAlt } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { logout } from '../Redux/LoginUserSlice';
import { clearCart } from '../Redux/CartItemSlice';

const Header = () => {
    const [displayBarOptions, setDisplayBarOptions] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [logIn, setLogIn] = useState(false);
    const [displayLogOut, setDisplayLogOut] = useState(false);

    const cartItems = useSelector((state) => state.cart_items.items);
    const loginUser = useSelector((state) => state.login_user.user);
    const dispatch = useDispatch();

    const userHandler = () => {
        setDisplayLogOut(!displayLogOut);
    }

    const logOutHandler = () => {
        dispatch(logout());
        dispatch(clearCart());
    }

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
                        <input placeholder='Search for restaurant, cuisine or a dish' readOnly />
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
                    {!loginUser ?
                        <>
                            <span className='link' onClick={() => setLogIn(true)}>Log in</span>
                            <span className='link' onClick={() => setSignUp(true)}>Sign up</span>
                        </>
                        :
                        <span className='link login-user' onClick={userHandler}>
                            <FaUserAlt />
                            <span className='name' title={loginUser.name}>{loginUser.name}</span>
                            <MdKeyboardArrowDown style={{ rotate: displayLogOut && "180deg" }} />
                            <span className='log-out' style={{ display: displayLogOut && "block" }} onClick={logOutHandler}>Log out</span>
                        </span>
                    }
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
                {!loginUser ?
                    <>
                        <span className='link' onClick={() => { setDisplayBarOptions(false); setLogIn(true); }}>Log in</span>
                        <span className='link' onClick={() => { setDisplayBarOptions(false); setSignUp(true); }}>Sign up</span>
                    </>
                    :
                    <span className='link login-user' onClick={userHandler}>
                        <FaUserAlt />
                        <span className='name' title={loginUser.name}>{loginUser.name}</span>
                        <MdKeyboardArrowDown style={{ rotate: displayLogOut && "180deg" }} />
                        <span className='log-out' style={{ display: displayLogOut && "block" }} onClick={logOutHandler}>Log out</span>
                    </span>
                }

                <div className='search-container'>
                    <div className='location'>
                        <span id='location-icon'><HiLocationMarker /></span>
                        <input placeholder='Kolkata' readOnly />
                        <span id='down-arrow-icon'><AiFillCaretDown /></span>
                    </div>

                    <div className='divider'></div>

                    <div className='search'>
                        <span id='search-icon'><CiSearch /></span>
                        <input placeholder='Search for restaurant, cuisine or a dish' readOnly />
                    </div>
                </div>
            </div>

            {signUp && createPortal(<SignUp setSignUp={setSignUp} setLogIn={setLogIn} />, document.getElementById("portal"))}
            {logIn && createPortal(<LogIn setLogIn={setLogIn} setSignUp={setSignUp} />, document.getElementById("portal"))}
        </div>
    )
}

export default Header;