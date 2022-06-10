import './cartwidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const CartWidget = ()=> {
  return (
    <Link to={'carrito'}>
      <div className='carticon'>
          <ShoppingCartIcon fontSize='large'/>
      </div>
    </Link>
  );
}

export default CartWidget