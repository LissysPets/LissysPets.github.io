import {createSelector} from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItem
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, cur) => acc + cur.quantity,0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartTotal => cartTotal.reduce((acc, cur) => acc + cur.price * cur.quantity,0)
)