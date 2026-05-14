import Link from "next/link"

export default function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Cinema Database</h1>

      <p className="lead mb-5">
        Explora películas y actores.
      </p>

      <div className="d-flex justify-content-center gap-3">
        <Link href="/movies" className="btn btn-dark btn-lg">
          Ver Películas
        </Link>

        <Link href="/actors" className="btn btn-outline-dark btn-lg">
          Ver Actores
        </Link>
      </div>
    </div>
  )
}
