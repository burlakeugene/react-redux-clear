import styled, { css } from 'styled-components';

type TCommon = {
  opened?: boolean;
};

type TDraggable = {
  draggable?: boolean;
};

export const Wrapper = styled.div<TCommon>`
  ${({ opened }: TCommon) => css`
    --swipe-color: #fff;
    --swipe-background: #000;
    --swipe-background-light: #999;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    ${opened &&
    css`
      opacity: 1;
      visibility: visible;
    `}
  `}
`;

type TInner = TCommon & TDraggable;

export const Inner = styled.div<TInner>`
  ${({ opened, draggable }: TInner) => css`
    transform: translateY(100%);
    transition: all 0.3s;
    border-radius: 16px 16px 0 0;
    background-color: var(--swipe-background);
    overflow: hidden;
    padding: 15px;
    max-height: 90%;
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${opened &&
    css`
      transform: translateY(0);
    `}
    ${draggable &&
    css`
      transition: none;
    `}
  `}
`;

type TDrag = TDraggable;

export const Drag = styled.div<TDrag>`
  ${({ draggable }: TInner) => css`
    position: relative;
    flex: 0 0 32px;
    margin-top: -15px;
    cursor: grab;
    touch-action: none;
    ${draggable &&
    css`
      cursor: grabbing;
    `}
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 2px;
      width: 32px;
      border-radius: 2px;
      background-color: var(--swipe-background-light);
    }
  `};
`;

export const Content = styled.div`
  overflow: auto;
  color: var(--swipe-color);
  flex: 1;
`;
