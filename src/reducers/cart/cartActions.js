import { SHOW_CART, ADD_TO_CART, CLEAR_ITEM_FROM_CART, REMOVE_FROM_CART } from "./cartConstants";

export const showCart = () => ({
    type : SHOW_CART,
})

export const addToCart = (item) => ({
    type : ADD_TO_CART,
    payload : item
})

export const removeFromCart = (item) => ({
    type : REMOVE_FROM_CART,
    payload : item
})
export const clearItem = (item) => ({
    type : CLEAR_ITEM_FROM_CART,
    payload : item
}) 