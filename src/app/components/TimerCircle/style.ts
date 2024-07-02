import styled, { css } from 'styled-components';

type TSvg = {
  percentage?: number;
};

export const Svg = styled.svg<TSvg>`
  ${({ percentage = 0}) => css`
    transition: all 0.6s;
    opacity: 0;
    transform: scale(0);
    ${percentage > 1 &&
    css`
      opacity: 1;
      transform: scale(1);
    `}
    ${percentage > 99 &&
    css`
      opacity: 0;
    `}
  `}
`;
