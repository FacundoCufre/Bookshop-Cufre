import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = ()=> {
  return (
    <section className="navbar">
      <div className="brand">MangaShop</div>
      <div className="links">
        <a href="#Mangas" className='categoria'><span>Todos</span></a>
        <a href="#Top" className='categoria'><span>Top ventas</span></a>
        <a href="#Novedades" className='categoria'><span>Novedades</span></a>
      </div>
      <CartWidget/>
    </section>
  );
}

export default NavBar