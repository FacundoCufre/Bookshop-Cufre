import { ContactlessOutlined } from "@mui/icons-material";
import { createContext, useEffect, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])

    const addProductToCart = (product) => {
        const addCount = () => {
            if(isInCart.countQuantity < product.stock){
                isInCart.countQuantity = isInCart.countQuantity + product.countQuantity;
            }
            if(isInCart.countQuantity == product.stock){
                isInCart.countQuantity = product.stock + ' Cantidad MÁX'
            }  
        }

        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        !isInCart && setCartListItems(cartListItems => [...cartListItems, product]);
        isInCart && addCount();
        if(product.countQuantity == product.stock){
            product.countQuantity = product.stock + ' Cantidad MÁX'
        }      
    }

const quitProductFromCart = (id) => {
    let quitProduct = cartListItems.findIndex(cartItem => cartItem.id === id)
    cartListItems.splice(quitProduct, 1)
}

const clearCart = () => {
    cartListItems.splice(0, cartListItems.length)
}

    const data = {
        cartListItems,
        addProductToCart,
        quitProductFromCart,
        clearCart,
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}