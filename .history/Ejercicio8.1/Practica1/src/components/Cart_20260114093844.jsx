
import React from 'react';
import CartItem from './CartItem';


function Cart({ cart, total, onIncrement, onDecrement, onRemove }) {
return (
<section>
<h2>Carrito</h2>


{cart.length === 0 && <p>El carrito está vacío</p>}


{cart.map(item => (
<CartItem
key={item.id}
item={item}
onIncrement={onIncrement}
onDecrement={onDecrement}
onRemove={onRemove}
/>
))}


<h3>Total: {total} €</h3>
</section>
);
}


export default React.memo(Cart);