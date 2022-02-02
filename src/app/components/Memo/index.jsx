import React, { memo, useCallback, useState, useMemo } from 'react';

const Test = memo(({ index }) => {
  const func = useMemo(() => {
    return () => {
      console.log(index);
    };
  });
  const func2 = useCallback(() => {
    console.log(index);
  }, []);
  return (
    <div>
      ds{index}{' '}
      <button
        onClick={() => {
          func();
          func2();
        }}
      >
        2
      </button>
    </div>
  );
});

function index(props) {
  let [state, setState] = useState(0);
  return (
    <div>
      <Test index={state} />
      {state}
      <button
        onClick={() => {
          setState(++state);
        }}
      >
        1
      </button>
    </div>
  );
}

export default index;
