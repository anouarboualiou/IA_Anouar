import { useState } from "react";
import ToastContainer from "./components/ToastContainer";

let idCounter = 1;

export default function App() {
  const [errors, setErrors] = useState([]);

  const addError = () => {
    setErrors(prev => [
      ...prev,
      { id: idCounter++, message: "Error aleatorio " + idCounter }
    ]);
  };

  const clearError = (id) => {
    setErrors(prev => prev.filter(error => error.id !== id));
  };

  const clearAll = () => {
    setErrors([]);
  };

  return (
    <div>
      <button onClick={addError}>Agregar error</button>
      <button onClick={clearAll}>Limpiar todos</button>

      <ToastContainer
        errors={errors}
        clearError={clearError}
      />
    </div>
  );
}
