import './item.css'
import { Link } from 'react-router-dom';

const Item = ({titulo, volumen, id, precio, clase, imagen})=> {
  return (
    <section className={clase} key={id}>
        <div className='foto' style={{backgroundImage: `URL(${imagen})`}}></div>
        <div className='detalles'>
          <div className='titulo'><span>{titulo}</span></div>
          <div className='numero'><span>Volumen {volumen}</span></div>
          <div className='precio'><span>{precio}</span></div>
        </div>
        <div className='mas-detalles'>
          <Link to={`/producto/${id}`}><span>Ver Más</span></Link>
        </div>
    </section>
  );
}

export default Item