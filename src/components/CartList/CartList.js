import './cartlist.css'
import CartContext from '../Context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom';



const CartLIst = ()=> {
    const { cartListItems, totalPrice, quitProductFromCart, clearCart } = useContext(CartContext)
    return(
        <section className='carrito'>
            <div className='vaciar' onClick={() => {clearCart()}}>VACIAR CARRITO</div>
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
                                    <span onClick={() => {quitProductFromCart(item.id)}}>ELIMINAR</span>
                            </div>
                        </div> 
                    )
            })}
            <div className='detalle-compra'>
                <div className='precio-total'><span>Precio total: $ {totalPrice}</span></div>
                {cartListItems.length > 0 && 
                    <div>TERMINAR MI COMPRA</div>
                }
                {cartListItems.length === 0 && 
                    <Link to={'/bookshop-cufre'}>Empezar a comprar</Link>
                }
            </div>
        </section>
    )
}

export default CartLIst