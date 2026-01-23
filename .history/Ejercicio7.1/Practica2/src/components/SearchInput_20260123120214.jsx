import { memo } from "react";

const SearchInput = memo(function SearchInput({ value, onChange }) {
  return (
    <input
      placeholder="Buscar por nombre o email"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
});

export default SearchInput;
