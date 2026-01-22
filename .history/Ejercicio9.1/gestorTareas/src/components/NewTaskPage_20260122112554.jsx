import { useNavigate } from 'react-router-dom';

const NewTaskPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular guardado
    console.log('Tarea guardada');
    navigate('/dashboard');
  };

  return (
    <>
      <h2>Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Título" />
        <br />
        <textarea placeholder="Descripción" />
        <br />
        <button type="submit">Guardar</button>
      </form>
    </>
  );
};

export default NewTaskPage;
