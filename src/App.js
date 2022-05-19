import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer titulo={`Todos nuestros productos`} subtitulo={`No hay productos en este momento :(`}/>
      <ItemListContainer titulo={`Novelas`} subtitulo={`Aún no tenemos novelas :(`}/>
      <ItemListContainer titulo={`Mangas`} subtitulo={`Aún no tenemos mangas:(`}/>
      <ItemListContainer titulo={`Comics`} subtitulo={`Aún no tenemos comics :(`}/>
    </>
  );
}

export default App;
