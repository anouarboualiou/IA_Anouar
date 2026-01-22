import { Link } from "react-router-dom";


export function HomePage (){

    return(
        <>

            <h1>Página de Inicio</h1>
            <p>
                ¡Bienvenido a la pagina de Anouar!
            </p>
            <p>
                Visita la <Link to="/posts">página de articulos</Link> 
            </p>
        </>
    )

    
}