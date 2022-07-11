import { useState } from "react";
import styled from "styled-components";
// components
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";
// styles
import GlobalStyles from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";

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
          <BackgroundImage/>
          <NewTodo />
          <Todos />
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
  padding: 3rem;
`;

//doesn't work
const BackgroundImage = styled.div`
  background-image:url(${(props) => props.theme.backgroundImage});
  width:100%;
  height:30vh;
  
`;


const Container = styled.div``;



export default App;
