import { useState } from "react";
import styled from "styled-components";
// components
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";
// styles
import GlobalStyles from "./theme/globalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const updateTheme = () => {
    setTheme(lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <TodosContextProvider>
        <GlobalStyles />
        <Wrapper>
          <BackgroundImage />
          <Container>
            <NewTodo />
            <Todos />
          </Container>
        </Wrapper>
      </TodosContextProvider>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const BackgroundImage = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 375px) {
    background-image: url(${(props) => props.theme.mobileBg});
    width: 100vw;
    height: 200px;
  }

  @media (min-width: 1440px) {
    background-image: url(${(props) => props.theme.desktopBg});
    width: 100vw;
    height: 300px;
  }
`;

const Container = styled.div``;

export default App;
