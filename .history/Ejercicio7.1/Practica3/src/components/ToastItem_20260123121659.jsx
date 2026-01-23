import { memo, useCallback } from "react";

const ToastItem = memo(function ToastItem({ error, clearError }) {
  console.log("Render ToastItem:", error.id);

  const handleClose = useCallback(() => {
    clearError(error.id);
  }, [clearError, error.id]);

  return (
    <div className="toast">
      <p>{error.message}</p>
      <button onClick={handleClose}>Cerrar</button>
    </div>
  );
});

export default ToastItem;
