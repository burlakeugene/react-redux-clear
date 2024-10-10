import React, { PropsWithChildren } from 'react';
import styled, { css, keyframes } from 'styled-components';

const ANIMATION_TIME = 300;

const animation = (name) =>
  css`
    ${name} ${ANIMATION_TIME}ms
  `;

const numToArr = (number) => number.toString().split('');

type TProps = {} & PropsWithChildren;
const FlipNumber = React.memo<TProps>(({ children }) => {
  const [value, setValue] = React.useState(Number(children));
  const [nextValue, setNextValue] = React.useState(value);

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

  const fadeOut = keyframes`
    to {
      opacity: 0;
      visibility: hidden;
    }
  `;

  const fadeIn = keyframes`
    to {
      opacity: 1;
      visibility: visible;
    }
  `;

  const Current = styled.span``;

  const Item = styled.span`
    position: relative;
    display: inline-block;
    line-height: 1em;
    white-space: pre-wrap;
    &:before,
    &:after {
      display: block;
      position: absolute;
      top: 0;
      left: 50%;
      opacity: 0;
      visibility: hidden;
    }
    &:before {
      content: attr(data-next);
      transform: translateY(-100%) translateX(-50%);
    }
    &:after {
      content: attr(data-prev);
      transform: translateY(100%) translateX(-50%);
    }
    &[data-next] {
      animation: ${animation(down)};
      ${Current} {
        animation: ${animation(fadeOut)};
      }
      &:before {
        animation: ${animation(fadeIn)};
      }
    }
    &[data-prev] {
      animation: ${animation(up)};
      ${Current} {
        animation: ${animation(fadeOut)};
      }
      &:after {
        animation: ${animation(fadeIn)};
      }
    }
  `;

  const prepared = React.useMemo(() => {
    let valueArr = numToArr(value);
    let nextValueArr = numToArr(nextValue);
    const diff = nextValueArr.length - valueArr.length;

    if (diff > 0) {
      valueArr = [...new Array(diff).fill(' '), ...valueArr];
    }

    if (diff < 0) {
      nextValueArr = [...new Array(Math.abs(diff)).fill(' '), ...nextValueArr];
    }

    return valueArr.map((current, index) => {
      const result = {
        prev: null,
        current,
        next: null,
      };

      if (value > nextValue && current !== nextValueArr[index]) {
        result.prev = nextValueArr[index];
      }

      if (nextValue > value && current !== nextValueArr[index]) {
        result.next = nextValueArr[index];
      }

      return result;
    });
  }, [value, nextValue]);

  return prepared.map((num, index) => {
    const props = {};

    if (num.prev) {
      props['data-prev'] = num.prev;
    }

    if (num.next) {
      props['data-next'] = num.next;
    }

    return (
      <Item {...props} key={index}>
        <Current>{num.current}</Current>
      </Item>
    );
  });
});

export default FlipNumber;
