import React, { useEffect, useState } from 'react'
import Banner from '../component/banner/Banner'
import Product from '../component/product/Product'
import { useLoaderData } from 'react-router'

const Hoom = () => {
  const [products, setProducts] = useState([])

  const data = useLoaderData()
  useEffect(()=>{
    setProducts(data.data)
  },[data])
  
  return (
    <div>
      <Banner/>
      <Product products={products}/>
    </div>
  )
}

export default Hoom