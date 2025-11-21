// PostComments.jsx
import React, { useState, useEffect } from 'react';


export default function PostComments({ postId }) {
const [comments, setComments] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);


useEffect(() => {
if (postId == null) return;


let cancelled = false;


async function fetchComments() {
setIsLoading(true);
setError(null);
try {
const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
if (!res.ok) throw new Error('Error en la petición');
const data = await res.json();
if (!cancelled) {
setComments(data);
setIsLoading(false);
}
} catch (err) {
if (!cancelled) {
setError(err.message || 'Error desconocido');
setIsLoading(false);
}
}
}


fetchComments();


return () => { cancelled = true; };
}, [postId]);


if (isLoading) return <div>Cargando comentarios…</div>;
if (error) return <div>Error: {error}</div>;


return (
<div>
<h4>Comentarios (post {postId})</h4>
<ul>
{comments.map(c => (
<li key={c.id}>
<strong>{c.name}</strong> ({c.email})
<p>{c.body}</p>
</li>
))}
</ul>
</div>
);
}