import classes from "./Counter.module.css";
// import { Component } from "react";
import { counterActions } from "../store/counterSlice";
import { useSelector, useDispatch, connect } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter());
  };

  const dispatch = useDispatch();

  const incrementCounter = (_) => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = (_) => {
    dispatch(counterActions.increase({ amount: 5 }));
  };

  const decrementCounter = (_) => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>
        {showCounter ? "Hide Counter" : "Show counter"}
      </button>
    </main>
  );
};

export default Counter;

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toogleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toogleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
