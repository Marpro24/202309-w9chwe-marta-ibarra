import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      mainDarkColor: string;
      mainLightColor: string;
    };
    typography: {
      mainFontFamily: string;
    };
  }
}
