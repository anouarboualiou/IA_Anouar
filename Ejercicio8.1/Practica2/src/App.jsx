import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { TasksProvider } from "./contexts/TasksContext";
import TaskList from "./components/TaskList";
import UserInfo from "./components/UserInfo";

function UserSelector() {
  const { users, login, currentUser } = useAuth();

  return (
    <select
      value={currentUser.name}
      onChange={(e) => login(e.target.value)}
    >
      {users.map((u) => (
        <option key={u.name} value={u.name}>
          {u.name}
        </option>
      ))}
    </select>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <UserInfo />
        <h1>Dashboard de Tareas</h1>
        <UserSelector />
        <TaskList />
      </TasksProvider>
    </AuthProvider>
  );
}
