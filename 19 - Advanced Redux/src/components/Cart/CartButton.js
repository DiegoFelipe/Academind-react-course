import classes from "./CartButton.module.css";
import { uiActions } from "../store/slices/uiSlice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalItemsAtChart = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = (_) => {
    dispatch(uiActions.toggle());
  };

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItemsAtChart}</span>
    </button>
  );
};

export default CartButton;
