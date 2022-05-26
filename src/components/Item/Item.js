import './item.css'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({titulo, volumen, id, precio, clase, cant})=> {
  return (
    <section className={clase} key={id}>
        <div className='foto'></div>
        <div className='detalles'>
            <div className='titulo'><span>{titulo}</span></div>
            <div className='numero'><span>Volumen {volumen}</span></div>
            <div className='precio'><span>{precio}</span></div>
        </div>
        <ItemCount stock={cant}/>
    </section>
  );
}

export default Item