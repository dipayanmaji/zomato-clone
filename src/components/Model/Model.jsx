import { useDispatch } from 'react-redux';
import './Model.scss';
import React, { useEffect } from 'react';
import { clearCart } from '../Redux/CartItemSlice';
import { useNavigate } from 'react-router-dom';
import { HiCheck } from 'react-icons/hi';

const Model = ({ setDisplayProtal }) => {
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
        <div className='model'>
            <div className='message'>
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

export default Model;