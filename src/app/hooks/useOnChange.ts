import React from 'react';

const useOnChange = (onChange: () => void, deps: any[]) => {
  const mountedRef = React.useRef(false);
  const onChangeRef = React.useRef(onChange);

  onChangeRef.current = onChange;

  React.useEffect(() => {
    if (mountedRef.current) {
      onChangeRef.current();
    }

    mountedRef.current = true;
  }, deps);
};

export default useOnChange;
