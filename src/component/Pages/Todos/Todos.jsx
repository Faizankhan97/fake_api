import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="home">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="main">
      <div className="container">
        <h1 className="mb-4">Todos</h1>
        <div className="row">
          {todos.map((todo) => (
            <>
              <div className="col-md-3 mb-4">
                <div className="card" aria-hidden="true">
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>User Id:</b> {todo.id}
                    </h5>
                    <p className="card-text">{todo.title}</p>
                    <p>
                      <b>Status: </b>
                      <span className={todo.completed ? "completed" : "incompleted"}
                      >
                        {todo.completed ? "Completed" : "Incompleted"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
