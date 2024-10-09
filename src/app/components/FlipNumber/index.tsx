import React, { PropsWithChildren } from 'react';
import styled, { keyframes } from 'styled-components';

type TProps = {} & PropsWithChildren;
const FlipNumber = React.memo<TProps>(({ children }) => {
  const [value, setValue] = React.useState(Number(children));
  const [nextValue, setNextValue] = React.useState(value);

  const ANIMATION_TIME = 300;

  React.useEffect(() => {
    setNextValue(Number(children));
  }, [children]);

  React.useEffect(() => {
    setTimeout(() => {
      setValue(nextValue);
    }, ANIMATION_TIME);
  }, [nextValue]);

  const up = keyframes`
  to {
    transform: translateY(-100%);
  }
`;

  const down = keyframes`
  to {
    transform: translateY(100%);
  }
`;

  const opacityOn = keyframes`
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

  const opacityOff = keyframes`
  to {
    opacity: 1;
    visibility: visible;
  }
`;

  const Num = styled.span`
    position: relative;
    display: inline-block;
    &,
    &:before,
    &:after,
    span {
      line-height: 1em;
    }
    &:before,
    &:after {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      opacity: 0;
      visibility: hidden;
    }
    &:before {
      content: attr(data-next);
      transform: translateY(-100%);
    }
    &:after {
      content: attr(data-prev);
      transform: translateY(100%);
    }
    &[data-next],
    &[data-prev] {
      span {
        animation: ${opacityOn} ${ANIMATION_TIME / 1000}s linear;
      }
    }
    &[data-next] {
      animation: ${down} ${ANIMATION_TIME / 1000}s linear;
      &:before {
        animation: ${opacityOff} ${ANIMATION_TIME / 1000}s linear;
      }
    }
    &[data-prev] {
      animation: ${up} ${ANIMATION_TIME / 1000}s linear;
      &:after {
        animation: ${opacityOff} ${ANIMATION_TIME / 1000}s linear;
      }
    }
  `;

  const numToArr = (number) => {
    let array = number.toString().split('');
    if (array[0] === '-') {
      array[0] = null;
      array[1] = array[1] * -1;

      array = array.filter(Boolean);
    }

    return array;
  };

  return (
    <>
      {numToArr(value).map((part, index) => {
        const number = Number(part);
        const nextNumber = Number(numToArr(nextValue)[index]);
        const props = {};

        if (
          (nextNumber || nextNumber === 0) &&
          nextValue > value &&
          nextNumber !== number
        ) {
          props['data-next'] = nextNumber;
        }

        if (
          (nextNumber || nextNumber === 0) &&
          value > nextValue &&
          nextNumber !== number
        ) {
          props['data-prev'] = nextNumber;
        }

        return (
          <Num {...props}>
            <span>{number}</span>
          </Num>
        );
      })}
    </>
  );
});

export default FlipNumber;
