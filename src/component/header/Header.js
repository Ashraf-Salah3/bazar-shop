import React, { useEffect, useState } from 'react';
import classes from "./header.module.css";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logo } from '../../assest';
import { useDispatch, useSelector } from 'react-redux';
import ShowOnLogin, { ShowOnLogout } from '../hiddenLinks/HiddenLink';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { toast } from 'react-toastify';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../store/auth';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FaTimes, FaUserCircle } from 'react-icons/fa';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { CLEAR_CART } from '../../store/bazzerSlice';

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const u1 = user.displayName ? user.displayName : user.email.split("@")[0];
        const formattedUserName = u1.charAt(0).toUpperCase() + u1.slice(1);
        setDisplayName(formattedUserName);
        
        dispatch(SET_ACTIVE_USER({
          email: user.email,
          userName: formattedUserName,
          userId: user.uid
        }));
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch]);

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully.", { position: "top-left" });
        dispatch(CLEAR_CART());
        navigate("/");
        setShowMenu(false); 
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const activeLink = ({ isActive }) => (isActive ? `${classes.active}` : "");

  return (
    <>
      <header className={classes.fixed}>
        <div className={classes.header}>
          <img className={classes.logo} src={logo} alt='logo' />
          <nav className={showMenu ? `${classes["show-nav"]}` : `${classes["hide-nav"]}`}>
            <div
              className={showMenu ? `${classes["nav-wrapper"]} ${classes["show-nav-wrapper"]}` : `${classes["nav-wrapper"]}`}
              onClick={hideMenu}
            ></div>
            <div className={classes.links}>
              <ul onClick={hideMenu}>
                <li className={classes["logo-mobile"]}>
                  <img className={classes.logo} src={logo} alt='logo' />
                  <FaTimes size={22} color='white' onClick={hideMenu} />
                </li>
                <li>
                  <ShowOnLogin>
                    <a href="#home" style={{ color: "#ff7722" }}>
                      <FaUserCircle size={16} />
                      Hi, {displayName}
                    </a>
                  </ShowOnLogin>
                </li>
                <li><NavLink to="/" exact className={activeLink}>Home</NavLink></li>
                <ShowOnLogout>
                  <li><NavLink to="/login" className={activeLink}>Login</NavLink></li>
                </ShowOnLogout>
                <ShowOnLogin>
                  <li><NavLink to="/" onClick={logoutUser}>Logout</NavLink></li>
                </ShowOnLogin>
                <li><NavLink to="/contact" className={activeLink}>Contact us</NavLink></li>
              </ul>
            </div>
            <Link to="/cart">
              <div className={classes.cart} onClick={hideMenu}>
                <LiaShoppingBagSolid size={40} />
                <span>{productData.length}</span>
              </div>
            </Link>
          </nav>
          <div className={classes["menu-icon"]}>
            <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
