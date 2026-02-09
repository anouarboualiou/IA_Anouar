import Link from "next/link";
import { getAllMovies } from "@/lib/cinema";

export default function MoviesPage() {
  const movies = getAllMovies();

  return (
    <section>
      <h1>Películas</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
