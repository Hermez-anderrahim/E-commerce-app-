import React, { createContext, useState } from 'react'
import PRODUCTS from "../product-list"


   export const ShopContext = createContext(null)
   
   const getDefaultcard =() =>{
     let cart ={}
     for (let i = 1; i < PRODUCTS.length +1; i++) {
        cart[i]=0
     }
     return cart
   }

     
    export const ShopContextProvider = (props) => {
    const [cardItems,setCardItems] = useState(getDefaultcard())
    
    function getAmount() {
        let totalAmount= 0;
      
        for (const item in cardItems) {
        let iteminfo = PRODUCTS.find((product)=> product.id === Number(item ))
        totalAmount += cardItems[item] * iteminfo.price
        }
        return totalAmount
        
    }
    function addToCard(itemId) {
            setCardItems((prev) => ({
                ...prev,
                [itemId]: prev[itemId] + 1
            }))
        }
    function removeFromCard(itemId) {
            setCardItems((prev) => ({
                ...prev,
                [itemId]: prev[itemId] - 1
            }))

        }
    function UpdateCardCount(newAmount,itemId) {
        setCardItems((prev)=> ({...prev,
            [itemId]:newAmount
        }
            ))
        
    }

      
   

    const contextValue = {cardItems,addToCard,removeFromCard,UpdateCardCount,getAmount}
    return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

 