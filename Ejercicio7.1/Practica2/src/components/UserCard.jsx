import { memo } from "react";

const UserCard = memo(function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <div>
        <strong>{user.name}</strong>
        <p>{user.email}</p>
        <span className={user.isOnline ? "online" : "offline"}>
          {user.isOnline ? "● Online" : "● Offline"}
        </span>
      </div>
    </div>
  );
});

export default UserCard;
