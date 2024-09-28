import store from "../store";
import classes from "./Counter.module.css";
import { useSelector } from "react-redux";
const Counter = () => {
  const toggleCounterHandler = () => {};
  const incrementHandler = () => {
    store.dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    store.dispatch({ type: "decrement" });
  };
  const increaseHandler = () => {
    store.dispatch({ type: "increase", payload: 5 });
  };
  const counter = useSelector((store) => store.counter);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increaseHandler}>increment By 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
