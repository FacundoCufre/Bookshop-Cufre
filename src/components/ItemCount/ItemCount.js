import { useState } from 'react'
import './itemcount.css'
import CartContext from '../Context/CartContext';
import { useContext } from 'react';

const ItemCount = ({stock, setShowButton, id, setCountQuantity})=> {
    const [count, setCount] = useState(1)

    const addCount = ()=>{
        count < stock && setCount(count + 1)
    }

    const restCount = ()=>{
        count > 1 && setCount(count - 1)   
    }

    return(
        <section className='contador'>
            <button className='suma' onClick={addCount}>+</button>
            <div className='total'><span>{count}</span></div>
            <button className='resta' onClick={restCount}>-</button>
            <button className='agregar' onClick={()=>{setShowButton(true)
            setCountQuantity(count)}}><span>Agregar Cantidad</span></button>
        </section>
    )
}

export default ItemCount