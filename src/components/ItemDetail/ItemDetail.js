import './itemdetail.css'

const ItemDetail = ({titulo, volumen, genero, autor, id})=> {
  return (
    <section className='item-detail' key={id}>
            <ul>
                <li><span>{titulo}</span></li>
                <li><span>Volumen {volumen}</span></li>
                <li><span>Genero: {genero}</span></li>
                <li><span>Autor: {autor}</span></li>
            </ul>
    </section>
  );
}

export default ItemDetail