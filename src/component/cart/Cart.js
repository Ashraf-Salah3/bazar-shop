import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import classes from "./cart.module.css"
function Cart() {
  const productData = useSelector(state => state.bazar.productData)
  const [totalAmt , setTotalAmt ] = useState("")
  useEffect(()=>{
    let price = 0
    productData.map((item)=>{
      price += item.quantity * item.price
      return price
    })
    setTotalAmt(price.toFixed(2))
  },[productData])

  return (
    <section>
       <img  className={classes.image}
        src='https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg' 
        alt='cartImage'/>
      <div className={classes.container}>
      <CartItem />
      { productData.length > 0 &&
      <div className={classes.cartDetails}>
      <div className={classes.cartSummary}>
        <h3>Cart Totals</h3>
        <p className={classes.subtotal}>Subtotal  
          <span>${totalAmt}</span>
        </p>
        <p className={classes.shipping}>Shopping
          <span >Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
        </p>
        </div>
        <p className={classes.total}>Total
          <span>${totalAmt}</span>
        </p>
        <button className={classes.button}>proceed to checkout</button>
      </div>
      }
      </div>
    </section>
  );
}

export default Cart;
