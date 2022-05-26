import './itemlistcontainer.css'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({titulo, subtitulo})=> {
  return (
    <section className="container" id={titulo}>
      <div className='titulos'>
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
      </div>
      <ItemList/>
    </section>
  );
}

export default ItemListContainer