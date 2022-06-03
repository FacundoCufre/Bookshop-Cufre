
import { useState, useEffect } from "react";
import Item from '../Item/Item'
import './itemlist.css'
import productos from "../../utils/productosMock";

const ItemList = ({llave})=> {
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
        <section className="itemlist" key={llave}>
        {
        products.map( ({titulo, volumen, id, precio, genero, stock})=>{
            const clase = `item ${genero}` 
                return(
                    <Item titulo={titulo} volumen={volumen} id={id} precio={precio} clase={clase} cant={stock}/>
                )
            }
        )
        }
        </section>
    )
}

export default ItemList