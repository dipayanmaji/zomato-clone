import './SignUp.scss';
import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { checkEmali, checkFullName, checkPassword } from '../../utils/validation/validation';
import { SERVER_URL } from '../../utils/config/config';
import { HiCheck } from 'react-icons/hi';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/LoginUserSlice';
import { cartInitialization } from '../Redux/CartItemSlice';

const SignUp = ({ setSignUp, setLogIn }) => {
    const [userData, setUserData] = useState({});
    const [disableSignup, setDisableSignup] = useState(false);
    const [emailExists, setEmailExists] = useState(false);
    const [signupSuccess, setSignupSuccess] = useState(false);
    const [removeScale, setRemoveScale] = useState(false);
    const [unknownError, setUnknownError] = useState(false);
    const [displayPassword, setDisplayPassword] = useState(false);
    const [checked, setChecked] = useState(false);
    const [valueState, setValueState] = useState({
        fullName: "",
        email: "",
        password: ""
    });
    const [focusState, setFocusState] = useState({
        fullName: false,
        email: false,
        password: false
    });
    let [errorState, setErrorState] = useState({
        fullName: false,
        email: false,
        password: false
    });

    const fullNameRef = useRef();

    const dispatch = useDispatch();

    const inputChangeHandler = (e) => {
        const key = e.target.id;
        let value = e.target.value;
        if (key === "email") {
            value = value.toLocaleLowerCase();
            setEmailExists(false);
        }
        setValueState({
            ...valueState,
            [key]: value
        })
    }

    const inputFocusHandler = (e) => {
        const key = e.target.id;
        setFocusState({
            ...focusState,
            [key]: true
        })
        setErrorState({
            ...errorState,
            [key]: false
        })
    }

    const inputBlurHandler = (e) => {
        const key = e.target.id;
        setFocusState({
            ...focusState,
            [key]: false
        })

        if (key === "email" && !checkEmali(valueState.email)) {
            errorState.email = true;
        }
        else if (key === "fullName" && !checkFullName(valueState.fullName)) {
            errorState.fullName = true;
        }
        else if (key === "password" && !checkPassword(valueState.password)) {
            errorState.password = true;
        }
        setErrorState({ ...errorState });
    }

    const userRegistration = async () => {
        setDisableSignup(true);
        const userData = {
            name: valueState.fullName,
            email: valueState.email,
            password: valueState.password
        }

        try {
            const response = await axios.post(SERVER_URL + "/api/auth/register", userData);
            setUserData(response.data.user);
            setSignupSuccess(true);
        }
        catch (err) {
            setDisableSignup(false);
            if (err.response?.data.message === "Email already exists") {
                setEmailExists(true);
                return;
            }
            setUnknownError(true);
            setValueState({
                fullName: "",
                email: "",
                password: ""
            })
            setEmailExists(false);
            setChecked(false);
            setDisplayPassword(false);
        }
    }

    const formSubmit = (e) => {
        e.preventDefault();

        if (!checkEmali(valueState.email)) {
            errorState.email = true;
        }
        if (!checkFullName(valueState.fullName)) {
            errorState.fullName = true;
        }
        if (!checkPassword(valueState.password)) {
            errorState.password = true;
        }
        setErrorState({ ...errorState });
        if (errorState.email || errorState.fullName || errorState.password) return;

        userRegistration();

    }

    const loginHandler = () => {
        setSignUp(false);
        dispatch(login(userData));
        dispatch(cartInitialization(localStorage.getItem("cart_items") ? JSON.parse(localStorage.getItem("cart_items")) : {}));
    }

    useEffect(() => {
        setRemoveScale(true);
        fullNameRef.current.focus();
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [])

    return (
        <div className='blur-background' onClick={() => setSignUp(false)}>
            {!unknownError ?
                <form className='sign-up-form' onClick={(e) => e.stopPropagation()} onSubmit={formSubmit} style={{ transform: removeScale && "scale(1)" }}>
                    {!signupSuccess ?
                        <>
                            <section className='top-section'>
                                <h2 className='heading'>Sign up</h2>
                                <span className='cross-btn' onClick={() => setSignUp(false)}><HiOutlineX /></span>
                            </section>

                            {/* fullname */}
                            <div className="full-name">
                                <section className={`input-container ${valueState.fullName && focusState.fullName && 'green'} ${errorState.fullName && 'red'}`}>
                                    <input id='fullName' type='text' onFocus={inputFocusHandler} onBlur={inputBlurHandler} value={valueState.fullName} onChange={inputChangeHandler} autoComplete='off' ref={fullNameRef} />
                                    <label htmlFor='fullName' className={(focusState.fullName || valueState.fullName) && `label-style ${valueState.fullName && focusState.fullName && 'green'} ${errorState.fullName && 'red'}`}>Full Name</label>
                                    {valueState.fullName && <span className='cross' onClick={() => setValueState({ ...valueState, fullName: "" })}><HiOutlineX /></span>}
                                </section>
                                <span className='wrong-message'>{errorState.fullName && "Please enter a valid Full Name"}</span>
                            </div>

                            {/* email */}
                            <div className="email">
                                <section className={`input-container ${valueState.email && focusState.email && 'green'} ${errorState.email && 'red'}`}>
                                    <input id='email' type='text' onFocus={inputFocusHandler} onBlur={inputBlurHandler} value={valueState.email} onChange={inputChangeHandler} autoComplete='off' />
                                    <label htmlFor='email' className={(focusState.email || valueState.email) && `label-style ${valueState.email && focusState.email && 'green'} ${errorState.email && 'red'}`}>Email</label>
                                    {valueState.email && <span className='cross' onClick={() => setValueState({ ...valueState, email: "" })}><HiOutlineX /></span>}
                                </section>
                                <span className='wrong-message'>{errorState.email && "Invalid Email Id"}{emailExists && "Email already exists, try to login"}</span>
                            </div>

                            {/* password */}
                            <div className="password">
                                <section className={`input-container ${valueState.password && focusState.password && 'green'} ${errorState.password && 'red'}`}>
                                    <input id='password' type={displayPassword ? 'text' : 'password'} onFocus={inputFocusHandler} onBlur={inputBlurHandler} value={valueState.password} onChange={inputChangeHandler} autoComplete='off' />
                                    <label htmlFor='password' className={(focusState.password || valueState.password) && `label-style ${valueState.password && focusState.password && 'green'} ${errorState.password && 'red'}`}>Password</label>
                                    <span className='eye'>{displayPassword ? <AiFillEyeInvisible onClick={() => setDisplayPassword(false)} /> : <AiFillEye onClick={() => setDisplayPassword(true)} />}</span>
                                    {valueState.password && <span className='cross' onClick={() => setValueState({ ...valueState, password: "" })}><HiOutlineX /></span>}
                                </section>
                                <span className='wrong-message'>{errorState.password && "Password must be more than 8 letter"}</span>
                            </div>

                            {/* terms conditions */}
                            <section className='terms-conditions'>
                                <input type='checkbox' onChange={() => setChecked(!checked)} checked={checked} />
                                <span className='terms'>I agree to Zomato's <a href='https://www.zomato.com/conditions' target='_blank'>Terms of Service</a>, <a href='https://www.zomato.com/privacy' target='_blank'>Privacy Policy</a> and <a href='https://www.zomato.com/policies' target='_blank'>Content Policies</a></span>
                            </section>

                            {/* submit button */}
                            <button type='submit' className='submit-btn' disabled={!checked || disableSignup}>
                                {disableSignup ? "Don't go back, creating account..." : "Create Account"}
                            </button>

                            <hr />

                            {/* go to login */}
                            {!disableSignup ? <section className='alternate'>{"Already have an account? "}
                                <span className='text-link' onClick={() => {
                                    setSignUp(false);
                                    setLogIn(true);
                                }}>Log in</span>
                            </section> : <span className='disclaimer'>If form didn't work within 30 seconds, go back and try again</span>}
                        </>
                        :
                        <>
                            <section className='success-message'>
                                <div className='check'>
                                    <HiCheck />
                                    <div className='moving-element'></div>
                                </div>
                                <h2 className='heading'>Success!</h2>
                                <p className='text'>Account created successfully. Do you want to login?</p>
                                <div className='buttons'>
                                    <button className='login' onClick={loginHandler}>Yes, Login</button>
                                    <button className='cancel' onClick={() => setSignUp(false)}>Cancel</button>
                                </div>
                            </section>
                        </>
                    }
                </form>
                :
                <div className='sign-up-failed' onClick={(e) => e.stopPropagation()}>
                    <section className='top-section'>
                        <h2 className='heading'>Signup Failed</h2>
                        <span className='cross-btn' onClick={() => setSignUp(false)}><HiOutlineX /></span>
                    </section>

                    <p className='message'>Something went wrong, please check your network and try again</p>
                    <button className='try-again' onClick={() => setUnknownError(false)}>Try again</button>
                    <button className='skip' onClick={() => setSignUp(false)}>Skip for now</button>
                </div>
            }
        </div>
    )
}

export default SignUp;