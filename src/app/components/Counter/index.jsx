import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, set } from 'store/reducers/counter';
import CounterSet from 'components/CounterSet';
const Counter = () => {
  const count = useSelector((state) => {
    return state.counter.value;
  });
  const dispatch = useDispatch();
  const ref = React.useRef();
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
      <CounterSet ref={ref} value={30} />
      <button
        onClick={() => {
          ref.current.set(40);
        }}
      >
        set 40
      </button>
    </div>
  );
};

export default Counter;
