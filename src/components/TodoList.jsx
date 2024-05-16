import TodoItem from "./TodoItem";
import "../assets/scss/todolist.scss";
export default function TodoList({ todos, setTodos }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return (
          <TodoItem
            todos={todos}
            settodos={setTodos}
            item={todo}
            key={todo.name}
          />
        );
      })}
    </div>
  );
}
