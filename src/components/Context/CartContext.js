import { createContext, useEffect, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])

    const addProductToCart = (product) => {
        console.log('lista antes',cartListItems) 
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        !isInCart && setCartListItems(cartListItems => [...cartListItems, product])  
    }
 console.log (cartListItems)
    

    const data = {
        cartListItems,
        addProductToCart,
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}