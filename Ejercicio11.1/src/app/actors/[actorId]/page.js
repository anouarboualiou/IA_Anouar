import { getActorById, getFilmographyByActorId } from "@/lib/cinema";
import { M_PLUS_1 } from "next/font/google";
import Link from "next/link";

export default async function ActorDetailPage({ params }) {

    const { actorId } = await params

    const actor = getActorById(actorId)
    const filmografia = getFilmographyByActorId(actorId)

    return (
        <div className="container mt-5">
            <div className="row mb-5">
                <div className="col-md-4">
                    <img
                        src={actor.photo}
                        className="img-fluid rounded shadow"
                        alt={actor.name}
                    />
                </div>

                <div className="col-md-8">
                    <h1>{actor.name}</h1>
                    <p><strong>Nacimiento:</strong> {actor.birthYear}</p>
                    <p>{actor.bio}</p>
                </div>
            </div>

            <h2 className="mb-4">Filmografía</h2>

            <div className="row g-4">
                {filmografia.map(movie => (
                    <div key={movie.id} className="col-md-3">
                        <Link href={`/movies/${movie.id}`} className="text-decoration-none text-dark">
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={movie.poster}
                                    className="card-img-top"
                                    alt={movie.title}
                                    style={{ height: '320px', objectFit: 'cover' }}
                                />

                                <div className="card-body text-center">
                                    <h6>{movie.title}</h6>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}