import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import styled from "styled-components";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <Wrapper>
      <Content>
        <h1>TODO</h1>
        <StyledForm onSubmit={submitHandler}>
          <input
            type="text"
            id="text"
            ref={todoTextInputRef}
            placeholder="Add new todo"
          />
        </StyledForm>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  h1 {
    font-size: 2rem;
    letter-spacing: 1.3rem;
  }
`;

const StyledForm = styled.form`
  input {
    color: ;
  }
`;

export default NewTodo;
