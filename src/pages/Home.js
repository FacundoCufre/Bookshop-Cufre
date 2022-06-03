import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ImgDecorative from '../components/ImgDecorative/ImgDecorative';


const Home = () => {
    return(
        <>
            <section className='portal'>
                <ItemListContainer category={`mangas`}/>
                <ImgDecorative tipo='decoracion decoracion-todos'/>
            </section>

            <section className='portal'>
                <ImgDecorative tipo='decoracion decoracion-top'/>
                <ItemListContainer category={`top`}/>
            </section>

            <section className='portal'>
                <ItemListContainer category={`novedades`}/>
                <ImgDecorative tipo='decoracion decoracion-novedades'/>
            </section>
        </>  
    )
}

export default Home