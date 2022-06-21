import './itemlistcontainer.css'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ()=> {
  return (
    <section className="container">
      <div className='titulos'>
        <h2>Encuentra tu manga favorito</h2>
      </div>
      <ItemList/>
    </section>
  );
}

export default ItemListContainer