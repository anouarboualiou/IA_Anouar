
import React from 'react';


function CartItem({ item, onIncrement, onDecrement, onRemove }) {
return (
<div>
<span>{item.name} – {item.quantity} x {item.price} €</span>
<button onClick={() => onIncrement(item.id)}>+</button>
<button onClick={() => onDecrement(item.id)}>-</button>
<button onClick={() => onRemove(item.id)}>Eliminar</button>
</div>
);
}


export default React.memo(CartItem);