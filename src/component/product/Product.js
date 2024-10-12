import React from 'react'
import classes from "./product.module.css"
import ProductCard from './ProductCard'
function Product({products}) {
  return (
    <div className={classes.content}>
        <div className={classes.items}>
            <h3>Shopping everyday</h3>
            <span></span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi asperiores consectetur,
                    recusandae ratione provident necessitatibus, cumque delectus commodi fuga praesentium beatae.
                    Totam vel similique laborum dicta aperiam odit doloribus corporis.</p>
        </div>
        <div className={classes.products}>
        {products.map(item=>(
            <ProductCard key={item.id} product={item}/>
          ))}
        </div>
    </div>
  )
}

export default Product
/*

import React from 'react';
import classes from "./product.module.css";
import ProductCard from './ProductCard';

function Product({ products = [] }) {  // Set default empty array if products is undefined
  return (
    <div className={classes.content}>
      <div className={classes.items}>
        <h3>Shopping everyday</h3>
        <span></span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi asperiores consectetur,
          recusandae ratione provident necessitatibus, cumque delectus commodi fuga praesentium beatae.
          Totam vel similique laborum dicta aperiam odit doloribus corporis.
        </p>
      </div>
      <div className={classes.products}>
        {products.length > 0 ? (
          products.map(item => (
            <ProductCard key={item.id} product={item} />
          ))
        ) : (
          <p>No products available.</p>  // Fallback message when there are no products
        )}
      </div>
    </div>
  );
}

export default Product;
*/
