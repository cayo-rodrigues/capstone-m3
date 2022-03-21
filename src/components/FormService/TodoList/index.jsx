const TodoList = ({ List, handleTodo }) => {
  return (
    <ul>
      {List.map((todo) => (
        <li key={todo}>
          {todo}
          <button onClick={() => handleTodo(todo)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
