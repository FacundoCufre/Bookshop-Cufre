import '../ItemListContainer/itemlistcontainer.css';
import ItemListCategory from '../ItemListCategory/ItemListCategory';
import { useParams } from 'react-router-dom';

const ItemListContainerCategory = ()=> {
    const { category } = useParams()

  return (
    <section className="container" key={category}>
      <div className='titulos'>
        <h2>Encuentra tu manga favorito</h2>
      </div>
      <ItemListCategory category={category}/>
    </section>
  );
}

export default ItemListContainerCategory