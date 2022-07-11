import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  mobileWidth: "375px",
  desktopWidth: "1440px",
  backgroundImage: "assets/images/bg-desktop-light.jpg",

  colors: {
    text: "hsl(236, 9%, 61%)",
    hoverText: "hsl(235, 19%, 35%)",
    subText: "hsl(233, 11%, 84%)",
    background: "hsl(236, 33%, 92%)",
    formBackground: "hsl(0, 0%, 98%)",
    accent: "hsl(220, 98%, 61%)",
    gradient: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
  },
};

export const darkTheme: DefaultTheme = {
  mobileWidth: "375px",
  desktopWidth: "1440px",
  backgroundImage: "assets/images/bg-desktop-dark.jpg",

  colors: {
    text: "hsl(236, 33%, 92%)",
    hoverText: "hsl(234, 39%, 85%)",
    subText: "hsl(234, 11%, 52%)",
    background: "hsl(235, 21%, 11%)",
    formBackground: "hsl(233, 14%, 35%)",
    accent: "hsl(220, 98%, 61%)",
    gradient: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
  },
};
