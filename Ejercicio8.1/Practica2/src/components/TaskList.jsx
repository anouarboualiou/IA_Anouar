import { useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useTasks } from "../contexts/TasksContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { currentUser } = useAuth();
  const { tasks, dispatch } = useTasks();

  const isGuest = currentUser.name === "Invitado";

  const toggleTask = useCallback(
    (id) => dispatch({ type: "TOGGLE", id }),
    [dispatch]
  );

  const deleteTask = useCallback(
    (id) => dispatch({ type: "DELETE", id }),
    [dispatch]
  );

  return (
    <ul>
      {tasks.map((task) => {
        const canEdit = task.author === currentUser.name;

        return (
          <TaskItem
            key={task.id}
            task={task}
            canEdit={canEdit}
            isGuest={isGuest}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        );
      })}
    </ul>
  );
}
