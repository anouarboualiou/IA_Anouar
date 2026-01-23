import { memo } from "react";
import ToastItem from "./ToastItem";

const ToastContainer = memo(function ToastContainer({ errors, clearError }) {
  return (
    <div className="toast-container">
      {errors.map(error => (
        <ToastItem
          key={error.id}
          error={error}
          clearError={clearError}
        />
      ))}
    </div>
  );
});

export default ToastContainer;
