import './Cart.scss';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import GenerateImage from '../../components/GenerateImage/GenerateImage';
import emptyCart from '../../utils/images/emptyCart.webp';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../components/Redux/CartItemSlice';
import { createPortal } from 'react-dom';
import OrderModel from '../../components/Model/OrderModel';
import LoginFirstModel from '../../components/Model/LoginFirstModel';

const Cart = () => {
    const [displayProtal, setDisplayProtal] = useState(false);
    const [loginFirst, setloginFirst] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart_items.items);
    const loginUser = useSelector((state) => state.login_user.user);

    const orderHandler = () => {
        if (!loginUser) {
            setloginFirst(true);
            return;
        }
        setDisplayProtal(true);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Checkout | Zomato Clone"
    }, [])

    return (
        <div className='cart-page'>
            <div className='cart-details'>
                {
                    Object.keys(cartItems).length ?
                        <>
                            <div className='buttons'>
                                <button className='clear-cart' onClick={() => dispatch(clearCart())}>CLEAR CART</button>
                            </div>

                            <div className='cart-items'>
                                {
                                    Object.keys(cartItems).map((key) => {
                                        return <CartItem key={cartItems[key].id} item={cartItems[key]} />
                                    })
                                }
                            </div>

                            <div className='total-container'>
                                <div className='total'>
                                    <div className='text'>Total Amount</div>
                                    <div className='amount'>₹
                                        {
                                            Object.keys(cartItems).reduce((total, item) => {
                                                total += cartItems[item].price * cartItems[item].quantity;
                                                return parseFloat((total).toFixed(2));
                                            }, 0)
                                        }
                                    </div>
                                </div>
                                <hr className='divider' />
                            </div>

                            <div className='buttons'>
                                <button className='order' onClick={orderHandler}>ORDER</button>
                            </div>
                            {displayProtal && createPortal(<OrderModel setDisplayProtal={setDisplayProtal} />, document.getElementById("portal"))}
                            {loginFirst && createPortal(<LoginFirstModel setloginFirst={setloginFirst} />, document.getElementById("portal"))}
                        </>
                        :
                        <div className='empty-cart'>
                            <div className='empty-cart-image'><GenerateImage url={emptyCart} alt={"Empty cart"} /></div>
                            <h1 className='heading'>Your cart is empty</h1>
                            <p className='text'>You can go to home page to view more restaurants</p>
                            <button className='go-to-home' onClick={() => navigate('/kolkata')}>SEE RESTAURANTS NEAR YOU</button>
                        </div>
                }
            </div>
        </div>
    )
}

export default Cart;