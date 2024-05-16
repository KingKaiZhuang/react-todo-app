import "../assets/scss/footer.scss";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <footer className="footer">
      <p className="completed-todos">Completed todos: {completedTodos}</p>
      <p className="total-todos">Total todos: {totalTodos}</p>
    </footer>
  );
}
