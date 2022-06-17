import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './itemdetailcontainer.css'
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../utils/firebaseConfig";


const ItemDetailContainer = () =>{
    const { id } = useParams()
    const [products, setProducts] = useState([])

    useEffect( ()=> {
        getProducts().then((product) =>{
            setProducts(product)
        })
    }, [])

    const getProducts = async() =>{
        const docRef = doc(db, "items", id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        return(product)
    }
    

    return(
        <section className="item-detail-container">
                    <ItemDetail titulo={products.titulo} volumen={products.volumen} stock={products.stock} autor={products.autor} genero={products.genero} id={products.id} imagen={products.imagen} precio={products.precio} />
        </section>
    )
}

export default ItemDetailContainer
