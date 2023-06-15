import { useDispatch } from 'react-redux';
import './OrderModel.scss';
import React, { useEffect } from 'react';
import { BsExclamationLg } from 'react-icons/bs';

const LoginFirstModel = ({ setloginFirst }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, []);

    return (
        <div className='model' onClick={() => setloginFirst(false)}>
            <div className='message' onClick={(e) => e.stopPropagation()}>
                <div className='exclamation'>
                    <BsExclamationLg />
                </div>
                <h2 className='heading'>Please login first!</h2>
                <p className='text'>After login you can able order</p>
                <button className='cancel' onClick={() => setloginFirst(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default LoginFirstModel;