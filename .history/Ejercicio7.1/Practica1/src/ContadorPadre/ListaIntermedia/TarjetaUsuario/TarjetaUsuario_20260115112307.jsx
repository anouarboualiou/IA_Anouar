import Avatar from "./Avatar/Avatar";

export default function TarjetaUsuario({ user }) {
  console.log("TarjetaUsuario render", user.id);

  return (
    <div style={{ border: "1px solid #ccc", margin: 4, padding: 4 }}>
      <p>{user.id} - {user.name}</p>
      <p>{user.email}</p>
      <Avatar avatar={user.avatar} isOnline={user.isOnline} />
    </div>
  );
}
