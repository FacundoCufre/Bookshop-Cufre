import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';

const NavBar = ()=> {
  return (
    <>
      <section className="navbar">
        <Link to={'/bookshop-cufre'} className="brand">MangaShop</Link>
        <div className="links">
          <Link to={`productos/shonen`} className='categoria'><span>Shonen</span></Link>
          <Link to={`productos/drama`} className='categoria'><span>Drama</span></Link>
          <Link to={`productos/deporte`} className='categoria'><span>Deporte</span></Link>
          <Link to={`productos/cienciaficcion`} className='categoria'><span>Ciencia Ficción</span></Link>
          <Link to={`productos/romance`} className='categoria'><span>Romance</span></Link>
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