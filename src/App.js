import NavBar from './components/NavBar/NavBar';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainerCategory from './components/ItemListContainerCategory/ItemListContainerCategory';
import {CartProvider} from './Context/CartContext'
import CartList from './components/CartList/CartList';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/bookshop-cufre' element={<Home/>} />
          <Route exact path="/producto/:id" element={<ItemDetailContainer/>}/>
          <Route exact path="/productos/:category" element={<ItemListContainerCategory/>}/>
          <Route exact path="/carrito" element={<CartList/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>  
  );
}

export default App;
