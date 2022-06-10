import './itemdetail.css'
import CartContext from '../Context/CartContext';
import { useContext } from 'react';

const ItemDetail = ({titulo, volumen, genero, autor, id, imagen, precio})=> {
  const { addProductToCart } = useContext(CartContext)
  return (
    <section className='item-detail' key={id}>
      <ul>
          <li><span>{titulo}</span></li>
          <li><span>Volumen {volumen}</span></li>
          <li><span>Genero: {genero}</span></li>
          <li><span>Autor: {autor}</span></li>
          <li><button onClick={() => addProductToCart({titulo, volumen, genero, autor, id, imagen, precio})}>Agregar al carrito</button></li>
      </ul>
      <div className='imagen' style={{backgroundImage:`URL(${imagen})`}}>
      </div>
    </section>
  );
}

export default ItemDetail