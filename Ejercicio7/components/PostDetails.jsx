import React, { useState, useEffect } from 'react';


export function PostDetails({ postId }) {
const [post, setPost] = useState(null);


useEffect(() => {
if (postId == null) return;


let cancelled = false;


async function fetchPost() {
try {
const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
if (!res.ok) throw new Error('Error al obtener post');
const data = await res.json();
if (!cancelled) setPost(data);
} catch (err) {
console.error(err);
if (!cancelled) setPost(null);
}
}


fetchPost();

return () => { cancelled = true; };
}, [postId]); 


if (!post) return <div>Selecciona un post o espera...</div>;


return (
<div>
<h3>{post.title}</h3>
<p>{post.body}</p>
</div>
);
}

export function PostDetailsTester() {
const [id, setId] = useState(1);
return (
<div>
<label>
Post ID: <input type="number" value={id} onChange={e => setId(Number(e.target.value))} min="1" max="100" />
</label>
<PostDetails postId={id} />
</div>
);
}