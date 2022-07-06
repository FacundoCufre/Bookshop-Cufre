import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './itemdetail.css'
import CartContext from '../../Context/CartContext'
import { useContext } from 'react';

const ItemDetail = ({titulo, volumen, genero, stock, autor, id, imagen, precio, descripcion})=> {
  const { addProductToCart } = useContext(CartContext)
  const [showButton, setShowButton] = useState(false)
  const [countQuantity, setCountQuantity] = useState([])
  return (
    <section className='item-detail' key={id}>
      <div className='foto-detalle'>
        <ul>
          <li><span>{titulo}</span></li>
          <li><span>Volumen {volumen}</span></li>
          <li><span>Genero: {genero}</span></li>
          <li><span>Autor: {autor}</span></li>  
          <li><span>Precio: ${precio}</span></li> 
        </ul>
        <div className='imagen' style={{backgroundImage:`URL(${imagen})`}}/>
      </div>
      <div className='detalle-descripcion'>
        <p>
          {descripcion}
        </p>
      </div>
      <div className='cantidad-selector'>
        {!showButton ?
          <ItemCount stock={stock} setShowButton={setShowButton} setCountQuantity={setCountQuantity} id={id}/>
          :
          <Link onClick={() => addProductToCart({titulo, volumen, genero, autor, id, imagen, precio, stock, countQuantity})} className='fin-compra' to={`/carrito`} ><span>Agregar al carro</span></Link>}
      </div>
    </section>
  );
}

export default ItemDetail