import {
  useLoaderData,
  useFetcher,
  useSubmit,
  redirect,
} from "react-router-dom";
import {
  getProject,
  getTasksByProject,
  deleteProject,
  toggleTask,
  deleteTask,
} from "../utils/api";
import TaskList from "../components/TaskList";

export function loader({ params }) {
  return {
    project: getProject(params.projectId),
    tasks: getTasksByProject(params.projectId),
  };
}

export async function action({ request, params }) {
  const data = await request.formData();
  const intent = data.get("intent");

  if (intent === "delete-project") {
    deleteProject(params.projectId);
    return redirect("/projects");
  }

  if (intent === "toggle-task") {
    toggleTask(data.get("taskId"));
  }

  if (intent === "delete-task") {
    deleteTask(data.get("taskId"));
  }

  return null;
}

export default function ProjectDetailsPage() {
  const { project, tasks } = useLoaderData();
  const submit = useSubmit();
  const fetcher = useFetcher();

  return (
    <>
      <h2>{project.name}</h2>

      <TaskList
        tasks={tasks}
        onToggle={id =>
          fetcher.submit(
            { intent: "toggle-task", taskId: id },
            { method: "post" }
          )
        }
        onDelete={id =>
          submit(
            { intent: "delete-task", taskId: id },
            { method: "post" }
          )
        }
      />

      <button
        onClick={() =>
          submit(
            { intent: "delete-project" },
            { method: "post" }
          )
        }
      >
        Eliminar proyecto
      </button>
    </>
  );
}
