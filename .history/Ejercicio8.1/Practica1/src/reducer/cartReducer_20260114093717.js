
export const cartReducer = (state, action) => {
switch (action.type) {
case 'ADD_ITEM': {
const existing = state.find(i => i.id === action.payload.id);
if (existing) {
return state.map(i =>
i.id === action.payload.id
? { ...i, quantity: i.quantity + 1 }
: i
);
}
return [...state, { ...action.payload, quantity: 1 }];
}


case 'INCREMENT':
return state.map(i =>
i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
);


case 'DECREMENT':
return state
.map(i =>
i.id === action.payload ? { ...i, quantity: i.quantity - 1 } : i
)
.filter(i => i.quantity > 0);


case 'REMOVE':
return state.filter(i => i.id !== action.payload);


default:
return state;
}
};