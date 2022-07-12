import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    desktopBg: string;
    mobileBg: string;

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
