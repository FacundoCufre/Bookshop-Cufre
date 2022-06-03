import './itemlistcontainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';


const ItemListContainer = ()=> {
  const { category } = useParams()
  return (
    <section className="container" id={category} key={category}>
      <div className='titulos'>
        <h2>{category}</h2>
        <h3>Todos nuestros: {category}</h3>
      </div>
      <ItemList llave={`${category}`}/>
    </section>
  );
}

export default ItemListContainer