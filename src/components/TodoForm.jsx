import { useState } from "react";
import "../assets/scss/todoform.scss";
export default function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function addTodo(e) {
    e.preventDefault(); // 防止表單提交的默認行為
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
    console.log([...todos, todo]); // 正確地打印最新的 todos
  }
  return (
    <>
      <div className="todo-banner">
        <h2 className="title">Todo List Project</h2>
      </div>
      <form className="todo-form" onSubmit={addTodo}>
        <input
          className="todo-input"
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          placeholder="Add a new todo..."
        />
        <button className="todo-add" type="submit">
          Add
        </button>
      </form>
    </>
  );
}
