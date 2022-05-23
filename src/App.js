import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <>
      <NavBar/>
      <ItemCount stock={7}/>
      <ItemListContainer titulo={`Todos nuestros productos`} subtitulo={`No hay productos en este momento :(`}/>
      <ItemListContainer titulo={`Novelas`} subtitulo={`Aún no tenemos novelas :(`}/>
      <ItemListContainer titulo={`Mangas`} subtitulo={`Aún no tenemos mangas:(`}/>
      <ItemListContainer titulo={`Comics`} subtitulo={`Aún no tenemos comics :(`}/>
    </>
  );
}

export default App;
