import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  fetchData,
  increment,
  incrementByAmount,
} from "../../modules/counterSlice";

const ReduxCounter = () => {
  const count = useSelector((state) => state.counter.value);
  const data = useSelector((state) => state.counter.data);
  const loading = useSelector((state) => state.counter.loading);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          decrement
        </button>
        <button onClick={() => dispatch(fetchData(5))}>Fetch</button>
        <div>{data}</div>
      </div>
      <div>{count}</div>
      {loading && <span>로딩 중...</span>}
    </div>
  );
};

export default ReduxCounter;
