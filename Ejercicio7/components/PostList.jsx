import React, { useState, useEffect } from 'react';


export default function PostList() {
const [posts, setPosts] = useState([]);


useEffect(() => {

async function fetchPosts() {
try {
const res = await fetch('https://jsonplaceholdecdr.typicode.com/posts');
if (!res.ok) throw new Error('Error al obtener posts');
const data = await res.json();
setPosts(data);
} catch (err) {
console.error(err);
}
}


fetchPosts();
}, []); 


return (
<div>
<h2>Lista de Posts</h2>
<ul>
{posts.map(post => (
<li key={post.id}>{post.title}</li>
))}
</ul>
</div>
);
}