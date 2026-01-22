import TarjetaUsuario from "./TarjetaUsuario";

export default function ListaIntermedia({ users }) {
  console.log("ListaIntermedia render");

  return (
    <div>
      {users.map(user => (
        <TarjetaUsuario key={user.id} user={user} />
      ))}
    </div>
  );
}
