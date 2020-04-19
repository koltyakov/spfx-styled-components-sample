## SPFx Themes and Styled Components (CSS in JS) sample

The sample shows the basic setup for consuming SPFx themes with [Styled Components](https://styled-components.com/).

Styled Components is a modern and extremely popular way of providing CSS in JS.

## Binding the styles using ThemeProvider

`ThemeProvider` allows tracking styles changes and getting current theme variants.

```typescript
private themeProvider: ThemeProvider;
private themeVariant: IReadonlyTheme | undefined;

// Binding theme provider within SPFx webpart
protected onInit(): Promise<void> {
  this.themeProvider = this.context.serviceScope.consume(ThemeProvider.serviceKey);
  this.themeVariant = this.themeProvider.tryGetTheme();
  this.themeProvider.themeChangedEvent.add(this, this.handleThemeChangedEvent);
  return super.onInit();
}

// Theme change handler event
private handleThemeChangedEvent(args: ThemeChangedEventArgs) {
  this.themeVariant = args.theme;
  this.render();
}
```

[Full code](./src/webparts/themed/index.tsx)

## Styled component

The basic way is to bypass theme variant down to styled component wrapper then using properties callbacks with consumption of corresponding theme properties.

```typescript
import styled from 'styled-components';

import { IReadonlyTheme } from '@microsoft/sp-component-base';

export const Styles = styled.div<{ theme: IReadonlyTheme; }>`
  .themePrimary-background {
    // ...
    background: ${({ theme }) => theme.palette.themePrimary || '#ccc'};
    color: ${({ theme }) => theme.palette.white || '#fff'};
  }
`;
```

[Full code](src/webparts/themed/components/Styles.ts)

## Debug

```bash
npm run start
```

Open SharePoint page and add query string parameter for debug (`?debug=true&noredir=true&debugManifestsFile=https://localhost:4321/temp/manifests.js`).

Add Themed web-part and apply code changes to see the effect.

Happy coding!