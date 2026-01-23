import { useState } from "react";
import SearchInput from "./components/SearchInput";
import UserList from "./components/UserList";

const generarUsuarios = (cantidad = 500) =>
  Array.from({ length: cantidad }, (_, i) => ({
    id: i + 1,
    name: `Usuario ${i + 1}`,
    email: `usuario${i + 1}@mail.com`,
    avatar: `https://i.pravatar.cc/150?img=${(i + 1) % 70 + 1}`,
    isOnline: Math.random() > 0.5,
  }));

const USERS = generarUsuarios(10000);

export default function App() {
  const [search, setSearch] = useState("");

  // ❌ Filtro caro SIN memo
  const filteredUsers = USERS.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchInput value={search} onChange={setSearch} />
      <UserList users={filteredUsers} />
    </div>
  );
}
