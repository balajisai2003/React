import classes from './CartButton.module.css';

import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  return (
    <button className={classes.button} onClick={()=>{dispatch(uiActions.toggle())}}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
