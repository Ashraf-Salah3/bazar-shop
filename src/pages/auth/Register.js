import React, { useEffect, useRef, useState } from 'react';
import classes from "./auth.module.css";
import { registerImg } from '../../assest';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import { auth } from '../../firebase/firebase.config';
import Loader from '../../component/loader/Loader';

function Register() {
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    // Redirect to home if authenticated
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);
    
    const submitFormHandler = (e) => {
        e.preventDefault();
        const enteredEmail = emailInputRef.current?.value;
        const enteredPassword = passwordInputRef.current?.value;
        const enteredConfirmPassword = confirmPasswordRef.current?.value;
    
        const passwordLength = 8;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
        
        if (!enteredEmail || !enteredPassword || !enteredConfirmPassword) {
            toast.error("All fields are required", { position: "top-left" });
            return;
        }
    
        if (enteredPassword !== enteredConfirmPassword) {
            toast.error("Passwords do not match", { position: "top-left" });
            return;
        }
    
        if (enteredPassword.length < passwordLength) {
            toast.error(`Password must be at least ${passwordLength} characters long`, { position: "top-left" });
            return;
        }
    
        if (!passwordRegex.test(enteredPassword)) {
            toast.error("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character", { position: "top-left" });
            return;
        }
    
        setIsLoading(true);
    
        createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
            setIsLoading(false);
            setIsAuthenticated(true);
            toast.success("Registration Successful...", { position: "top-left" });
        })
        .catch((error) => {
            setIsLoading(false);
            toast.error(error.message, { position: "top-left" });
        });
    };
    

    return (
        <section className={classes.auth}>
            {isLoading && <Loader />}
            <div className={classes.form}>
                <h2>Register</h2>
                <form onSubmit={submitFormHandler}>
                    <input
                        type='email'
                        placeholder='Enter Email'
                        ref={emailInputRef}
                        required
                    />
                    <input
                        type='password'
                        placeholder='Enter Password'
                        ref={passwordInputRef}
                        required
                    />
                    <input
                        type='password'
                        placeholder='Confirm Password'
                        ref={confirmPasswordRef}
                        required
                    />
                    <button className='--btn --btn-primary --btn-block'>Register</button>
                </form>
                <span className={classes.register}>
                    <p>Already have an account?</p>
                    <Link to='/login'>Login</Link>
                </span>
            </div>
            <div className={classes.img}>
                <img src={registerImg} alt='register' width="400" />
            </div>
        </section>
    );
}

export default Register;


