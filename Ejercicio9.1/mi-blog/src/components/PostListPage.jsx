import { Link } from "react-router-dom";
import { POSTS } from "../data/posts";

export function PostListPage(){

    return (

        <div>
            <h1>Articulos</h1>
            <p>Haz clic en un articulo para ver su contenido:</p>
            <ul>

                {
                POSTS.map(post=> {

                    return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>

                    })
                }

            </ul>
            <Link to="/">Volver al inicio</Link>
        </div>
    )
}