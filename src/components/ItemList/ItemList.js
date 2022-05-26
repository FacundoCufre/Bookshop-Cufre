import { SportsHockeyOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import Item from '../Item/Item'
import './itemlist.css'

const ItemList = ()=> {
    const [products, setProducts] = useState([])
    const productos = [
    {
        titulo: 'Bleach',
        volumen: '1',
        stock: 5,
        id: 1,
        precio: 300,
        autor: 'Tite Kubo',
        genero: 'shonen',
    },
    {
        titulo: 'Your Lie In April',
        volumen: '1',
        stock: 6,
        id: 2,
        precio: 600,
        autor: 'Naoshi Arakawa',
        genero: 'romance',
    },
    {
        titulo: 'Naruto',
        volumen: '1',
        stock: 8,
        id: 3,
        precio: 300,
        autor: 'Masashi Kishimoto',
        genero: 'shonen',
    },
    {
        titulo: 'Naruto',
        volumen: '2',
        stock: 8,
        id: 4,
        precio: 300,
        autor: 'Masashi Kishimoto',
        genero: 'shonen',
    },
    {
        titulo: 'Attack on Titan',
        volumen: '1',
        stock: 5,
        id: 5,
        precio: 350,
        autor: 'Hajime Isayama',
        genero: 'shonen',
    },
    ]
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
        <section className="itemlist">
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