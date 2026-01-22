import { useAuth } from "../contexts/AuthContext";

export default function UserInfo() {
  const { currentUser } = useAuth();

  return (
    <div style={{ position: "absolute", top: 10, right: 10 }}>
      👤 Usuario: <strong>{currentUser.name}</strong>
    </div>
  );
}
