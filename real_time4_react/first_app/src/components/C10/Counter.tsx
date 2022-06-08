import React from "react";
import { store } from "./store";

function decrementRandom(store: any) {
  store.dispatch({ type: "INCREMENT" });

  setTimeout(() => {
    store.dispatch({ type: "DECREMENT", payload: 4 });
  }, 1000);
}

const Counter = () => {
  const [count, setCount] = React.useState(store.getState().counter);
  const dispatch = (action: any) => {
    store.dispatch(action);
    setCount(store.getState().counter);
  };
  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <div>{count}</div>
      <button onClick={() => dispatch(decrementRandom)}>-</button>
    </div>
  );
};

export default Counter;
