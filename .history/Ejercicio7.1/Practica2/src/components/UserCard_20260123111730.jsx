export default function UserCard({ user }) {
  return (
    <div className="card">
      <strong>{user.name}</strong>
    </div>
  );
}
