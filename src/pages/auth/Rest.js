import React, { useRef, useState } from 'react';
import { restImg } from '../../assest';
import classes from './auth.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import Loader from '../../component/loader/Loader';

function Rest() {
  const emailInputRef = useRef('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  // التحقق من صحة البريد الإلكتروني
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;

    if (!validateEmail(enteredEmail)) {
      toast.error('Please enter a valid email address.', { position: 'top-left' });
      return;
    }

    setIsLoading(true);

    sendPasswordResetEmail(auth, enteredEmail)
      .then(() => {
        setIsLoading(false);
        toast.success('Check your email for a reset link', { position: 'top-left' });
        navigate('/login');
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message, { position: 'top-left' });
      });
  };

  return (
    <section className={classes.auth}>
      {isLoading && <Loader />}
      <div className={classes.img}>
        <img src={restImg} alt='rest' width='400' />
      </div>
      <div className={classes.form}>
        <h2>Reset Password</h2>
        <form onSubmit={submitFormHandler}>
          <input
            type='email'
            placeholder='Email'
            ref={emailInputRef}
            required
          />
          <button className='--btn --btn-primary --btn-block' disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Reset'}
          </button>
        </form>
        <div className={classes.links}>
          <p><Link to='/login'>-Login</Link></p>
          <p><Link to='/register'>-Register</Link></p>
        </div>
      </div>
    </section>
  );
}

export default Rest;
