import pool from "@/lib/db";
import Link from "next/link";

export default async function Home() {

  console.log("DB_NAME:", process.env.DB_NAME);

  const [recetas] = await pool.query("SELECT * FROM recetas")

  return (

    <div className="container mt-4">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Recetas</h1>

        <Link href="/recetas/nueva" className="btn btn-primary">
          + Nueva Receta
        </Link>
      </div>

      {/* GRID */}
      <div className="row">
        {recetas.map((receta) => (
          <div key={receta.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">

              <div className="card-body">
                <h5 className="card-title">{receta.titulo}</h5>

                <p className="card-text text-muted">
                  {receta.descripcion_corta}
                </p>
              </div>

              <div className="card-footer bg-transparent border-0">
                <Link
                  href={`/recetas/${receta.id}`}
                  className="btn btn-outline-primary w-100"
                >
                  Ver receta
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {recetas.length === 0 && (
        <p className="text-center mt-5 text-muted">
          No hay recetas aún 👀
        </p>
      )}
    </div>

  );
}
