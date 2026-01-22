import { Link, useParams } from "react-router-dom";
import { getPostById } from "../data/posts";

export function PostDetailPage(){


    const params = useParams()

    const postId = Number(params.postId)

    const post = getPostById(postId)

    if(!post){

        return (
            <>

            <h1>Articulo no encontrado</h1>
            <p>No se pudo encontrar el articulo con ID: {postId}.</p>
            <Link to="/posts">Volver a la lista de articulos</Link>
            
            </>
        )

    }

    return (

        <>
            <h1>Detalles de: {post.title}</h1>
            <p>ID: {postId}</p>
            <p>{post.content}</p>
            <Link to="/posts">Volver a la lista de articulos</Link>
        </>
    )

}