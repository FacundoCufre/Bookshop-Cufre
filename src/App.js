import NavBar from './components/NavBar/NavBar';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/bookshop-cufre' element={<Home/>} />
        <Route exact path="/producto/:id" element={<ItemDetailContainer/>}/>
        <Route exact path="/productos/:category" element={<ItemListContainer/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
