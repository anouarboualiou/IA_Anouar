export default function SearchInput({ value, onChange }) {
  return (
    <input
      placeholder="Buscar por nombre o email"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}