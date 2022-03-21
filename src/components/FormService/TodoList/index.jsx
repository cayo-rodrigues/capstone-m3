const TodoList = ({ List, handleTodo }) => {
  return (
    <ul>
      {List.map((todo) => (
        <li key={todo}>
          {todo}
          <button onClick={() => handleTodo(todo)}>Concluir tarefa</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
