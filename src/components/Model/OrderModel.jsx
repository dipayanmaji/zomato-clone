import { useDispatch } from 'react-redux';
import './OrderModel.scss';
import React, { useEffect } from 'react';
import { clearCart } from '../Redux/CartItemSlice';
import { useNavigate } from 'react-router-dom';
import { HiCheck } from 'react-icons/hi';

const OrderModel = ({ setDisplayProtal }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, []);

    const buttonHandler = () => {
        dispatch(clearCart());
        document.body.style.overflow = "auto";
        setDisplayProtal(false);
        navigate('/kolkata');
    }
    return (
        <div className='model' onClick={buttonHandler}>
            <div className='message' onClick={(e) => e.stopPropagation()}>
                <div className='check'>
                    <HiCheck />
                    <div className='moving-element'></div>
                </div>
                <h2 className='heading'>Order Successful!</h2>
                <button className='go-to-home' onClick={buttonHandler}>OK</button>
            </div>
        </div>
    )
}

export default OrderModel;