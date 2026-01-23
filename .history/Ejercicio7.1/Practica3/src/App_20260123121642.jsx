import { useState } from "react";
import ToastContainer from "./components/ToastContainer";


let idCounter = 1;

export default function App() {
  const [errors, setErrors] = useState([]);

  const addError = useCallback(() => {
    setErrors(prev => [
      ...prev,
      { id: idCounter++, message: "Error aleatorio " + idCounter }
    ]);
  }, []);

  const clearError = useCallback((id) => {
    setErrors(prev => prev.filter(error => error.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setErrors([]);
  }, []);

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
