import React from 'react';

const useOnMount = (onMount: () => void) => {
  const onMountRef = React.useRef(onMount);
  onMountRef.current = onMount;
  React.useEffect(() => {
    onMountRef.current();
  }, []);
};

export default useOnMount;
