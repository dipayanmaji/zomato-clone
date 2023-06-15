import './CartItem.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import GenerateImage from '../GenerateImage/GenerateImage';
import { addToCart, removeFromCart } from '../Redux/CartItemSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const addItemsHandler = (e) => {
        const id = e.target.id;
        dispatch(addToCart({ id }));
    }
    const removeItemsHandler = (e) => {
        const id = e.target.id;
        dispatch(removeFromCart({ id }));
    }

    return (
        <div className='cart-item' id={item.id}>
            <div className='image-name'>
                {item.image && <div className='cart-item-image'> <GenerateImage url={item.image} alt={item.name} title={item.name} /></div>}
                <div className='cart-item-name'>{item.name}</div>
            </div>

            <div className='buttons-price'>
                <div className='cart-item-buttons'>
                    <button className='minus-button' id={item.id} onClick={removeItemsHandler}>-</button>
                    <span className='count'>{item.quantity}</span>
                    <button className='plus-button' id={item.id} onClick={addItemsHandler}>+</button>
                </div>
                <div className='cart-item-price'>₹{item.price * item.quantity}</div>
            </div>
        </div>
    )
}

export default CartItem;