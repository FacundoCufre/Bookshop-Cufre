import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import InitialInfo from '../components/InitialInfo/InitialInfo';


const Home = () => {
    return(
        <>
            <InitialInfo/>
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