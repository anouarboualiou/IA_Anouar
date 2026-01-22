import { NavLink } from "react-router-dom";


export function NavBar(){

    return (
        <nav>

            <ul>
                <li>
                    <NavLink to="/">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/posts">Articulos</NavLink>
                </li>

            </ul>


        </nav>
    )
}