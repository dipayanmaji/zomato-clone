import '../SignUp/SignUp.scss';
import React, { useEffect, useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { checkEmali } from '../../utils/validation/validation';

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

    const inputChangeHandler = (e) => {
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
    }

    const formSubmit = (e) => {
        e.preventDefault();

        if (!checkEmali(valueState.email)) {
            setErrorState({ ...errorState, email: true });
            return;
        }
        console.log("log in success");
    }

    useEffect(() => {
        setRemoveScale(true);
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [])

    return (
        <div className='blur-background' onClick={() => setLogIn(false)}>
            {!unknownError ?
                <form className='log-in-form' onClick={(e) => e.stopPropagation()} onSubmit={formSubmit} style={{ transform: removeScale && "scale(1)" }}>
                    <section className='top-section'>
                        <h2 className='heading'>Log in</h2>
                        <span className='cross-btn' onClick={() => setLogIn(false)}><HiOutlineX /></span>
                    </section>

                    {/* email */}
                    <div className="email">
                        <section className={`input-container ${valueState.email && focusState.email && 'green'} ${errorState.email && 'red'}`}>
                            <input id='email' type='text' onFocus={inputFocusHandler} onBlur={inputBlurHandler} value={valueState.email} onChange={inputChangeHandler} autoComplete='off' />
                            <label htmlFor='email' className={(focusState.email || valueState.email) && `label-style ${valueState.email && focusState.email && 'green'} ${errorState.email && 'red'}`}>Email</label>
                            {valueState.email && <span className='cross' onClick={() => setValueState({ ...valueState, email: "" })}><HiOutlineX /></span>}
                        </section>
                        <span className='wrong-message'>{errorState.email && "Invalid Email Id"}</span>
                    </div>

                    {/* password */}
                    <div className="password">
                        <section className={`input-container ${valueState.password && focusState.password && 'green'} ${errorState.password && 'red'}`}>
                            <input id='password' type={displayPassword ? 'text' : 'password'} onFocus={inputFocusHandler} onBlur={inputBlurHandler} value={valueState.password} onChange={inputChangeHandler} autoComplete='off' />
                            <label htmlFor='password' className={(focusState.password || valueState.password) && `label-style ${valueState.password && focusState.password && 'green'} ${errorState.password && 'red'}`}>Password</label>
                            <span className='eye'>{displayPassword ? <AiFillEyeInvisible onClick={() => setDisplayPassword(false)} /> : <AiFillEye onClick={() => setDisplayPassword(true)} />}</span>
                            {valueState.password && <span className='cross' onClick={() => setValueState({ ...valueState, password: "" })}><HiOutlineX /></span>}
                        </section>
                        <span className='wrong-message'>{errorState.password && "Incorrect password"}</span>
                    </div>

                    {/* submit button */}
                    <button className='submit-btn'>Login</button>

                    <hr />

                    {/* go to sign up */}
                    <section className='alternate'>{"New to Zomato Clone? "}
                        <span className='text-link' onClick={() => {
                            setLogIn(false);
                            setSignUp(true);
                        }}>Create account</span>
                    </section>
                </form>
                :
                <div className='log-in-failed' onClick={(e) => e.stopPropagation()}>
                    <section className='top-section'>
                        <h2 className='heading'>Login Failed</h2>
                        <span className='cross-btn' onClick={() => setLogIn(false)}><HiOutlineX /></span>
                    </section>

                    <p className='message'>Something went wrong, please try again</p>
                    <button className='try-again' onClick={() => setUnknownError(false)}>Try again</button>
                    <button className='skip' onClick={() => setLogIn(false)}>Skip for now</button>
                </div>
            }
        </div>
    )
}

export default LogIn;