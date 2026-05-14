import { getAllMovies } from "@/lib/cinema";
import Link from "next/link";


export default function MoviesPage() {

    const movies = getAllMovies()

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Movies</h1>

            <div className="row g-4">
                {movies.map(movie => (
                    <div key={movie.id} className="col-md-4">
                        <Link href={`/movies/${movie.id}`} className="text-decoration-none text-dark">
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={movie.poster}
                                    className="card-img-top"
                                    alt={movie.title}
                                    style={{ height: '450px', objectFit: 'cover' }}
                                />

                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text text-muted">{movie.year}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}