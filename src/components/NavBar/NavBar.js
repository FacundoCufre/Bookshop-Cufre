import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';

const NavBar = ()=> {
  return (
    <section className="navbar">
      <Link to={'/bookshop-cufre'} className="brand">MangaShop</Link>
      <div className="links">
        <Link to={`productos/shonen`} className='categoria'><span>Shonen</span></Link>
        <Link to={`productos/romance`} className='categoria'><span>Romance</span></Link>
      </div>
      <CartWidget/>
    </section>
  );
}

export default NavBar