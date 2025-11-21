import React, { useState, useCallback, useEffect } from 'react';


export default function NewPostForm() {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [createdPost, setCreatedPost] = useState(null);


const addPost = useCallback(async () => {
const payload = { title, body, userId: 1 };
try {
const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(payload),
});
if (!res.ok) throw new Error('Error al crear post');
const data = await res.json();
setCreatedPost(data);
return data;
} catch (err) {
console.error(err);
throw err;
}
}, [title, body]); 


useEffect(() => {

if (!createdPost) return;
console.log('Post creado:', createdPost);

}, [createdPost]);


async function handleSubmit(e) {
e.preventDefault();
try {
await addPost();

setTitle('');
setBody('');
} catch (err) {

}
}


return (
<form onSubmit={handleSubmit}>
<label>
Título
<input value={title} onChange={e => setTitle(e.target.value)} />
</label>
<label>
Cuerpo
<textarea value={body} onChange={e => setBody(e.target.value)} />
</label>
<button type="submit">Crear post</button>


{createdPost && (
<div>
<h4>Post creado (respuesta API):</h4>
<pre>{JSON.stringify(createdPost, null, 2)}</pre>
</div>
)}
</form>
);
}