import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, set} from 'store/reducers/counter';

const Counter = () => {
  const count = useSelector((state) => {
    return state.counter.value;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button onClick={() => {
        dispatch(set(13))
      }}>dsds</button>
    </div>
  );
}

export default Counter;
