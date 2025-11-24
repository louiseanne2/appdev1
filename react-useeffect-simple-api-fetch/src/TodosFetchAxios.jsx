import { useState, useEffect } from "react";
import axios from "axios";

export default function TodosFetchAxios() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => {
        setTodos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading todos…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Todos (Axios)</h2>
      {todos.map((t) => (
        <div key={t.id}>
          <p>{t.title}</p>
          <p>Status: {t.completed ? "✅ Completed" : "❌ Not Completed"}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
