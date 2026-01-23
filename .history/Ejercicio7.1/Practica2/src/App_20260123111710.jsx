import { useState } from "react";
import UserList from "./UserList";
import { generateUsers } from "./users";

const users = generateUsers(10000);

export default function App() {
  const [search, setSearch] = useState("");

  // ❌ Filtro se ejecuta en cada render
  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Buscar usuario..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <UserList users={filtered} />
    </div>
  );
}
