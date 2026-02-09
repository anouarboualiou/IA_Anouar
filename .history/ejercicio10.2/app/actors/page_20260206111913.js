import Link from "next/link";
import { getAllActors } from "@/lib/cinema";

export default function ActorsPage() {
  const actors = getAllActors();

  return (
    <section>
      <h1>Actores</h1>
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <Link href={`/actors/${actor.id}`}>
              {actor.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
