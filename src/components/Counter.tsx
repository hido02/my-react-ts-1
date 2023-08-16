// counter.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counter/counterSlice'; // Import the slice actions
import { RootState } from '../reducers/rootReducer';

function Counter() {
  const counterValue = useSelector((state: RootState) => state.counter.value); // Get counter value from Redux store
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <p>Value: {counterValue}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
