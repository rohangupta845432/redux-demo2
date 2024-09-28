import { createStore } from "redux";

const defaultReduser = { counter: 0, payload: 0 };
const counterReduser = (state = defaultReduser, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      payload: state.payload,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      payload: state.payload,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.payload,
      payload: action.payload,
    };
  }
  return state;
};

const store = createStore(counterReduser);

export default store;
