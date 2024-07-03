import React from 'react';

import {getIntermediateColor} from './helpers';

type TProps = {
  start?: string;
  duration?: number;
  colors?: string[];
  className?: string;
  children?: (arg?: {percentage?: number; color?: string}) => React.ReactNode;
};

const DEFAULT_COLORS = ['#54DCA0', '#FFC043', '#FF6937'];

const TimerCircle = React.memo(
  ({className, start, duration, colors = DEFAULT_COLORS, children}: TProps) => {
    const [_, forceUpdate] = React.useState({});

    if (!start || !duration) {
      return <>{children?.()}</>;
    }

    const seconds = (+new Date(new Date().toISOString()) - +new Date(start)) / 1000;
    const percentage = (seconds * 100) / duration;
    const px = 300 * percentage / 100;

    if (percentage < 100) {
      setTimeout(() => forceUpdate({}));
    }

    const color = getIntermediateColor(colors, percentage);

    return (
      <>
        <svg
          className={className}
          viewBox="0 0 100 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            r="46"
            cx="50"
            cy="50"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDashoffset={`${px}px`}
            fill="transparent"
            strokeDasharray="300px"
          ></circle>
        </svg>
        {children?.({color, percentage})}
      </>
    );
  },
);

export default TimerCircle;
