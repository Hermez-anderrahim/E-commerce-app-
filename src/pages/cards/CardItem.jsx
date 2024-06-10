import React ,{useContext}from 'react'
import  {ShopContext} from "../../context/shop-context";

const CardItem = (props) => {
 const {id,productName,price,productImage} = props.data
 const {cardItems,addToCard,removeFromCard , UpdateCardCount} = useContext(ShopContext)

  return (
    
    <div className='product'>
        
         <div>
          <img src={productImage}/>
          </div>
         
         <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <div className='count'>
              <button onClick={()=>addToCard(id)}> + </button>
               <input value={cardItems[id]} onChange={(e)=>UpdateCardCount(Number(e.target.value),id)}/>
              <button onClick={()=>removeFromCard(id)}> - </button>
            </div>

     
         </div>
    </div>
  )
}
export default CardItem