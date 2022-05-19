import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = ()=> {
  return (
    <section className="navbar">
      <div className="brand">Bookshop</div>
      <div className="links">
        <div className='categoria'><span>novelas</span></div>
        <div className='categoria'><span>mangas</span></div>
        <div className='categoria'><span>comics</span></div>
      </div>
      <CartWidget/>
    </section>
  );
}

export default NavBar