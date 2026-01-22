import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const USERS = [
  { name: "Ana" },
  { name: "Luis" },
  { name: "Invitado" },
];

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(USERS[0]);

  const login = (name) => {
    const user = USERS.find((u) => u.name === name);
    setCurrentUser(user);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, users: USERS }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
