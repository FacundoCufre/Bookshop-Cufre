import './itemlistcontainer.css'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ()=> {
  return (
    <section className="container">
      <div className='titulos'>
        <h2>Mangas</h2>
        <h3>Todos nuestros productos</h3>
      </div>
      <ItemList/>
    </section>
  );
}

export default ItemListContainer