import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    font-family: 'Albert Sans', sans-serif;
    margin:0;
    padding:0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.background};
}

h1 {
    font-weight:600;
    color:${(props) => props.theme.colors.text};
}

h2 {
    font-weight:500;
    color:${(props) => props.theme.colors.text};
}

p {
    font-weight:400;
    color:${(props) => props.theme.colors.text};
    font-size: 18px;
}

span {
    color:${(props) => props.theme.colors.subText};
    font-size: 16px;
}
`;

export default GlobalStyle;
