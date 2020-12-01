import {
  FETCH_COLLECTION_REQUEST,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE
} from "./shopConstants";
import { firestore, convertCollectionsToMap } from "../../firebase-utils";

export const fetchCollectionRequest = () => ({
  type: FETCH_COLLECTION_REQUEST
});

export const fetchCollectionSuccess = collectionMap => ({
  type: FETCH_COLLECTION_SUCCESS,
  payload: collectionMap
});

export const fetchCollectionFail = errorMessage => ({
  type: FETCH_COLLECTION_FAILURE,
  payload: errorMessage
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collection");
    dispatch(fetchCollectionRequest());
    collectionRef
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsToMap(snapshot);
      dispatch(fetchCollectionSuccess(collectionsMap));
    })
      .catch(error => dispatch(fetchCollectionFail(error.message)));
  };
};
