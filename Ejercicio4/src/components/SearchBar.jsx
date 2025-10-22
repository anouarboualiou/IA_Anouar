export default function SearchBar({ valorBusqueda, onBuscar }) {
  return (
    <input
      type="text"
      placeholder="Buscar usuario..."
      value={valorBusqueda}
      onChange={(e) => onBuscar(e.target.value)}
      style={{
        padding: '8px 12px',
        width: '100%',
        borderRadius: '8px',
        border: '1px solid #ccc',
        marginBottom: '16px',
      }}
    />
  );
}
