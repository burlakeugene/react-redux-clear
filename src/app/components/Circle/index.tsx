import React from 'react';

type TProps = {
  start: string;
  duration: number;
};

const Circle = React.memo(({ start, duration }: TProps) => {
  const [_, forceUpdate] = React.useState({});
  const diff = (+new Date() - +new Date(start)) / 1000;
  const diffPercent = (diff * 100) / duration;
  const diffPx = (300 * diffPercent) / 100;

  if (diffPercent < 100) {
    setTimeout(() => forceUpdate({}));
  }

  const color = 'black';

  return (
    <svg
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: 'rotateX(180deg)',
      }}
    >
      <circle
        transform="rotate(45 50 50)"
        r="48"
        cx="50"
        cy="50"
        stroke={color}
        stroke-width="3"
        stroke-linecap="round"
        stroke-dashoffset={`${diffPx}px`}
        fill="transparent"
        stroke-dasharray="300px"
      ></circle>
    </svg>
  );
});

export default Circle;
