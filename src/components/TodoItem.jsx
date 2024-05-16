import "../assets/scss/todoitem.scss";
export default function TodoItem({ item, todos, settodos }) {
  function deleteItem(item) {
    console.log("delete item", item);
    settodos(todos.filter((todo) => todo !== item));
  }
  return (
    <div className="item">
      <h3 className="item-name">{item.name}</h3>
      <button onClick={() => deleteItem(item)} className="item-delete">
        X
      </button>
    </div>
  );
}
