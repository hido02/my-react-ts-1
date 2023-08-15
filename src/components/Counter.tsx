// src/components/Counter.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/CounterAction";
import { RootState } from "../reducers"; // 수정된 부분

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
