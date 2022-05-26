import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ImgDecorative from './components/ImgDecorative/ImgDecorative';
import './App.css'

function App() {
  return (
    <>
      <NavBar/>

      <section className='portal'>
        <ItemListContainer titulo={`Mangas`} subtitulo={`Todos nuestros mangas`}/>
        <ImgDecorative tipo='decoracion decoracion-todos'/>
      </section>

      <section className='portal'>
        <ImgDecorative tipo='decoracion decoracion-top'/>
        <ItemListContainer titulo={`Top`} subtitulo={`Los más vendidos`}/>
      </section>

      <section className='portal'>
        <ItemListContainer titulo={`Novedades`} subtitulo={`Últimas novedades`}/>
        <ImgDecorative tipo='decoracion decoracion-novedades'/>
      </section>
    </>
  );
}

export default App;
