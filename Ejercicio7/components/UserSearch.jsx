import React, { useState, useEffect } from 'react';


export default function UserSearch() {
const [term, setTerm] = useState('');
const [results, setResults] = useState([]);


useEffect(() => {
if (term.trim() === '') {
setResults([]);
return;
}


const delay = 500; // ms
const id = setTimeout(() => {

async function fetchUsers() {
try {
const res = await fetch(`https://jsonplaceholder.typicode.com/users?username=${encodeURIComponent(term)}`);
if (!res.ok) throw new Error('Error al buscar usuarios');
const data = await res.json();
setResults(data);
} catch (err) {
console.error(err);
setResults([]);
}
}
fetchUsers();
}, delay);


return () => clearTimeout(id);
}, [term]);


return (
<div>
<h2>Búsqueda de usuarios</h2>
<input value={term} onChange={e => setTerm(e.target.value)} placeholder="Escribe un username" />


<ul>
{results.length === 0 && term.trim() !== '' && <li>No se encontraron usuarios</li>}
{results.map(u => (
<li key={u.id}>{u.username} — {u.name}</li>
))}
</ul>
</div>
);
}