import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ImgDecorative from '../components/ImgDecorative/ImgDecorative';


const Home = () => {
    return(
        <>
            <section className='portal'>
                <ItemListContainer category={`mangas`}/>
            </section>

            <section className='portal'>
                <ItemListContainer category={`top`}/>
            </section>

            <section className='portal'>
                <ItemListContainer category={`novedades`}/>
            </section>
        </>  
    )
}

export default Home