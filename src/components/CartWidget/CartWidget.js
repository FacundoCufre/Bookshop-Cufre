import './cartwidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../Context/CartContext'

const CartWidget = ()=> {

  const { totalProducts } = useContext(CartContext)
  return (
    <Link to={'carrito'}>
      <div className='carticon'>
          <ShoppingCartIcon fontSize='large'/>
          <div className='cantidad'><span>{totalProducts}</span></div>
      </div>
      
    </Link>
  );
}

export default CartWidget