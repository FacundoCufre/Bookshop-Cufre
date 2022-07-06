import { createContext, useEffect, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState( JSON.parse(localStorage.getItem('productos')) || [])
    const [totalPrice, setTotalPrice] = useState(JSON.parse(localStorage.getItem('precio')) || 0 )
    const [totalProducts, setTotalProducts] = useState(JSON.parse(localStorage.getItem('cantidad')) || 0)
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
        if(!isInCart){
            setTotalPrice(totalPrice + product.precio * product.countQuantity);
            localStorage.setItem('precio', totalPrice + product.precio * product.countQuantity)
            localStorage.setItem('productos', [JSON.stringify([...cartListItems, product])]);
            localStorage.setItem('cantidad', totalProducts + product.countQuantity)
            setTotalProducts(totalProducts + product.countQuantity);
            return setCartListItems(cartListItems => [...cartListItems, product]);
        }
        
        
        isInCart && addCount();
        if(product.countQuantity == product.stock){
            product.countQuantity = product.stock
        }
    }

const quitProductFromCart = (id) => {
    let quitProduct = cartListItems.findIndex(cartItem => cartItem.id === id)
    let productPrice = cartListItems.find(cartItem => cartItem.id === id)
    setTotalPrice(totalPrice - productPrice.precio * productPrice.countQuantity);
    cartListItems.splice(quitProduct, 1)
    setRefresh(refresh + 1)
    setTotalProducts(totalProducts - productPrice.countQuantity)
}

const clearCart = () => {
    cartListItems.splice(0, cartListItems.length)
    setRefresh(refresh + 1)
    setTotalPrice(0);
    setTotalProducts(0);
    localStorage.clear()
}

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