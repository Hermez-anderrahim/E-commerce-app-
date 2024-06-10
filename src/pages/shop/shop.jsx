import React from 'react'
import PRODUCTS from "../../product-list"
import Product from './product'
import "./shop.css"
const Shop = () => {
  return (
    <div className='shop'>
        <div className='shop-title'>
           <h1>my shop </h1>
       </div>
       
       <div className='products'>
        
        {PRODUCTS.map((item)=>(
         <Product data={item}/>
        ))}
           
       </div>
    </div>
  )
}
export default Shop