import { Outlet, Link } from "react-router-dom";

export function DashboardLayout(){

    return (
        <>

            <main>

                <nav>
                    <ul>
                        <li><Link to="/dashboard">Ver tareas</Link></li>
                        <li><Link to="/dashboard/new">Añadir Tarea</Link></li>
                    </ul>
                </nav>

            </main>
            <Outlet/>
        </>
    )
}