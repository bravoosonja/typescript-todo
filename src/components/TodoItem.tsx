import classes from "../styles/TodoItem.module.css";

const TodoItem: React.FC<{ text: string }> = (props) => {
    return <li>{props.text}</li>
 };

export default TodoItem;