import React from 'react';


function ProductList({ products, onAdd }) {
return (
<section>
<h1>Productos</h1>
{products.map(product => (
<div key={product.id}>
<span>{product.name} – {product.price} €</span>
<button onClick={() => onAdd(product)}>Añadir al carrito</button>
</div>
))}
</section>
);
}


export default React.memo(ProductList);