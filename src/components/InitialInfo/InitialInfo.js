import './initialinfo.css'

const InitialInfo = () => {
    return(
        <section className='info-inicial'>
            <div className='bienvenida'></div>
            <div className='datos'>
                <div className='datos-dato'>
                    <span>MÁS DE</span>
                    <span>50 MANGAS</span>
                    <span>EN COLECCIÓN</span>
                </div>
                <div className='datos-dato'>
                    <span>MÁS DE</span>
                    <span>6000</span>
                    <span>VENTAS</span>
                </div>
                <div className='datos-dato'>
                    <span>ULTIMAS</span>
                    <span>NOVEDADES</span>
                    <span>AL DÍA</span>
                </div>
            </div>
        </section>
    )
    
}

export default InitialInfo