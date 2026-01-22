import { useReducer, useMemo, useCallback } from 'react';
import products from './data/products.json';
import { cartReducer } from './reducer/cartReducer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';


export default function App() {
const [cart, dispatch] = useReducer(cartReducer, []);


const addToCart = useCallback(
product => dispatch({ type: 'ADD_ITEM', payload: product }),
[]
);


const increment = useCallback(
id => dispatch({ type: 'INCREMENT', payload: id }),
[]
);


const decrement = useCallback(
id => dispatch({ type: 'DECREMENT', payload: id }),
[]
);


const remove = useCallback(
id => dispatch({ type: 'REMOVE', payload: id }),
[]
);


const total = useMemo(() =>
cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
[cart]
);


return (
<div>
<ProductList products={products} onAdd={addToCart} />
<Cart
cart={cart}
total={total}
onIncrement={increment}
onDecrement={decrement}
onRemove={remove}
/>
</div>
);
}