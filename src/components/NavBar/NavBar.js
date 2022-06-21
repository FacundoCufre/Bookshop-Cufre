import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';

const NavBar = ()=> {
  return (
    <>
      <section className="navbar">
        <Link to={'/bookshop-cufre'} className="brand">MangaShop</Link>
        <div className="links">
          <Link to={`productos/ofertas`} className='categoria'><span>Ofertas</span></Link>
          <Link to={`productos/clasicos`} className='categoria'><span>Clásicos</span></Link>
          <Link to={`productos/populares`} className='categoria'><span>Populares</span></Link>
        </div>
        <CartWidget/>
      </section>
      <section className='menu'>
        <div className='menu-explorer'></div>
      </section>
    </>
  );
}

export default NavBar