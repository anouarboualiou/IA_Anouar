import {
  Form,
  useActionData,
  useNavigation,
  redirect,
} from "react-router-dom";
import { createProject } from "../utils/api";

export async function action({ request }) {
  const data = await request.formData();
  const name = data.get("name");

  if (!name || name.length < 5) {
    return { error: "Mínimo 5 caracteres" };
  }

  createProject(name);
  return redirect("/projects");
}

export default function NewProjectPage() {
  const error = useActionData();
  const nav = useNavigation();

  return (
    <Form method="post">
      <input name="name" />
      {error && <p>{error.error}</p>}
      <button disabled={nav.state === "submitting"}>
        Crear
      </button>
    </Form>
  );
}
