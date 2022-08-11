import React from 'react';

type TTarget = Document | HTMLElement | Window;
type TListenerOptions = boolean | AddEventListenerOptions;
type TOptions = {
  listenerOptions?: TListenerOptions;
  target?: TTarget;
};

const useEvent = <
  KD extends keyof DocumentEventMap,
  KH extends keyof HTMLElementEventMap,
  KW extends keyof WindowEventMap,
>(
  eventType: KD | KH | KW,
  listener: (
    this: TTarget,
    evt: DocumentEventMap[KD] | HTMLElementEventMap[KH] | WindowEventMap[KW],
  ) => void,
  options: TOptions = {},
) => {
  const {target = document, listenerOptions} = options;

  React.useEffect(() => {
    // @ts-ignore: bad typings
    target.addEventListener(eventType, listener, listenerOptions);

    return () => {
      // @ts-ignore: bad typings
      target.removeEventListener(eventType, listener, listenerOptions);
    };
  }, [target, eventType, listenerOptions, listener]);
};

export default useEvent;
