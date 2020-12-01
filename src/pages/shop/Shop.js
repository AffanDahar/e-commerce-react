import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../collectionpage/CollectionPage";

import WithSpinner from "../../components/withSpinner/WithSpinner";
import { selectCollectionFetching, selectCollectionLoaded } from "../../reducers/shop/shopSelect";
import { createStructuredSelector } from "reselect";
import { fetchCollectionStartAsync } from "../../reducers/shop/shopAction";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const Shop = ({ match , isCollectionFetching , fetchCollectionStartAsync , isCollectionLoaded }) => {
  useEffect(() => {

    fetchCollectionStartAsync()
  }, []);
  return (
    <div className="shop">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
        )}
      />
    </div>
  );
};
 const mapStateToProps =createStructuredSelector ({
   isCollectionFetching : selectCollectionFetching,
   isCollectionLoaded : selectCollectionLoaded
 }) 
const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync : () => dispatch(fetchCollectionStartAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
