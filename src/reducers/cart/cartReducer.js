import { SHOW_CART, ADD_TO_CART, CLEAR_ITEM_FROM_CART, REMOVE_FROM_CART } from "./cartConstants";
import { addItemToCart, removeItemFromCart } from "./cart.utils";
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}
export const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case SHOW_CART: 
        return {
            ...state,
            hidden : !state.hidden
        }
        case ADD_TO_CART: 
        return {
            ...state,
            cartItems : addItemToCart(state.cartItems, action.payload)
        }
        case CLEAR_ITEM_FROM_CART:
        return {
            ...state,
            cartItems : state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
        }
        case REMOVE_FROM_CART: 
        return {
            ...state,
            cartItems : removeItemFromCart(state.cartItems , action.payload)
        }
        default : 
        return state
    }
}