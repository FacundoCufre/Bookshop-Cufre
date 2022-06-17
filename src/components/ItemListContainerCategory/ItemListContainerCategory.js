import '../ItemListContainer/itemlistcontainer.css';
import ItemListCategory from '../ItemListCategory/ItemListCategory';
import { useParams } from 'react-router-dom';

const ItemListContainerCategory = ()=> {
    const { category } = useParams()

  return (
    <section className="container" key={category}>
      <div className='titulos'>
        <h2>Mangas</h2>
        <h3>Todos nuestros productos</h3>
      </div>
      <ItemListCategory category={category}/>
    </section>
  );
}

export default ItemListContainerCategory