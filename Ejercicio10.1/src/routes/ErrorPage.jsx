import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Algo salió mal</h1>
      <p>{error.message || "Error desconocido"}</p>
    </div>
  );
}
