import React from 'react'
import './CartView.scss';
import { FiShoppingBag } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartView = () => {
    const cartItems = useSelector((state) => state.cart_items.items);
    const navigate = useNavigate();

    return (
        <>
            {Object.keys(cartItems).length > 0 && <div className='cart-view-container'>
                <div className='cart-view'>
                    <div className='left-section'>
                        <span className='item-number'>{Object.keys(cartItems).length} {Object.keys(cartItems).length > 1 ? "Items" : "Item"}</span>
                        |
                        <span className='price'>₹
                            {
                                Object.keys(cartItems).reduce((total, item) => {
                                    total += cartItems[item].price * cartItems[item].quantity;
                                    return parseFloat((total).toFixed(2));
                                }, 0)
                            }
                        </span>
                    </div>

                    <button className='view-cart' onClick={() => navigate("/checkout")}>
                        View Cart
                        <FiShoppingBag />
                    </button>
                </div>
            </div>}
        </>
    )
}

export default CartView;