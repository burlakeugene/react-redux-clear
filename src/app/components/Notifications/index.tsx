import React from 'react';

import events from '@edna/utils/events';

import ErrorIcon from 'src/icons/error.svg';
import SuccessIcon from 'src/icons/success.svg';
import WarningIcon from 'src/icons/warning.svg';

import * as S from './style';

const Icons = {
  warning: WarningIcon,
  error: ErrorIcon,
  success: SuccessIcon,
};

const transitionEndEventName = () => {
  const el = document.createElement('div');

  const transEndEventNames = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend',
  };

  for (let name in transEndEventNames) {
    if (el.style[name] !== undefined) {
      return transEndEventNames[name];
    }
  }
  return false;
};

type TNotification = {
  text: string;
  type: 'warning' | 'error' | 'success';
  uid?: any;
  state?: 'VISIBLED' | 'HIDDEN';
};

type TNotificationProps = {
  data: TNotification;
  onHide: TAnyFunction;
  onRemove: TAnyFunction;
};

const Notification = React.memo(({data, onHide, onRemove}: TNotificationProps) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const itemInnerRef = React.useRef<HTMLDivElement>(null);

  const onTransitionEnd = () => {
    // if(data.state === 'VISIBLED' && itemRef.current){
    //   itemRef.current.style.height = 'auto';
    // }
    if (data.state === 'HIDDEN') {
      onRemove(data);
    }
  };

  React.useLayoutEffect(() => {
    if (itemRef.current && itemInnerRef.current) {
      if (data.state === 'VISIBLED') {
        itemRef.current.style.height = itemInnerRef.current.clientHeight + 'px';
      }
      if (data.state === 'HIDDEN') {
        itemRef.current.style.height = '0px';
      }
      itemRef.current.addEventListener(transitionEndEventName(), onTransitionEnd);
    }
    return () => {
      if (itemRef.current) {
        itemRef.current.removeEventListener(transitionEndEventName(), onTransitionEnd);
      }
    };
  }, [data.state]);
  const Icon = Icons?.[data.type];
  return (
    <S.Item
      ref={itemRef}
      onClick={() => {
        onHide(data);
      }}
      style={{
        height: '0px',
      }}
    >
      <S.ItemInner type={data.type} ref={itemInnerRef}>
        {/* {Icon && <Icon />} */}
        {data.text}
      </S.ItemInner>
    </S.Item>
  );
});

const PUSH_NOTIFICATION = 'PUSH_NOTIFICATION';

const Notifications = React.memo(() => {
  const [notifications, setNotifications] = React.useState<TNotification[]>([]);

  const prepareNotification = (notification: TNotification): TNotification => ({
    ...notification,
    uid: +new Date(),
    state: 'VISIBLED',
  });

  const onPush = React.useCallback(
    (notification: TNotification) => {
      setNotifications([...notifications, prepareNotification(notification)]);
    },
    [notifications],
  );

  const onHide = React.useCallback(
    (notification: TNotification) => {
      const notificationIndex = notifications.findIndex(
        (current) => current.uid === notification.uid,
      );
      notifications[notificationIndex].state = 'HIDDEN';
      setNotifications([...notifications]);
    },
    [notifications],
  );

  const onRemove = React.useCallback(
    (notification: TNotification) => {
      setNotifications([...notifications.filter((current) => current.uid !== notification.uid)]);
    },
    [notifications],
  );

  React.useEffect(() => {
    events.on(PUSH_NOTIFICATION, onPush);
    return () => {
      events.off(PUSH_NOTIFICATION, onPush);
    };
  }, [onPush]);
  return (
    <S.Wrapper>
      {notifications.map((notification) => (
        <Notification
          key={notification.uid}
          data={notification}
          onHide={onHide}
          onRemove={onRemove}
        />
      ))}
    </S.Wrapper>
  );
});

export const showNotification = (notification: TNotification) => {
  events.trigger(PUSH_NOTIFICATION, notification);
};

export default Notifications;
