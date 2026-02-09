import Link from "next/link";
import { getActorById, getFilmographyByActorId } from "@/lib/cinema";

export default function ActorProfile({ params }) {
  const actor = getActorById(params.actorId);
  const movies = getFilmographyByActorId(params.actorId);

  return (
    <article>
      <h1>{actor.name}</h1>
      <p><strong>Nacimiento:</strong> {actor.birthYear}</p>
      <p>{actor.bio}</p>

      <h2>Filmografía</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
