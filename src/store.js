import { createStore, applyMiddleware } from "redux";
import  rootReducer  from "./reducers/root-reducer";
import logger from 'redux-logger'
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";


const middlewares = [logger, thunk]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)
