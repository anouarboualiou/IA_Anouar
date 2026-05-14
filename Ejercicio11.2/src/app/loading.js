export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-3">Cargando...</p>
      </div>
    </div>
  );
}