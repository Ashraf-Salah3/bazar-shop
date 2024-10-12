// ProductCard.js
import React from 'react';
import classes from './productCard.module.css';
import { BsArrowRight } from 'react-icons/bs';
import { Navigate, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART } from "../../store/bazzerSlice"; // استيراد الـ actions بشكل صحيح
import { toast } from 'react-toastify';


function ProductCard({ product }) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const id = String(product.title).toLowerCase().split(" ").join("");

  const handleProductDetails = () => {
    navigate(`/product/${id}`, {
      state: {
        item: product
      }
    });
  };

  const addToCardHandel = () => {
    if (isLoggedIn){
    dispatch(ADD_TO_CART({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: 1,
      description: product.description
    }))
  }else{
    navigate("/login")
  }

  }

  return (
    <div className={classes.productCard}>
      <div onClick={handleProductDetails} className={classes.productImage}>
        <img src={product.image} alt='productImage' />
      </div>
      <div className={classes.productDitails}>
        <div className={classes.productTitle}>
          <h4>{product.title.substring(0,15)}</h4>
        </div>
        <div className={classes.productPricing}>
          <div className={classes.price}>
            <p className={classes.newPrice}>${product.price}</p>
          </div>
          <p className={classes.addToCard} onClick={addToCardHandel}>
            add to cart{" "}
            <span><BsArrowRight /></span>
          </p>
        </div>
      </div>
      <div>
        <p>{product.category}</p>
      </div>
    </div>
  );
}

export default ProductCard;
