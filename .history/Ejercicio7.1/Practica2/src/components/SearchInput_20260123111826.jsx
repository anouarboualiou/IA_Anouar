export default function SearchInput({ value, onChange }) {
  return (
    <input
      placeholder="Buscar usuario..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}
