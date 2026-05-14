import pool from "@/lib/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import { revalidatePath } from "next/cache";


async function crearComentario(formData) {
  "use server";

  const receta_id = Number(formData.get("receta_id"));
  const autor = formData.get("autor");
  const texto = formData.get("texto");

  if (!autor || !texto) {
    throw new Error("Todos los campos son obligatorios");
  }

  await pool.query(
    `INSERT INTO comentarios (receta_id, autor, texto)
     VALUES (?, ?, ?)`,
    [receta_id, autor, texto]
  );

  
  revalidatePath(`/recetas/${receta_id}`);
}

async function borrarReceta(formData) {
    "use server"

    const id = Number(formData.get("id"));

    await pool.query("DELETE FROM recetas WHERE id = ?", [id]);

    redirect("/");
}

export default async function RecetaPage({ params }) {

    const { id } = await params

    const sql = `SELECT * FROM recetas WHERE id =?`

    const [recetas] = await pool.query(sql, [id])

    const receta = recetas[0]

    const sql2 = `SELECT * FROM comentarios WHERE receta_id = ? ORDER BY fecha_creacion DESC`

    const [comentarios] = await pool.query(sql2, [id])

    if (!receta) {
        return <div>Receta no encontrada</div>
    }

    return (
        <div className="container mt-4">
            <div className="card p-4 shadow">
                <h1>{receta.titulo}</h1>
                <p className="text-muted">{receta.descripcion_corta}</p>

                <h4>Ingredientes</h4>
                <p>{receta.ingredientes}</p>

                <h4>Instrucciones</h4>
                <p>{receta.instrucciones}</p>

                <p><strong>Tiempo:</strong> {receta.tiempo_coccion} min</p>
            </div>

            <div className="mt-4">
                <h3>Comentarios</h3>

                {comentarios.map((c) => (
                    <div key={c.id} className="card p-3 mb-2">
                        <strong>{c.autor}</strong>
                        <p className="mb-0">{c.texto}</p>
                    </div>
                ))}
            </div>

            <div className="mt-4">
                <h4>Añadir comentario</h4>

                <form action={crearComentario} className="card p-3 shadow-sm">

                    <input type="hidden" name="receta_id" value={receta.id} />

                    <div className="mb-2">
                        <input
                            name="autor"
                            className="form-control"
                            placeholder="Tu nombre"
                        />
                    </div>

                    <div className="mb-2">
                        <textarea
                            name="texto"
                            className="form-control"
                            placeholder="Escribe tu comentario..."
                        />
                    </div>

                    <button className="btn btn-primary">
                        Enviar comentario
                    </button>

                </form>
            </div>

            <div className="d-flex gap-2 mt-3">

                <Link
                    href={`/recetas/${receta.id}/editar`}
                    className="btn btn-warning"
                >
                    Editar
                </Link>

                <form action={borrarReceta}>
                    <input type="hidden" name="id" value={receta.id} />

                    <button className="btn btn-danger">
                        Borrar
                    </button>
                </form>

            </div>

        </div>


    )

}