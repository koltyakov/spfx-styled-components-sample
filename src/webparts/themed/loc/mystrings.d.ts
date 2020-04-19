declare interface IThemedWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'ThemedWebPartStrings' {
  const strings: IThemedWebPartStrings;
  export = strings;
}
