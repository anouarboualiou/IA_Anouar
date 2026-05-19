"use client";

export default function SearchBar({
  search,
  setSearch,
}) {

  return (

    <input

      type="text"

      className="form-control"

      placeholder="
      Buscar:
      perro playa persona
      "

      value={search}

      onChange={(e) =>
        setSearch(e.target.value)
      }

    />

  );

}