import * as React from 'react';

import { Styles } from './Styles';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

export interface IComponentProps {
  theme: IReadonlyTheme;
}

export const Component = (props: IComponentProps) => {
  const theme = props.theme || (window as any).__themeState__.theme;

  return (
    <Styles theme={theme}>
      <div className='themePrimary-background'>
        Hello themed styled components
      </div>
    </Styles>
  );
};