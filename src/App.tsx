import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';
import GlobalStyles from './styles/globalStyle';
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider>
    <TodosContextProvider >
      <GlobalStyles/>
      <NewTodo/>
      <Todos />
      </TodosContextProvider>
      </ThemeProvider>
  );
}

export default App;