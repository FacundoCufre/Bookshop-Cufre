import './cartlist.css'
import CartContext from '../Context/CartContext'
import { useContext, useState } from 'react'



const CartLIst = ()=> {
    const [refresh, setRefresh] = useState(1)
    const { cartListItems, quitProductFromCart, clearCart } = useContext(CartContext)
    return(
        <section className='carrito'>
            <div className='vaciar' onClick={() => {clearCart(); setRefresh(refresh + 1)}}>VACIAR CARRITO</div>
            {cartListItems.length === 0 && 
                <span>NO HAY PRODUCTOS EN EL CARRITO</span>
            }
            {cartListItems.map( ( item ) => {
                return(
                        <div className='producto-en-carrito' key={item.id}>
                            <div className='imagen' style={{backgroundImage:`URL(${item.imagen})`}}></div>
                            <div className='info'>
                                    <span>{item.titulo}</span>
                                    <span>{item.volumen}</span>
                                    <span>{item.genero}</span>
                                    <span>{item.autor}</span>
                                    <span>{item.precio}</span>
                                    <span>{item.countQuantity}</span>
                                    <span onClick={() => {quitProductFromCart(item.id); setRefresh(refresh + 1)}}>ELIMINAR</span>
                            </div>
                        </div> 
                    )
            })}
        </section>
    )
}

export default CartLIst