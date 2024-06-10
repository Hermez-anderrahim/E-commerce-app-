import React , {useContext} from 'react'
import PRODUCTS from '../../product-list'
import  {ShopContext}  from "../../context/shop-context";
import  CardItem  from './CardItem';
import './cards.css'
import { useNavigate } from "react-router-dom";
const Cards = () => {
    const {cardItems , getAmount} = useContext(ShopContext)
    const  TotalAmount = getAmount()
    const navigate = useNavigate()
    //usenavigatehook allows us to 
  return (
    <div className='card'>
        <div className='card-title'> <h1>Your Items</h1></div>
        <div className='card-items'>
          {PRODUCTS.map((item)=>{
            if (cardItems[item.id] != 0) {
               return <CardItem data={item}/>
            }
          })}
        </div>
       { TotalAmount > 0 ? 
       <div className='checkout'>
              <p>subtotal:${TotalAmount}</p>
              <button onClick={()=>navigate("/")}>continue shopping </button>
              <button>checkout</button>
        </div> : <h1>your list is empty</h1>}
    </div>
    
    

  )
}
export default Cards