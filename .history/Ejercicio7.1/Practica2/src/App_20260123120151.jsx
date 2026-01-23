import { useState, useMemo } from "react";
import SearchInput from "./COMSearchInput";
import UserList from "./UserList";

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

  // ✅ useMemo SOLO PARA EL FILTRO CARO
  const filteredUsers = useMemo(() => {
    return USERS.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <SearchInput value={search} onChange={setSearch} />
      <p>{filteredUsers.length} usuarios encontrados</p>
      <UserList users={filteredUsers} />
    </div>
  );
}
