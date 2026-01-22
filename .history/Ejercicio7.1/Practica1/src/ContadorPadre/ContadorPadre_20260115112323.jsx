import { useState } from "react";
import ListaIntermedia from "./ListaIntermedia/";

const generarUsuarios = () =>
  Array.from({ length: 500 }, (_, i) => ({
    id: i + 1,
    name: `Usuario ${i + 1}`,
    email: `usuario${i + 1}@mail.com`,
    avatar: `https://i.pravatar.cc/150?img=${(i + 1) % 70 + 1}`,
    isOnline: Math.random() > 0.5,
  }));

export default function ContadorPadre() {
  console.log("ContadorPadre render");

  const [count, setCount] = useState(0);
  const [users] = useState(generarUsuarios);

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>
        Incrementar contador ({count})
      </button>
      <ListaIntermedia users={users} />
    </>
  );
}
