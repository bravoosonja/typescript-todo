import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from '../styles/todos.module.css';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items.map((item) => (
                <TodoItem key= { item.id } text = { item.text } />
            ))
        }
        </ul>
    );
}

export default Todos;