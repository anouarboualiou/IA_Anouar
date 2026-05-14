import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>Gestor de Proyectos</h1>
      <Link to="/projects">Ver proyectos</Link>
    </>
  );
}
