
export const tasks = [
  {
    id: 1,
    title: "Aprender React",
    description: "Estudiar los conceptos básicos de React y JSX",
    status: "pending",
  },
  {
    id: 2,
    title: "Crear proyecto",
    description: "Inicializar un proyecto usando Vite o Create React App",
    status: "completed",
  },
  {
    id: 3,
    title: "Configurar React Router",
    description: "Añadir navegación entre páginas",
    status: "pending",
  },
  {
    id: 4,
    title: "Diseñar componentes",
    description: "Crear componentes reutilizables para la app",
    status: "pending",
  },
];


export function getTaskById(id){

    return tasks.find((task) => task.id === id)
}