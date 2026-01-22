import React from "react";

const TaskItem = React.memo(function TaskItem({
  task,
  canEdit,
  isGuest,
  onToggle,
  onDelete,
}) {
  return (
    <li
      style={{
        opacity: !canEdit && !isGuest ? 0.5 : 1,
        textDecoration: task.completed ? "line-through" : "none",
      }}
    >
      {task.text} — <em>{task.author}</em>

      {!isGuest && canEdit && (
        <>
          <button onClick={() => onToggle(task.id)}>✔</button>
          <button onClick={() => onDelete(task.id)}>🗑</button>
        </>
      )}
    </li>
  );
});

export default TaskItem;
