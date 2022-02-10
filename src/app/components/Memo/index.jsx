import React, { memo, useCallback, useState, useMemo } from 'react';

const Test = memo(({ index }) => {
  const func = useMemo(() => {
    return index;
  }, []);
  const func2 = useCallback(() => {
    console.log(index);
  }, [index]);
  return (
    <div>
      ds{index}{' '}
      <button
        onClick={() => {
          func2();
        }}
      >
        2 {func}
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
