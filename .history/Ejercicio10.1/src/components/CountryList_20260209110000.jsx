import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function CountryList({ countries }) {
  const [filter, setFilter] = useState("");

  const filteredCountries = countries.filter((c) =>
    c.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Buscar país..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <ul>
        {filteredCountries.map((country) => (
          <li key={country.cca3}>
            <NavLink
              to={`/country/${country.name.common.toLowerCase()}`}
            >
              <img
                src={country.flags.svg}
                alt={country.name.common}
                width="20"
              />
              {country.name.common}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
