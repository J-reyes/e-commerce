import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

// have access to match from <Route />
const ShopPage = ({ match }) => {
  // console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      {/* dynamically get the correct category from reducer */}
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
  );
};

export default ShopPage;
