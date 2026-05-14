import { getCastByMovieId, getMovieById } from "@/lib/cinema";
import Link from "next/link";

export default async function MovieDetailPage({ params }) {

    const { movieId } = await params

    const movie = getMovieById(movieId)
    const cast = getCastByMovieId(movieId)

    return (

        <div className="container mt-5">
            <div className="row mb-5">
                <div className="col-md-4">
                    <img
                        src={movie.poster}
                        className="img-fluid rounded shadow"
                        alt={movie.title}
                    />
                </div>

                <div className="col-md-8">
                    <h1>{movie.title}</h1>
                    <p className="text-muted">{movie.year}</p>
                    <p><strong>Director:</strong> {movie.director}</p>
                    <p>{movie.synopsis}</p>
                </div>
            </div>

            <h2 className="mb-4">Reparto</h2>

            <div className="row g-3">
                {cast.map(actor => (
                    <div key={actor.id} className="col-md-3">
                        <Link href={`/actors/${actor.id}`} className="text-decoration-none text-dark">
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={actor.photo}
                                    className="card-img-top"
                                    alt={actor.name}
                                    style={{ height: '250px', objectFit: 'cover' }}
                                />

                                <div className="card-body text-center">
                                    <h6>{actor.name}</h6>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}