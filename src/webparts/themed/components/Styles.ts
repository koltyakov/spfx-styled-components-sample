import styled from 'styled-components';

import { IReadonlyTheme } from '@microsoft/sp-component-base';

export const Styles = styled.div<{ theme: IReadonlyTheme; }>`
  .themePrimary-background {
    width: 100%;
    line-height: 100px;
    font-size: 2em;
    text-align: center;
    background: ${({ theme }) => theme.palette.themePrimary || '#ccc'};
    color: ${({ theme }) => theme.palette.white || '#fff'};
  }
`;
