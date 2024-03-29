import { useState, useRef} from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4} from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const handleAssTodo = (e) => {
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, {id:uuidv4(), name:name, complited:false}];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id)
    todo.complited = !todo.complited;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.complited);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAssTodo}>タスク追加</button>
      <button onClick={handleClear}> 完了タスク削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.complited).length}</div>
    </>
  );
}

export default App;