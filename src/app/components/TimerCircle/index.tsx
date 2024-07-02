import React from 'react';
import { getIntermediateColor } from './helpers';
import * as S from './style';

type TProps = {
  start: string;
  duration: number;
  colors?: string[];
  className?: string;
};

const DEFAULT_COLORS = ['#54DCA0', '#FFC043', '#FF6937'];

const Circle = React.memo(
  ({ className, start, duration, colors = DEFAULT_COLORS }: TProps) => {
    const [_, forceUpdate] = React.useState({});
    const seconds =
      (+new Date(new Date().toISOString()) - +new Date(start)) / 1000;
    const percentage = (seconds * 100) / duration;
    const px = (300 * percentage) / 100;

    if (percentage < 100) {
      setTimeout(() => forceUpdate({}));
    }

    const color = getIntermediateColor(colors, percentage);

    return (
      <S.Svg
        className={className}
        percentage={percentage}
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          style={{
            transform: 'rotateX(180deg) rotate(45deg)',
            transformOrigin: '50% 50%',
          }}
          r="46"
          cx="50"
          cy="50"
          stroke={color}
          stroke-width="4"
          stroke-linecap="round"
          stroke-dashoffset={`${px}px`}
          fill="transparent"
          stroke-dasharray="300px"
        ></circle>
      </S.Svg>
    );
  }
);

export default Circle;
