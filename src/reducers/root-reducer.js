import {combineReducers} from 'redux'
import { userReducer } from './userReducer/userReducer';
import { cartReducer } from './cart/cartReducer';

export const rootReducer = combineReducers({
    user : userReducer,
    cart : cartReducer,
})