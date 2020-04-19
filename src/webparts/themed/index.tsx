import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme, ThemeProvider, ThemeChangedEventArgs } from '@microsoft/sp-component-base';

import { Component } from './components/Component';

export default class ThemedWebPart extends BaseClientSideWebPart<{}> {

  private themeProvider: ThemeProvider;
  private themeVariant: IReadonlyTheme | undefined;

  protected onInit(): Promise<void> {
    this.themeProvider = this.context.serviceScope.consume(ThemeProvider.serviceKey);
    this.themeVariant = this.themeProvider.tryGetTheme();
    this.themeProvider.themeChangedEvent.add(this, this.handleThemeChangedEvent);
    return super.onInit();
  }

  public render(): void {
    ReactDom.render(<Component theme={this.themeVariant} />, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  private handleThemeChangedEvent(args: ThemeChangedEventArgs) {
    this.themeVariant = args.theme;
    this.render();
  }

}
