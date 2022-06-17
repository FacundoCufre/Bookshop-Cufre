import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import InitialInfo from '../components/InitialInfo/InitialInfo';


const Home = () => {
    return(
        <>
            <InitialInfo/>
            <section className='portal'>
                <ItemListContainer/>
            </section>
        </>  
    )
}

export default Home