import Todo from "./Todo";

function TodoList(props) {
  const {todos, addTodo, completeTodo, editTodoText, deleteTodo} = props;

  return (
    <>
      <h1>Create To-do</h1>
      <input type="text" placeholder="Create a to-do" onKeyDown={(e) => e.key === "Enter" && addTodo(e)} />

      {todos.length ? (
        <>
          <h1>To-Do Items</h1>
          <ul className="todolist">
            {todos
              .filter((i) => !i.completed)
              .map((todo) => {
                return <Todo 
                key={todo.id} 
                todo={todo} 
                completeTodo={completeTodo}
                editTodoText={editTodoText}
                deleteTodo={deleteTodo}
                />;
              })}
          </ul>
          <h1>Completed Items</h1>
          <ul className="todolist">
            {todos
              .filter((i) => i.completed)
              .map((todo) => {
                return <Todo 
                key={todo.id} 
                todo={todo} 
                completeTodo={completeTodo}
                editTodoText={editTodoText}
                deleteTodo={deleteTodo}
                />;
              })}
          </ul>
        </>
      ) : (
        <h1>No To-Dos Added Yet</h1>
      )}
    </>
  );
}

export default TodoList;
