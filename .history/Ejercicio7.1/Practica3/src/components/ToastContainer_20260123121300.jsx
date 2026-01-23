import ToastItem from "./ToastItem";

export default function ToastContainer({ errors, clearError }) {
  return (
    <div className="toast-container">
      {errors.map(error => (
        <ToastItem
          key={error.id}
          error={error}
          onClose={() => clearError(error.id)} // ❌ FUNCIÓN INLINE
        />
      ))}
    </div>
  );
}
