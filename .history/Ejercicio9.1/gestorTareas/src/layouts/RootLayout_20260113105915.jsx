import { Link, Outlet } from "react-router-dom"


export function RootLayout() {

    return (
        <>
            <main>

                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/dashboard">Panel de Tareas</Link></li>
                    </ul>
                </nav>

            </main>

            <Outlet/>

        </>
    )
}