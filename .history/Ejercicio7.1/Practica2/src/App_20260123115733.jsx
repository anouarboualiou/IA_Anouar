import { useState } from "react";
import SearchInput from "./components/SearchInput";
import UserList from "./components/UserList";

const generarUsuarios = (cantidad = 10000) =>
  Array.from({ length: cantidad }, (_, i) => ({
    id: i + 1,
    name: `Usuario ${i + 1} Nombre${i}`,
    email: `usuario${i + 1}@ejemplo.com`,
    avatar: `https://i.pravatar.cc/150?img=${(i + 1) % 70 + 1}`,
    isOnline: Math.random() > 0.5,
  }));

const USERS = generarUsuarios();

export default function App() {
  const [search, setSearch] = useState("");

  // ❌ FILTRO CARO SIN MEMO
  const filteredUsers = USERS.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchInput value={search} onChange={setSearch} />
      <p>{filteredUsers.length} usuarios encontrados</p>
      <UserList users={filteredUsers} />
    </div>
  );
}