const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props
) => {
  return <p onClick={props.onRemoveTodo}>{props.text}</p>;
};

export default TodoItem;
