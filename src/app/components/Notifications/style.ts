import styled, {css} from 'styled-components';

import {Colors} from 'src/styles/variables/Colors';

export const Wrapper = styled.div``;

export const Item = styled.div`
  transition: height 0.3s;
  overflow: hidden;
`;
export const ItemInner = styled.div<{
  type: string;
}>`
  ${({type}) => css`
    padding: 16px 22px;
    font-size: 14px;
    color: ${Colors.White};
    ${type === 'warning' &&
    css`
      background-color: ${Colors.Yellow};
    `}
    ${type === 'success' &&
    css`
      background-color: ${Colors.LightGreen};
    `}
  `}
`;
