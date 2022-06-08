import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './itemdetail.css'

const ItemDetail = ({titulo, volumen, genero, autor, id, imagen, stock})=> {
  const [showButton, setShowButton] = useState(false)
  return (
    <section className='item-detail' key={id}>
      <ul>
          <li><span>{titulo}</span></li>
          <li><span>Volumen {volumen}</span></li>
          <li><span>Genero: {genero}</span></li>
          <li><span>Autor: {autor}</span></li>
          {!showButton ?
          <ItemCount stock={stock} setShowButton={setShowButton}/>
          :
          <Link className='fin-compra' to={`/cart`} ><span>Comprar</span></Link>}
          
          
      </ul>
      <div className='imagen' style={{backgroundImage:`URL(${imagen})`}}>
      </div>
    </section>
  );
}

export default ItemDetail