export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id //See if new item is already in the cart using the unique ID
    );
    //True/undefined
    if (existingCartItem) {
        return cartItems.map(cartItem => //Return new array
            cartItem.id === cartItemToAdd.id //If on the same item, increase the quantity, else return the exact item object
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    //If item does not exist, return same cart with quantity of 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};