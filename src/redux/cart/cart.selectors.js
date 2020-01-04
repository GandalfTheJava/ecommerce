import { createSelector } from "reselect";


//RETURNS ON THE CART SECTION OF THE STATE
const selectCart = state => state.cart;

//select cartItems property of the state.cart
export const selectCartItems = createSelector(
    [selectCart], //INPUT SELECTOR: RETURNS STATE.CART
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)

)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
)