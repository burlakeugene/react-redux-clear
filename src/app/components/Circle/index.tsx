import React from 'react';

type TProps = {
  start: string;
  duration: number;
};

const Circle = React.memo(({ start, duration }: TProps) => {
  const diff = (+new Date() - +new Date(start)) / 1000;
  const diffPercent = (diff * 100) / duration;
  let diffPx = (300 * diffPercent) / 100;
  const isEnd = diffPx >= 300;

  const [_, forceUpdate] = React.useState({});

  if(!isEnd){
    setTimeout(() => forceUpdate({}))
  }

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
        stroke="red"
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

{
  /* <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" style="transform: rotateX(180deg)">
  <circle transform="rotate(45 50 50)" r="47" cx="50" cy="50" stroke="#0f100f" stroke-width="3" stroke-linecap="round" stroke-dashoffset="0px" fill="transparent" stroke-dasharray="300px"></circle>
</svg>

<!--
const func = () => {
    const circle = document.querySelector('circle');
    const max = +circle.getAttribute('stroke-dasharray').replace('px', '');
    let current = +circle.getAttribute('stroke-dashoffset').replace('px', '');
    if(current < max){
        current++;
        circle.setAttribute('stroke-dashoffset', `${current}px`);
        setTimeout(func, 0);
    }
};

func();
--> */
}
