import { getAllActors } from "@/lib/cinema";
import Link from "next/link";


export default function ActorsPage() {

    const actores = getAllActors()

    return (

        <div className="container mt-5">
            <h1 className="mb-4">Actors</h1>

            <div className="row g-4">
                {actores.map(actor => (
                    <div key={actor.id} className="col-md-3">
                        <Link
                            href={`/actors/${actor.id}`}
                            className="text-decoration-none text-dark"
                        >
                            <div className="card h-100 shadow-sm">

                                <img
                                    src={actor.photo}
                                    className="card-img-top"
                                    alt={actor.name}
                                    style={{ height: '350px', objectFit: 'cover' }}
                                />

                                <div className="card-body text-center">
                                    <h5>{actor.name}</h5>
                                    <p className="text-muted mb-0">
                                        {actor.birthYear}
                                    </p>
                                </div>

                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    )
}