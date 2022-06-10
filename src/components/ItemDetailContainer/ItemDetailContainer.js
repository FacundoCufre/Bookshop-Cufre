import productos from "../../utils/productosMock"
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './itemdetailcontainer.css'
import { useParams } from "react-router-dom";


const ItemDetailContainer = () =>{
    const { id } = useParams()
    const [products, setProducts] = useState([])
    /* const getProducts = ()=> {
        return new Promise( (resolve, reject)=>{
            setTimeout( ()=> {
                resolve(productos)
            }, 2000)
        })
    }*/

    useEffect( ()=> {
        setProducts(filtrar)
    }, [])
        const filtrar = productos.find((product) =>{
                    return product.id == id 
        })
    return(
        <section className="item-detail-container">
                    <ItemDetail titulo={products.titulo} volumen={products.volumen} autor={products.autor} genero={products.genero} id={products.id} imagen={products.imagen} precio={products.precio} />
        </section>
    )
}

export default ItemDetailContainer
