import React, { useState } from "react";
import { store } from "./store";

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
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

export default Counter;
