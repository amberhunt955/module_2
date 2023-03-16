import { useState, useEffect } from 'react';

import TodoList from './components/TodoList';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // get items from the local storage
    const savedTodos = localStorage.getItem("todos");
    // console.log(savedTodos);
    // console.log(JSON.parse(savedTodos));

    if (savedTodos && savedTodos !== undefined && savedTodos !== null) {
      // parse the savedTodos and set the savedTodo to the state
      setTodos(JSON.parse(savedTodos));
    }
  }, [])
  
  const addTodo = (e) => {
    // Checks if input is empty
    if (e.target.value === "") return;
    // Create a to-do object
    const newTodo = {
      text: e.target.value,
      id: Date.now(),
      completed: false
    }
    // store todos to local storage
    localStorage.setItem("todos", JSON.stringify([newTodo, ...todos]))
    // Add it to the todos array
    setTodos([...todos, newTodo]);
    // Reset the input
    e.target.value = "";
  }

  const completeTodo = (iid, e) => {
    // Create a new copy of todos
    const todosCopy = [...todos];
    // Find the todo that matches the id
    const indexOfTodo = todosCopy.findIndex(i => i.id === iid);
    // Update the current completed value to the opposite value
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed;
    // set the new data into the local storage
    localStorage.setItem("todos", JSON.stringify([...todosCopy]))
    setTodos([...todosCopy]);
  }

  const editTodoText = (iid, e) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex(i => i.id == iid);
    todosCopy[indexOfTodo].text = e.target.value;
    localStorage.setItem("todos", JSON.stringify([...todosCopy]));
    setTodos( [...todosCopy] );
    e.target.value = "";
  }

  const deleteTodo = (iid) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex(i => i.id = iid);
    todosCopy.splice(indexOfTodo, 1);
    localStorage.setItem("todos", JSON.stringify([...todosCopy]));
    setTodos( [...todosCopy] );
  }

  return (
    <div className="App">
      <h1>To-do App</h1>
      <TodoList 
      todos={todos} 
      addTodo={addTodo} 
      completeTodo={completeTodo}
      editTodoText={editTodoText}
      deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
