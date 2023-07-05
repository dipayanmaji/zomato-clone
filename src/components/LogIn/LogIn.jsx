import '../SignUp/SignUp.scss';
import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineX, HiCheck } from 'react-icons/hi';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { checkEmali } from '../../utils/validation/validation';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/LoginUserSlice';
import { SERVER_URL } from '../../utils/config/config';
import axios from 'axios';
import { cartInitialization } from '../Redux/CartItemSlice';
import { useNavigate } from 'react-router-dom';

const LogIn = ({ setLogIn, setSignUp }) => {
    const [removeScale, setRemoveScale] = useState(false);
    const [unknownError, setUnknownError] = useState(false);
    const [displayPassword, setDisplayPassword] = useState(false);
    const [valueState, setValueState] = useState({
        email: "",
        password: ""
    });
    const [focusState, setFocusState] = useState({
        email: false,
        password: false
    });
    let [errorState, setErrorState] = useState({
        email: false,
        password: false
    });
    const [wrongEmail, setWrongEmail] = useState(false);
    const [wrongPassword, setWrongPassword] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [disableLogin, setDisableLogin] = useState(false);
    const emailRef = useRef();

    const dispatch = useDispatch();
    const loginUser = useSelector((state) => state.login_user.user);
    const navigate = useNavigate();

    const inputChangeHandler = (e) => {
        setWrongEmail(false);
        setWrongPassword(false);
        const key = e.target.id;
        let value = e.target.value;
        if (key === "email") {
            value = value.toLocaleLowerCase();
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
        else if (key === "password" && !valueState.password) {
            errorState.password = true;
        }
        setErrorState({ ...errorState });
    }

    const userLogin = async () => {
        setDisableLogin(true);
        const userData = {
            email: valueState.email,
            password: valueState.password
        }
        try {
            const response = await axios.post(SERVER_URL + "/api/auth/login", userData);
            dispatch(login(response.data.user));
            dispatch(cartInitialization(response.data.cart_items));
            setLoginSuccess(true);
        }
        catch (err) {
            setDisableLogin(false);
            if (err.response?.data.message === "Email dose not exists") {
                setWrongEmail(true);
                return;
            }

            if (err.response?.data.message === "Incorrect password") {
                setWrongPassword(true);
                return;
            }

            setUnknownError(true);
            setWrongEmail(false);
            setWrongPassword(false);
            setValueState({
                email: "",
                password: ""
            })
            setDisplayPassword(false);
        }
    }

    const formSubmit = (e) => {
        e.preventDefault();

        if (!checkEmali(valueState.email)) {
            errorState.email = true;
        }
        if (!valueState.password) {
            errorState.password = true;
        }
        setErrorState({ ...errorState });

        if (errorState.email || errorState.password) return;
        userLogin();
    }

    useEffect(() => {
        setRemoveScale(true);
        emailRef.current.focus();
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [])

    return (
        <div className='blur-background' onClick={() => setLogIn(false)}>
            {!unknownError ?
                <form className='log-in-form' onClick={(e) => e.stopPropagation()} onSubmit={formSubmit} style={{ transform: removeScale && "scale(1)" }}>
                    {!loginSuccess ?
                        <>
                            <section className='top-section'>
                                <h2 className='heading'>Log in</h2>
                                <span className='cross-btn' onClick={() => setLogIn(false)}><HiOutlineX /></span>
                            </section>

                            {/* email */}
                            <div className="email">
                                <section className={`input-container ${valueState.email && focusState.email && 'green'} ${errorState.email && 'red'}`}>
                                    <input id='email' type='text' onFocus={inputFocusHandler} onBlur={inputBlurHandler} value={valueState.email} onChange={inputChangeHandler} autoComplete='off' ref={emailRef} />
                                    <label htmlFor='email' className={(focusState.email || valueState.email) && `label-style ${valueState.email && focusState.email && 'green'} ${errorState.email && 'red'}`}>Email</label>
                                    {valueState.email && <span className='cross' onClick={() => setValueState({ ...valueState, email: "" })}><HiOutlineX /></span>}
                                </section>
                                <span className='wrong-message'>{errorState.email && "Invalid Email Id"}{wrongEmail && "Email Id dose not exits, try to sign up"}</span>
                            </div>

                            {/* password */}
                            <div className="password">
                                <section className={`input-container ${valueState.password && focusState.password && 'green'} ${errorState.password && 'red'}`}>
                                    <input id='password' type={displayPassword ? 'text' : 'password'} onFocus={inputFocusHandler} onBlur={inputBlurHandler} value={valueState.password} onChange={inputChangeHandler} autoComplete='off' />
                                    <label htmlFor='password' className={(focusState.password || valueState.password) && `label-style ${valueState.password && focusState.password && 'green'} ${errorState.password && 'red'}`}>Password</label>
                                    <span className='eye'>{displayPassword ? <AiFillEyeInvisible onClick={() => setDisplayPassword(false)} /> : <AiFillEye onClick={() => setDisplayPassword(true)} />}</span>
                                    {valueState.password && <span className='cross' onClick={() => setValueState({ ...valueState, password: "" })}><HiOutlineX /></span>}
                                </section>
                                <span className='wrong-message'>{errorState.password && "Password should not be blank"}{wrongPassword && "Incorrect password"}</span>
                            </div>

                            {/* submit button */}
                            <button className='submit-btn' disabled={disableLogin}>{disableLogin ? "Processing..." : "Login"}</button>

                            <hr />

                            {/* go to sign up */}
                            {!disableLogin ? <section className='alternate'>{"New to Zomato Clone? "}
                                <span className='text-link' onClick={() => {
                                    setLogIn(false);
                                    setSignUp(true);
                                }}>Create account</span>
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
                                <p className='text'>Welcome! {loginUser?.name}. You are successfully logged in!</p>
                                <div className='buttons'>
                                    <button className='ok' onClick={() => {
                                        setLogIn(false);
                                        navigate('/kolkata');
                                    }}>See Restaurant Near You</button>
                                </div>
                            </section>
                        </>
                    }
                </form>
                :
                <div className='log-in-failed' onClick={(e) => e.stopPropagation()}>
                    <section className='top-section'>
                        <h2 className='heading'>Login Failed</h2>
                        <span className='cross-btn' onClick={() => setLogIn(false)}><HiOutlineX /></span>
                    </section>

                    <p className='message'>Something went wrong, please check your network and try again</p>
                    <button className='try-again' onClick={() => setUnknownError(false)}>Try again</button>
                    <button className='skip' onClick={() => setLogIn(false)}>Skip for now</button>
                </div>
            }
        </div>
    )
}

export default LogIn;