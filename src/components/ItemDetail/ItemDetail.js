import './itemdetail.css'

const ItemDetail = ({titulo, volumen, genero, autor, id, imagen})=> {
  return (
    <section className='item-detail' key={id}>
      <ul>
          <li><span>{titulo}</span></li>
          <li><span>Volumen {volumen}</span></li>
          <li><span>Genero: {genero}</span></li>
          <li><span>Autor: {autor}</span></li>
      </ul>
      <div className='imagen' style={{backgroundImage:`URL(${imagen})`}}>
      </div>
    </section>
  );
}

export default ItemDetail