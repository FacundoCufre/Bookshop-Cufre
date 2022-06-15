import { ContactlessOutlined } from "@mui/icons-material";
import { createContext, useEffect, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalProducts, setTotalProducts] = useState(0)
    const [refresh, setRefresh] = useState(1)

    const addProductToCart = (product) => {
        const addCount = () => {
            if(isInCart.countQuantity + product.countQuantity < product.stock){
                setTotalPrice(totalPrice + isInCart.precio * isInCart.countQuantity);
                isInCart.countQuantity = isInCart.countQuantity + product.countQuantity;
            }
            if(isInCart.countQuantity + product.countQuantity >= product.stock){
                setTotalPrice(totalPrice + isInCart.precio * (product.stock - isInCart.countQuantity));
                isInCart.countQuantity = product.stock
            }
            setTotalProducts(totalProducts + isInCart.countQuantity);
            
        }

        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        !isInCart && setCartListItems(cartListItems => [...cartListItems, product]);
        !isInCart && setTotalPrice(totalPrice + product.precio * product.countQuantity);
        setTotalProducts(totalProducts + product.countQuantity);
        isInCart && addCount();
        if(product.countQuantity == product.stock){
            product.countQuantity = product.stock
        }
    }
console.log(totalProducts)
const quitProductFromCart = (id) => {
    let quitProduct = cartListItems.findIndex(cartItem => cartItem.id === id)
    let productPrice = cartListItems.find(cartItem => cartItem.id === id)
    setTotalPrice(totalPrice - productPrice.precio * productPrice.countQuantity);
    cartListItems.splice(quitProduct, 1)
    setRefresh(refresh + 1)
}

const clearCart = () => {
    cartListItems.splice(0, cartListItems.length)
    setRefresh(refresh + 1)
    setTotalPrice(0);
}
console.log(totalPrice)
    const data = {
        cartListItems,
        totalPrice,
        totalProducts,
        addProductToCart,
        quitProductFromCart,
        clearCart,
        setRefresh,
        refresh,
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}