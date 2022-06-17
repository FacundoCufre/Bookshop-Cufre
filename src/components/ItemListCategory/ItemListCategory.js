import { useEffect, useState } from 'react';
import db from '../../utils/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Item from '../Item/Item';
import '../ItemList/itemlist.css';



const ItemListCategory = ({category}) => {

    
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts().then((products) => {
            setProducts(products)
        })
    },[])

    const getProducts = async ()=>{
        const productSnapshot = await getDocs(query(collection(db, "items"), where("genero", "==", category)));
            const productList = productSnapshot.docs.map((doc) => {
                let product = doc.data()
                product.id = doc.id
                return(product)
            })
            return productList
        }
    return(
        <section className="itemlist" key={category}>
            {
                products.map( ({titulo, volumen, id, precio, genero, stock, imagen})=>{
                    const clase = `item ${genero}` 
                        return(
                            <Item titulo={titulo} volumen={volumen} id={id} precio={precio} clase={clase} cant={stock} imagen={imagen}/>
                        )
                    }
                )
            }
        </section>
    )
}


export default ItemListCategory