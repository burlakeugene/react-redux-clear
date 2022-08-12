import styled, { css } from 'styled-components';

const Colors = {
  Yellow: 'yellow',
  LightGreen: 'lime',
  White: 'white',
  Red: 'red',
};

export const Wrapper = styled.div``;

export const Item = styled.div`
  transition: height 0.3s;
  overflow: hidden;
`;

export const ItemInner = styled.div`
  padding: 1px 0;
`;

type TItemInner = {
  type: string;
};

export const ItemBackground = styled.div<TItemInner>`
  ${({ type }: TItemInner) => css`
    padding: 16px 22px;
    font-size: 14px;
    color: ${Colors.White};
    display: flex;
    align-items: center;
    gap: 16px;
    ${type === 'warning' &&
    css`
      background-color: ${Colors.Yellow};
    `}
    ${type === 'success' &&
    css`
      background-color: ${Colors.LightGreen};
    `}
    ${type === 'error' &&
    css`
      background-color: ${Colors.Red};
    `}
  `}
`;
