
import { useDispatch, useSelector } from 'react-redux'
import classes from './cartItem.module.css'
import { MdOutlineClose } from 'react-icons/md';
import { ADD_TO_CART, CLEAR_CART, DECREASE_CART, REMOVE_FROM_CART } from '../../store/bazzerSlice';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { Fragment } from 'react';
function CartItem() {
  const productData = useSelector((state)=> state.bazar.productData)
  const dispatch = useDispatch()
  const decreaseCartHandle = (product)=>{
    dispatch(DECREASE_CART(product))
  }

  const incrementCartHandle = (product)=>{
    dispatch(ADD_TO_CART(product))
  }

  const closeIconHandel = (product)=>{
    dispatch(REMOVE_FROM_CART(product))
  }
  const clearCart = ()=>{
    dispatch(CLEAR_CART())
  }
  return (
    <Fragment>
         {productData.length > 0 ?
     <div className={classes.shoppingCartContainer}>
      <div className={classes.header}>
      <h3 className={classes.heading}>Shopping Cart</h3>
    </div>
    <div className={classes.productList}>
     
      {productData.map(product => {
        const {id, title, price, image , quantity} = product
        return (
          <div className={classes.productItem} key={id}>
            <MdOutlineClose 
            onClick={ ()=> closeIconHandel(product)} 
            className={classes.closeIcon} 
            size='20px'/>
            <img className={classes.productImage} src={image} alt="productImage" />
            <p className={classes.productTitle}>{title.substring(0,20)}</p>
            <p className={classes.productPrice}>${parseFloat(price).toFixed(2)}</p>
            <div className={classes.quantityContainer}>
              <p className={classes.quantityLabel}>Quantity</p>

              <button className={classes.decrementButton}
              onClick={()=>decreaseCartHandle(product)}
              >-</button>
              <span className={classes.quantityValue}>{quantity}</span>

              <button className={classes.incrementButton}
                onClick={()=> incrementCartHandle(product)}
              >+</button>
            </div>

            <p className={classes.totalPrice}>${quantity * price}</p>
            </div>
        );
      })}
    </div>
     <div className={classes.clear}>
          <button className={classes.restCart}
          onClick={()=>clearCart()}
          >Reset Cart</button> 
          <Link to="/" >
          <button className={classes["go-shopping"]}>
            <span><HiOutlineArrowLeft/></span>
                go shopping
          </button>
          </Link>
        </div>
    </div>  
    :<div className={classes.cartCleard}>
      <p>Your Cart Is Empty.Please go back to shopping and add products to Cart </p>
      <Link to="/" >
          <button className={classes["go-shopping"]}>
            <span><HiOutlineArrowLeft/></span>
                go shopping
          </button>
          </Link>
    </div> }
    </Fragment>
  );
  
}

export default CartItem