import { useState } from 'react'
import './itemcount.css'

const ItemCount = ({stock})=> {
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
            <button className='agregar'><span>Agregar al carrito</span></button>
        </section>
    )
}

export default ItemCount