import {
  useParams,
  useRouteLoaderData,
  Link,
} from "react-router-dom";

export default function CountryDetails() {
  const { countryName } = useParams();
  const countries = useRouteLoaderData("root");

  const country = countries.find(
    (c) => c.name.common.toLowerCase() === countryName
  );

  if (!country) {
    return <h2>País no encontrado</h2>;
  }

  const {
    name,
    capital,
    population,
    region,
    subregion,
    languages,
    borders,
  } = country;

  return (
    <div>
      <h1>{name.official}</h1>
      <p><strong>Capital:</strong> {capital?.[0]}</p>
      <p><strong>Población:</strong> {population.toLocaleString()}</p>
      <p><strong>Región:</strong> {region} – {subregion}</p>
      <p>
        <strong>Idiomas:</strong>{" "}
        {languages && Object.values(languages).join(", ")}
      </p>

      <h3>Países Fronterizos</h3>
      {borders ? (
        <ul>
          {borders.map((code) => {
            const borderCountry = countries.find(
              (c) => c.cca3 === code
            );

            return (
              <li key={code}>
                {borderCountry ? (
                  <Link
                    to={`/country/${borderCountry.name.common.toLowerCase()}`}
                  >
                    {borderCountry.name.common}
                  </Link>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No tiene fronteras</p>
      )}
    </div>
  );
}
