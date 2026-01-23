export default function ToastItem({ error, onClose }) {
  console.log("Render ToastItem:", error.id);

  return (
    <div className="toast">
      <p>{error.message}</p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
}
