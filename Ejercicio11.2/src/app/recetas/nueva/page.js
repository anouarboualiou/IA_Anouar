import pool from "@/lib/db";
import { redirect } from "next/navigation";

async function crearReceta(formData) {

    "use server"

    const titulo = formData.get("titulo")
    const descripcion_corta = formData.get("descripcion_corta")
    const ingredientes = formData.get("ingredientes")
    const instrucciones = formData.get("instrucciones")
    const tiempo_coccion = formData.get("tiempo_coccion")

    if (!titulo || !descripcion_corta || !ingredientes || !instrucciones || !tiempo_coccion) {
        throw new Error("Todos los campos son obligatorios");
    }

    const sql = `INSERT INTO recetas 
    (titulo, descripcion_corta, ingredientes, instrucciones, tiempo_coccion) 
    VALUES (?, ?, ?, ?, ?)`

    const [result] = await pool.query(sql, [titulo, descripcion_corta, ingredientes, instrucciones, tiempo_coccion])

    const nuevoId = result.insertId

    redirect(`/recetas/${nuevoId}`)

}


export default function NuevaRecetaPage() {

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Crear Nueva Receta</h1>

            <form action={crearReceta} className="card p-4 shadow">
                <div className="mb-3">
                    <input name="titulo" className="form-control" placeholder="Título" />
                </div>

                <div className="mb-3">
                    <input name="descripcion_corta" className="form-control" placeholder="Descripción corta" />
                </div>

                <div className="mb-3">
                    <textarea name="ingredientes" className="form-control" placeholder="Ingredientes" />
                </div>

                <div className="mb-3">
                    <textarea name="instrucciones" className="form-control" placeholder="Instrucciones" />
                </div>

                <div className="mb-3">
                    <input name="tiempo_coccion" type="number" className="form-control" placeholder="Tiempo (min)" />
                </div>

                <button className="btn btn-success">Crear receta</button>
            </form>
        </div>
    )


}

