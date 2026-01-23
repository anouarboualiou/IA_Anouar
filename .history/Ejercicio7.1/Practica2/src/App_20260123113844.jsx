import { useState } from "react";
import SearchInput from "./SearchInput";
import UserList from "./components/UserList";
import { generateUsers } from "./u";

const users = generateUsers(10000);

export default function App() {
  const [search, setSearch] = useState("");

  // ❌ Filtro caro ejecutado en cada render
  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchInput value={search} onChange={setSearch} />
      <UserList users={filtered} />
    </div>
  );
}
