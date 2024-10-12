import React, { useRef, useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope, FaTwitter } from 'react-icons/fa6';
import { GoLocation } from 'react-icons/go';
import classes from './contact.module.css';
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
  const form = useRef("");
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate()
  const submitFormHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        'service_4juab5h', 
        'template_ic35qif',
        form.current, {
          publicKey: 'JRjE3asefzCy1nNvx',
        }
      )
      .then(
        () => {
          setIsLoading(false);
          navigate("/")
          toast.success('Message sent successfully!');
          e.target.reset(); 
        },
        (error) => {
          setIsLoading(false); 
          toast.error(`FAILED to send message: ${error.text}`);
        }
      );
  }

  return (
    <section>
      <div className={`container ${classes.contact}`}>
        <div>
          <h2>Contact Us</h2>
          <form ref={form} onSubmit={submitFormHandler} className={classes.form}>
            <label htmlFor='name'>Name</label>
            <input 
              name='user_name'
              type='text'
              placeholder='Full name'
              required 
            />
            <label htmlFor='email'>Email</label>
            <input 
              name='user_email'
              type='email'
              placeholder='Your active email'
              required 
            />
            <label htmlFor='subject'>Subject</label>
            <input 
              name='subject'
              type='text'
              placeholder='Subject'
              required 
            />
            <label htmlFor='message'>Message</label>
            <textarea 
              name="message" 
              cols="30" 
              rows="10"
              placeholder="Write your message here"
              required
            />
            <button type="submit" className="--btn --btn-primary">
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        <div className={classes.details}>
          <h3>Our Contact Information</h3>
          <p>Fill the form or contact us via other channels listed below</p>
          <div className={classes.icons}>
            <span>
              <FaPhoneAlt />
              <p>01029805532</p>
            </span>
            <span>
              <FaEnvelope />
              <p>Support@bazarshop.com</p>
            </span>
            <span>
              <GoLocation />
              <p>Abuja, Nigeria</p>
            </span>
            <span>
              <FaTwitter />
              <p>@Ashrafsalah</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
