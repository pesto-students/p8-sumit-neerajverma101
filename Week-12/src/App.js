import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, { name: todo, status: "pending" }]);
      setTodo("");
    }
  };

  const deleteTodo = (task) => {
    const newTodos = todos.filter((todo) => {
      return todo.name !== task.name;
    });
    setTodos(newTodos);
  };

  const markComplete = (index) => {
    const newTodos = [...todos]
    newTodos[index].status = "done"
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo} markComplete={markComplete} />
    </div>
  );
};

export default App;
