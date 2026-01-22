import { createContext, useContext, useReducer } from "react";

const TasksContext = createContext();

const initialTasks = [
  { id: 1, text: "Aprender Context", author: "Ana", completed: false },
  { id: 2, text: "Usar useReducer", author: "Luis", completed: false },
  { id: 3, text: "Optimizar renders", author: "Ana", completed: true },
];

function tasksReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return state.map((task) =>
        task.id === action.id
          ? { ...task, completed: !task.completed }
          : task
      );

    case "DELETE":
      return state.filter((task) => task.id !== action.id);

    default:
      return state;
  }
}

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}

export const useTasks = () => useContext(TasksContext);
