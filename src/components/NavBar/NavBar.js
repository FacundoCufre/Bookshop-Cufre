import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';

const NavBar = ()=> {
  return (
    <section className="navbar">
      <Link to={'/bookshop-cufre'} className="brand">MangaShop</Link>
      <div className="links">
        <Link to={`producto/mangas`} className='categoria'><span>Todos</span></Link>
        <Link to={`productos/top`} className='categoria'><span>Top ventas</span></Link>
        <Link to={`productos/novedades`} className='categoria'><span>Novedades</span></Link>
      </div>
      <CartWidget/>
    </section>
  );
}

export default NavBar