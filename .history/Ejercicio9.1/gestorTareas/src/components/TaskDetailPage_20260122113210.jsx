import { useParams, useNavigate } from 'react-router-dom';
import { tasks } from '../datos';

const TaskDetailPage = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const task = tasks.find(t => t.id === taskId);

  if (!task) return <p>Tarea no encontrada</p>;

  const handleDelete = () => {
    console.log('Tarea eliminada');
    navigate('/dashboard', { replace: true });
  };

  return (
    <>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Estado: {task.status}</p>
      <button onClick={handleDelete}>Borrar</button>
    </>
  );
};

export default TaskDetailPage;
