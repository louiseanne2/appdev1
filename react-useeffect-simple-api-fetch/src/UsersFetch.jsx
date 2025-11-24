import { useState, useEffect } from "react";

export default function UsersFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network error");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Users (Simple Fetch)</h2>
      {users.map((u) => (
        <div key={u.id}>
          <p><strong>{u.name}</strong></p>
          <p>{u.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
