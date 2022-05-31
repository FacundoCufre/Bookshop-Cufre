import productos from "../../utils/productosMock"
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './itemdetailcontainer.css'


const ItemDetailContainer = () =>{
    const [products, setProducts] = useState([])
    const getProducts = ()=> {
        return new Promise( (resolve, reject)=>{
            setTimeout( ()=> {
                resolve(productos)
            }, 2000)
        })
    }

    useEffect( ()=> {
        getProducts()
        .then( (response) => {
            setProducts(response)
        })
    })

    return(
        <section className="item-detail-container">
            {
            products.map( ({titulo, volumen, genero, autor, id})=>{
                return(
                    <ItemDetail titulo={titulo} volumen={volumen} autor={autor} genero={genero} id={id} />
                )
            }
        )
        }


        </section>
    )
}

export default ItemDetailContainer
