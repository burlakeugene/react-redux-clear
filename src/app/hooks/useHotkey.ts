import React from 'react';

import useEvent from './useEvent';

const useHotkey = (key: string, callback: TFunction, type = 'keyup') => {
  const handleKeyUp = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === key || event.code === key) {
        callback(event);
      }
    },
    [callback, key],
  );

  //@ts-expect-error: types
  useEvent(type, handleKeyUp);
};

export default useHotkey;
