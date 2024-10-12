import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import classes from "./productdetails.module.css"
import { MdOutlineStar } from 'react-icons/md'
import { useDispatch,  } from 'react-redux'
import { ADD_TO_CART,  } from '../../store/bazzerSlice'


function ProductDetails() {
    const location = useLocation()
    const [details, setDetails] = useState({})
    const [baseQty, setBaseQty] = useState(1)
    const dispatch = useDispatch()

    useEffect(()=>{
        setDetails(location.state.item)
    },[details,location])

    const addToCardHandle = ()=>{
        dispatch(ADD_TO_CART({
            id: details.id,
            title: details.title,
            image: details.image,
            price: details.price,
            quantity: baseQty,
            discription: details.discription
        }))
    }
  return (
    <div>
        <div className={classes.productDetails}>
            <div className={classes.productDetailsImg}>
                <img src={details.image} alt="productImg"></img>
            </div>
            <div className={classes.title}>
    <div className={classes.titleContant}>
        <h2 className={classes.productTitle}>{details.title}</h2>
        <div className={classes.priceContainer}>
            <p className={classes.newPrice}>${details.price}</p>
        </div>
    </div>
    <div className={classes.reviewContainer}>
        <div className={classes.stars}>
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
        </div>
        <p className={classes.reviewText}>(1 customer review)</p>
    </div>
    <p className={classes.description}>{details.description}</p>
    <div className={classes.quantityContainer}>
        <div className={classes.quantity}>
            <p>Quantity</p>
            <div className={classes.quantityButtons}>

                <button className={classes.decrementButton} 
                onClick={()=>{
                    setBaseQty(baseQty === 1 ? baseQty : baseQty - 1)
                }}>-</button>

                <span className={classes.quantityNumber}>{baseQty}</span>
                <button className={classes.incrementButton}
                 onClick={()=>{
                    setBaseQty(baseQty + 1)
                 }}>+</button>
            </div>
        </div>
        <button className={classes.addToCartButton} 
            onClick={ addToCardHandle}>Add to cart</button>
    </div>
    <p className={classes.category}>Category: {details.category}</p>
</div>

        </div>
    </div>
  )
}

export default ProductDetails