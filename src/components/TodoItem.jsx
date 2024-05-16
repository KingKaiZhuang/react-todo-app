import "../assets/scss/todoitem.scss"; // 使用常規導入

export default function TodoItem({ item, todos, settodos }) {
  function deleteItem(item) {
    console.log("delete item", item);
    settodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(item) {
    const newArra = todos.map((todo) => {
      return todo.name === item.name ? { ...todo, done: !todo.done } : todo;
    });
    settodos(newArra);
  }
  const className = item.done ? "completed" : ""; // 直接使用CSS類名
  return (
    <div className="item">
      <h3 onClick={() => handleClick(item)} className={className}>
        {item.name}
      </h3>
      <button onClick={() => deleteItem(item)} className="item-delete">
        X
      </button>
    </div>
  );
}
