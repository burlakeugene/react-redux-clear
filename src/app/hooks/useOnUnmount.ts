import React from 'react';

const useOnUnmount = (onUnmount: () => void) => {
  const onUnmountRef = React.useRef(onUnmount);
  onUnmountRef.current = onUnmount;
  React.useEffect(
    () => () => {
      onUnmountRef.current();
    },
    [],
  );
};

export default useOnUnmount;
