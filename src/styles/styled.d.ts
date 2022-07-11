import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mobileWidth: string;
    desktopWidth: string;
    backgroundImage: string;

    colors: {
      text: string;
      hoverText: string;
      subText: string;
      background: string;
      formBackground: string;
      accent: string;
      gradient: string;
    };
  }
}
