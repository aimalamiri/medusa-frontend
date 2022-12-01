import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/features/counter/counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="text-center py-8">
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <h1 className="text-3xl font-bold text-gray-600">{count}</h1>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
