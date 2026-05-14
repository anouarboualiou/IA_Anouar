import {
  Form,
  useActionData,
  redirect,
  useParams,
} from "react-router-dom";
import { addTask } from "../utils/api";

/* ========= ACTION ========= */
export async function action({ request, params }) {
  const data = await request.formData();
  const title = data.get("title");

  if (!title || title.trim() === "") {
    return { error: "El título es obligatorio" };
  }

  addTask(params.projectId, title);

  return redirect(`/projects/${params.projectId}`);
}

/* ======= COMPONENT ======= */
export default function NewTaskPage() {
  const error = useActionData();
  const { projectId } = useParams();

  return (
    <Form method="post">
      <h2>Nueva tarea</h2>

      <input
        type="text"
        name="title"
        placeholder="Título de la tarea"
      />

      {error && <p>{error.error}</p>}

      <button>Añadir tarea</button>
    </Form>
  );
}
