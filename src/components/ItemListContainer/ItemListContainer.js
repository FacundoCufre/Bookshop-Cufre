import './itemlistcontainer.css'

const ItemListContainer = ({titulo, subtitulo})=> {
  return (
    <section className="container" id={titulo}>
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
    </section>
  );
}

export default ItemListContainer