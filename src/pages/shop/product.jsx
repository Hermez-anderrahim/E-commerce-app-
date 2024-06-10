import React, { useContext } from 'react'
import  {ShopContext}  from "../../context/shop-context";
const Product = (props) => {
    
    const {id,productName,price,productImage} = props.data
    const {addToCard ,cardItems} = useContext(ShopContext)//the context we want to grab values from
    //so with this we have acces to addToCart  
   const Itemcount  =  cardItems[id]
    return (
    <div className='product-cards'>
        <img src={productImage}/>
        <div className='description'>
            <p><b>{productName} </b></p>
            <p>${price}</p>
        </div>  

        <button className='addButton' onClick={()=>addToCard(id)}>Add to cards {Itemcount != 0 && `(${Itemcount})` }</button>
    </div>
  )
}
export default Product