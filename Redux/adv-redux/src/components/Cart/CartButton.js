import classes from "./CartButton.module.css";
import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";
import { uiActions } from "../../Store/ui-slice";

const CartButton = (props) => {
  const cartQuantity = useSelector(state=>state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleCart = () =>{
    dispatch(uiActions.toggle());
  }
  return (
    <button onClick = {toggleCart}className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
