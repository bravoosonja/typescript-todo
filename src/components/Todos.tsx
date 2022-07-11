import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from '../styles/todos.module.css';

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    return (
        <ul>
            {todosCtx.items.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
                />
            ))
        }
        </ul>
    );
}

export default Todos;