import React from 'react';
import { paymentLogo, logo } from '../../assest';
import classes from './footer.module.css';
import { MdAccountBox } from 'react-icons/md';
import { SiPaypal } from 'react-icons/si';
import { FaFacebook, FaGithub, FaTwitter, FaYoutube,FaInstagram ,FaMapLocationDot} from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.content}>
        {/* قسم الدفع والشعار */}
        <div className={classes.payment}>
          <img src={logo} alt='logo' style={{ width: "7rem" }} />
          <p>© ReactDB.com</p>
          <img src={paymentLogo} alt='payment' style={{ width: "8rem" }} />
          <div className={classes.icon}>
            <a href="https://github.com/Ashraf-Salah3" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.facebook.com/ashraf.salah.98871?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/ashraf_salah3" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
          <p className={classes["copy-right"]}>@ Ashraf Salah</p>
        </div>

        {/* قسم معلومات الاتصال */}
        <div className={classes.contact}>
          <h3>Locate Us</h3>
          <div>
            <p>MBD, Ruwi, Muscat-Oman</p>
            <p>Mobile: 00968 97859628</p>
            <p>Phone: 00968 97867975</p>
            <p>Email: bazar@gmail.com</p>
          </div>
        </div>

        {/* قسم البروفايل */}
        <div className={classes.profile}>
          <h3>Profile</h3>
          <div>
            <p><span><MdAccountBox /></span> My Account</p>
            <p><span><SiPaypal /></span> Checkout</p>
            <p><span><FaHome /></span> Order Tracking</p>
            <p><span><FaMapLocationDot /></span> Help & Support</p>
          </div>
        </div>

        {/* قسم الاشتراك بالبريد الإلكتروني */}
        <div className={classes.input}>
          <input type='text' placeholder='Enter your email' aria-label='email subscription' />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
