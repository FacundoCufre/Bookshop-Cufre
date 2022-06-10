import './cartlist.css'
import CartContext from '../Context/CartContext'
import { useContext } from 'react'

const CartLIst = ()=> {
    const { cartListItems, countQuantity } = useContext(CartContext)
    return(
        <section className='carrito'>
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
                            </div>
                        </div> 
                    )
                })
            }
        </section>
    )
}

export default CartLIst