import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
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
    font-size: 18px;
}

h1 {
    font-weight:600;
    color: ${({ theme }) => theme.text};
}

h2 {
    font-weight:500;
    color: ${({ theme }) => theme.text};
}

p {
    font-weight:400;
    color: ${({ theme }) => theme.text};
}
`;

export default GlobalStyles;
