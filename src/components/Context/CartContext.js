import { createContext, useEffect, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)

        !isInCart && setCartListItems(cartListItems => [...cartListItems, product])     
    }

    const [ countQuantity, setCountQuantity] = useState([])

    const addQuantity = (quant) => {
        setCountQuantity(countQuantity => [...countQuantity, quant])
    }

    const data = {
        cartListItems,
        countQuantity,
        addProductToCart,
        addQuantity,
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}