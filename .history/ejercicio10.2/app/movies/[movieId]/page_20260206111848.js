import Link from "next/link";
import { getMovieById, getCastByMovieId } from "@/lib/cinema";

export default function MovieDetail({ params }) {
  const movie = getMovieById(params.movieId);
  const cast = getCastByMovieId(params.movieId);

  return (
    <article>
      <h1>{movie.title}</h1>
      <p><strong>Año:</strong> {movie.year}</p>
      <p><strong>Director:</strong> {movie.director}</p>
      <p>{movie.synopsis}</p>

      <h2>Reparto</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <Link href={`/actors/${actor.id}`}>
              {actor.name} – {actor.character}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
