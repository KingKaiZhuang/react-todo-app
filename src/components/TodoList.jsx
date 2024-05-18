import TodoItem from "./TodoItem";
import "../assets/scss/todolist.scss";
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos.slice().sort((a, b) => a.done - b.done);
  return (
    <div className="todo-list">
      {sortedTodos.map((todo) => {
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
