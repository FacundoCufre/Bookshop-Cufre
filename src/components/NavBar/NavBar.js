import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = ()=> {
  return (
    <section className="navbar">
      <div className="brand">Bookshop</div>
      <div className="links">
        <a href="#Novelas" className='categoria'><span>Novelas</span></a>
        <a href="#Mangas" className='categoria'><span>Mangas</span></a>
        <a href="#Comics" className='categoria'><span>Comics</span></a>
      </div>
      <CartWidget/>
    </section>
  );
}

export default NavBar