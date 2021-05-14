import classes from "./Counter.module.css";
import { Component } from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  const dispatch = useDispatch();

  const incrementCounter = (_) => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const decrementCounter = (_) => {
    dispatch({
      type: "DECREMENT",
    });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   render({

//   })
// }
