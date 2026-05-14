import pool from "@/lib/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

async function actualizarReceta(formData) {
    "use server"

    const id = Number(formData.get("id"))
    const titulo = formData.get("titulo")
    const descripcion_corta = formData.get("descripcion_corta")
    const ingredientes = formData.get("ingredientes")
    const instrucciones = formData.get("instrucciones")
    const tiempo_coccion = formData.get("tiempo_coccion")

    const sql = `UPDATE recetas 
    SET titulo = ?, descripcion_corta = ?, ingredientes = ?, instrucciones = ?, tiempo_coccion = ?
    WHERE id = ?`

    await pool.query(sql, [titulo, descripcion_corta, ingredientes, instrucciones, tiempo_coccion, id])

    revalidatePath("/")
    revalidatePath(`/recetas/${id}`)

    redirect(`/recetas/${id}`)
}

export default async function EditarRecetaPage({ params }) {

    const paramId = await params

    const id = Number(paramId.id)

    const [recetas] = await pool.query(
        "SELECT * FROM recetas WHERE id = ?",
        [id]
    )

    const receta = recetas[0]

    if (!receta) {
        return <div>Receta no encontrada</div>;
    }

    return (
        <div className="container mt-4">
            <h1>Editar Receta</h1>

            <form action={actualizarReceta} className="card p-4 shadow">

                <input type="hidden" name="id" value={receta.id} />

                <div className="mb-3">
                    <input
                        name="titulo"
                        defaultValue={receta.titulo}
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <input
                        name="descripcion_corta"
                        defaultValue={receta.descripcion_corta}
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <textarea
                        name="ingredientes"
                        defaultValue={receta.ingredientes}
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <textarea
                        name="instrucciones"
                        defaultValue={receta.instrucciones}
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <input
                        name="tiempo_coccion"
                        type="number"
                        defaultValue={receta.tiempo_coccion}
                        className="form-control"
                    />
                </div>

                <button className="btn btn-warning">
                    Guardar cambios
                </button>
            </form>
        </div>
    )
}