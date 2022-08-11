import React from 'react';

const noop = () => {};

import { useEvent, useOnChange, useOnMount, useOnUnmount } from 'hooks';

const inBrowser = typeof navigator !== 'undefined';

const unsupportedUserAgentsPattern =
  /Windows.*Chrome|Windows.*Firefox|Linux.*Chrome/;

const ping = ({ url, timeout }: { url: string; timeout: number }) => {
  return new Promise((resolve) => {
    const isOnline = () => resolve(true);
    const isOffline = () => resolve(false);

    const xhr = new XMLHttpRequest();

    xhr.onerror = isOffline;
    xhr.ontimeout = isOffline;
    xhr.onreadystatechange = () => {
      if (xhr.readyState === xhr.HEADERS_RECEIVED) {
        if (xhr.status) {
          isOnline();
        } else {
          isOffline();
        }
      }
    };

    xhr.open('HEAD', url);
    xhr.timeout = timeout;
    xhr.send();
  });
};

export type TProps = {
  onChange: (online: boolean) => void;
  pollingUrl?: string;
  render: (online: boolean) => React.ReactElement;
  innerRef?: React.RefObject<any>;
};

const defaultPollingConfig = {
  enabled: inBrowser && unsupportedUserAgentsPattern.test(navigator.userAgent),
  url: '/favicon.ico',
  timeout: 5000,
  interval: 5000,
};

const OfflineDetector = React.memo<TProps>(
  ({ onChange = noop, pollingUrl, render, innerRef }) => {
    const pollingConfig = React.useMemo(
      () => ({
        ...defaultPollingConfig,
        url: pollingUrl ?? defaultPollingConfig.url,
      }),
      [pollingUrl]
    );
    const [online, setOnline] = React.useState<boolean>(
      inBrowser && typeof navigator.onLine === 'boolean'
        ? navigator.onLine
        : true
    );
    const pollingId = React.useRef<NodeJS.Timer | undefined>(undefined);
    const goOnline = () => {
      setOnline(true);
    };
    const goOffline = () => {
      setOnline(false);
    };

    const check = () => {
      const { url, timeout } = pollingConfig;
      ping({ url, timeout }).then((isOnline) =>
        isOnline ? goOnline() : goOffline()
      );
    };

    const startPolling = () => {
      const { interval } = pollingConfig;
      pollingId.current = setInterval(check, interval);
    };

    const stopPolling = () => {
      if (pollingId.current) {
        clearInterval(pollingId.current);
      }
    };

    useOnMount(() => {
      if (pollingConfig.enabled) {
        startPolling();
      }
    });

    useOnUnmount(() => {
      if (pollingId.current) {
        stopPolling();
      }
    });

    useEvent('online', goOnline, { target: window });
    useEvent('offline', goOffline, { target: window });

    useOnChange(() => {
      onChange(online);
    }, [online]);

    React.useImperativeHandle(innerRef, () => ({
      check,
    }));

    return render(online);
  }
);

export default OfflineDetector;
