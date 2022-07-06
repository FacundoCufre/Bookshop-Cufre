import './cartlist.css'
import CartContext from '../../Context/CartContext'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import {addDoc, collection} from 'firebase/firestore'
import db from '../../utils/firebaseConfig'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartLIst = ()=> {
    const { cartListItems, totalPrice, quitProductFromCart, clearCart } = useContext(CartContext)

    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [showTy, setShowTy] = useState('no')
    
    const handlesubmit = (e)=>{
        e.preventDefault()
        validarForm()
    }

    const [nameChange, setNameChange] = useState('')
    const [phoneChange, setPhoneChange] = useState('')
    const [mailChange, setMailChange] = useState('')
    const [formValue, setFormValue] = useState({})

    const handleChangeName = (e) => {
        setNameChange(e.target.value)
    }
    const handleChangePhone = (e) => {
        setPhoneChange(e.target.value)
    }
    const handleChangeMail = (e) => {
        setMailChange(e.target.value)
    }

    const validarForm = () => {
        if(nameChange.length > 3, phoneChange.length >= 6, mailChange.length >= 10){
            enviarForm()
        }
        else{
            const notify = () => toast.error('Formulario invalido', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            notify()
        }
    }

    const enviarForm = () => {
        setShowModal2(true)
        setShowModal(false)
        setFormValue({...formValue, name: nameChange, phone: phoneChange, mail: mailChange})
        
    }

    const [order, setOrder] = useState({})

    const saveOrder = async(newOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        agradecerCompra(orderDoc.id)
    }

    const agradecerCompra = (a) => {
        setShowModal2(false)
        setShowTy(a)

    }

    const finalizarCompra = () => {
        setOrder({...order, 
                    buyer: formValue,
                    items: cartListItems.map( (item) =>{
                        return(
                            {
                                id: item.id,
                                titulo: item.titulo,
                                precio: item.precio
                            }
                        )
                    }),
                    precioFinal: totalPrice})
        saveOrder(({...order, 
            buyer: formValue,
            items: cartListItems.map( (item) =>{
                return(
                    {
                        id: item.id,
                        titulo: item.titulo,
                        precio: item.precio
                    }
                )
            }),
            precioFinal: totalPrice}))
        clearCart()
    }
    
    
    return(
        
        <section className='carrito'>
            <div className='vaciar' onClick={() => {clearCart()}}>VACIAR CARRITO</div>
            {cartListItems.length === 0 && 
                <span>NO HAY PRODUCTOS EN EL CARRITO</span>
            }
            {cartListItems.map( ( item ) => {
                return(
                        <div className='producto-en-carrito' key={item.id}>
                            <div className='imagen' style={{backgroundImage:`URL(${item.imagen})`}}></div>
                            <div className='info'>
                                    <span>{item.titulo}</span>
                                    <span>{item.volumen}</span>
                                    <span>{item.genero}</span>
                                    <span>{item.autor}</span>
                                    <span>{item.precio}</span>
                                    <span>{item.countQuantity}</span>
                                    <span onClick={() => {quitProductFromCart(item.id)}}>ELIMINAR</span>
                            </div>
                        </div> 
                    )
            })}
            <div className='detalle-compra'>
                <div className='precio-total'><span>Precio total: $ {totalPrice}</span></div>
                {cartListItems.length > 0 && 
                    <div onClick={()=> setShowModal(true)}>TERMINAR MI COMPRA</div>
                }
                {cartListItems.length === 0 && 
                    <Link to={'/bookshop-cufre'}>Empezar a comprar</Link>
                }
            </div>
            {showModal === true &&
                <div className='info-comprador'>
                    <form onSubmit={handlesubmit}>
                        <h2>Ingrese sus datos para generar su órden de compra</h2>
                        <TextField id="outlined-basic" label="Nombre" color='warning' variant="outlined" onChange={handleChangeName}/>
                        <TextField id="outlined-basic" label="Teléfono" color='warning' variant="outlined" onChange={handleChangePhone}/>
                        <TextField id="outlined-basic" label="Mail" color='warning' variant="outlined" onChange={handleChangeMail}/>
                        <div className='botones-comprador'>
                            <div onClick={()=> setShowModal(false)}>Cancelar</div>
                            <button type='submit'>Continuar</button>
                        </div>
                        <ToastContainer/>
                    </form>
                </div>
            }
            
            {showModal2 === true &&
                <div className='orden-compra'>
                    <div className='orden-compra-info'>
                        <div className='info'>
                            <div className='info-usser'>
                                <h2>Nombre: {formValue.name}</h2>
                                <h2>Número: {formValue.phone}</h2>
                                <h2>Mail: {formValue.mail}</h2>
                            </div>
                            <div className='info-compra'>
                                <div className='info-articulos'>
                                    {cartListItems.map( ( item ) => {
                                        return(
                                            <span>{item.titulo} x{item.countQuantity}</span>
                                        )
                                    })}
                                </div>
                                <span className='info-total'>Total: $ {totalPrice}</span>
                            </div>
                        </div>
                        <div className='botones-fin'>
                            <div className='cancelar-compra' onClick={()=> setShowModal2(false)}>Cancelar compra</div> 
                            <div className='finalizar-compra' onClick={finalizarCompra}>Finalizar compra</div>
                        </div>
                    </div>
                </div>
            }
            {showTy !== 'no' &&
                <h2>Gracias por su compra, esta es su orden: {showTy} </h2>
            }
            
        </section>
    )
}

export default CartLIst