import { useState, useEffect } from "react";
import Item from '../Item/Item'
import './itemlist.css'
import { collection, getDocs } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const ItemList = ()=> {
    const [products, setProducts] = useState([])

    useEffect( ()=> {
        getProducts().then((products) => {
           setProducts(products)})
    }, [])

    const getProducts = async ()=>{
        const productSnapshot = await getDocs(collection(db, "items"));
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return(product)
        })
        return(productList)
    }
    return(
        <section className="itemlist">
        {
        products.map( ({titulo, volumen, id, precio, stock, imagen})=>{
                return(
                    <Item titulo={titulo} volumen={volumen} id={id} precio={precio} cant={stock} imagen={imagen}/>
                )
            }
        )
        }
        </section>
    )
}

export default ItemList