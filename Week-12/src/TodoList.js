const TodoList = ({ list, remove, markComplete }) => {
  return (
    <>
      {list?.length > 0 ? (
        <ul className="todo-list">
          {list.map((entry, index) => (
            <div className="todo">
              <li key={"todo-" + index}> {entry.name} </li>

              <button
                className={entry.status !== "done" ? "delete-button" : "delete-button disabled"}
                onClick={() => {
                  if (entry.status !== "done") {
                    markComplete(index);
                  }
                }}
              >
                {entry.status !== "done" ? "Complete" : "Completed"}
              </button>
              <button
                className="delete-button"
                onClick={() => {
                  remove(entry);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>Add a new task</p>
        </div>
      )}
    </>
  );
};

export default TodoList;
