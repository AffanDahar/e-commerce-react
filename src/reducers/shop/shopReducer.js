import { FETCH_COLLECTION_REQUEST, FETCH_COLLECTION_SUCCESS, FETCH_COLLECTION_FAILURE } from "./shopConstants";


const INITIAL_STATE = {
    collections : null,
    isFetching : false
}


const shopReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
         case FETCH_COLLECTION_REQUEST : 
         return {
             ...state,
             isFetching : true
         }
        case FETCH_COLLECTION_SUCCESS: 
        return {
            ...state ,
            collections : action.payload,
            isFetching: false
        }
        case FETCH_COLLECTION_FAILURE: 
        return {
            ...state ,
            error : action.payload ,
            isFetching: false
        }
        default : 
        return state 
    }
}

export default shopReducer